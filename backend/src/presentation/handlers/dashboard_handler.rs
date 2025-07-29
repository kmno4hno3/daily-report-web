use axum::{
    extract::State,
    response::{IntoResponse, Json},
    routing::get,
    Router,
};
use chrono::{Datelike, Local, NaiveDate};
use http::{HeaderMap, StatusCode};
use jsonwebtoken::{decode, Algorithm, DecodingKey, Validation};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::env;
use std::sync::Arc;
use utoipa::{OpenApi, ToSchema};

use crate::usecase::report_usecase::ReportService;

#[derive(Clone)]
pub struct DashboardState<T: ReportService> {
    pub report_service: Arc<T>,
}

#[derive(Debug, Deserialize)]
struct Claims {
    id: String,
    email: Option<String>,
    name: Option<String>,
}

#[derive(Serialize, ToSchema)]
struct DashboardResponse {
    statistics: Statistics,
    yearly_summary: Vec<YearlySummary>,
}

#[derive(Serialize, ToSchema)]
struct Statistics {
    total_reports: i64,
    this_month_reports: i64,
    last_month_reports: i64,
}

#[derive(Serialize, ToSchema)]
struct YearlySummary {
    year: i32,
    report_count: i64,
}

pub fn create_dashboard_router<T: ReportService + Send + Sync + 'static + Clone>(
    report_service: T,
) -> Router {
    let state = DashboardState {
        report_service: Arc::new(report_service),
    };

    Router::new()
        .route("/dashboard", get(get_dashboard_data::<T>))
        .with_state(state)
}

async fn get_dashboard_data<T: ReportService>(
    State(state): State<DashboardState<T>>,
    headers: HeaderMap,
) -> impl IntoResponse {
    let user_id = match headers
        .get("Authorization")
        .and_then(|token| {
            token.to_str().ok().and_then(|t| {
                if let Some(token_str) = t.strip_prefix("Bearer ") {
                    verify_token(token_str).ok()
                } else {
                    None
                }
            })
        })
        .and_then(|user| user.id.parse::<i64>().ok())
    {
        Some(id) => id,
        None => return (StatusCode::UNAUTHORIZED).into_response(),
    };

    match state.report_service.get_all_reports_by_user(user_id).await {
        Ok(reports) => {
            let now = Local::now().naive_local().date();
            let current_year = now.year();
            let current_month = now.month();

            let last_month_date = if current_month == 1 {
                NaiveDate::from_ymd_opt(current_year - 1, 12, 1).unwrap()
            } else {
                NaiveDate::from_ymd_opt(current_year, current_month - 1, 1).unwrap()
            };

            let mut total_reports = 0;
            let mut this_month_reports = 0;
            let mut last_month_reports = 0;
            let mut yearly_counts: HashMap<i32, i64> = HashMap::new();

            for report in reports {
                total_reports += 1;

                let report_year = report.date.year();
                let report_month = report.date.month();

                *yearly_counts.entry(report_year).or_insert(0) += 1;

                if report_year == current_year && report_month == current_month {
                    this_month_reports += 1;
                }

                if report_year == last_month_date.year() && report_month == last_month_date.month()
                {
                    last_month_reports += 1;
                }
            }

            let mut yearly_summary: Vec<YearlySummary> = yearly_counts
                .into_iter()
                .map(|(year, count)| YearlySummary {
                    year,
                    report_count: count,
                })
                .collect();

            yearly_summary.sort_by(|a, b| b.year.cmp(&a.year));

            let statistics = Statistics {
                total_reports,
                this_month_reports,
                last_month_reports,
            };

            let response = DashboardResponse {
                statistics,
                yearly_summary,
            };

            Json(response).into_response()
        }
        Err(_) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            "Failed to fetch dashboard data",
        )
            .into_response(),
    }
}

fn verify_token(token: &str) -> Result<Claims, jsonwebtoken::errors::Error> {
    let jwt_secret = env::var("JWT_SECRET").map_err(|_| {
        jsonwebtoken::errors::Error::from(jsonwebtoken::errors::ErrorKind::InvalidToken)
    })?;
    let key = DecodingKey::from_secret(jwt_secret.as_bytes());
    let validation = Validation::new(Algorithm::HS256);
    let data = decode::<Claims>(token, &key, &validation)?;
    Ok(data.claims)
}

// OpenAPI documentation function
#[utoipa::path(
    get,
    path = "/api/dashboard",
    security(
        ("bearer_auth" = [])
    ),
    responses(
        (status = 200, description = "Dashboard data fetched successfully", body = DashboardResponse),
        (status = 401, description = "Unauthorized"),
        (status = 500, description = "Failed to fetch dashboard data")
    )
)]
async fn get_dashboard_data_doc() {}

#[derive(OpenApi)]
#[openapi(
    paths(get_dashboard_data_doc),
    components(schemas(DashboardResponse, Statistics, YearlySummary)),
    security(
        ("bearer_auth" = [])
    )
)]
pub struct DashboardApiDoc;
