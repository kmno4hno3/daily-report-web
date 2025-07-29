use axum::{
    extract::{Path, Query, State},
    response::{IntoResponse, Json},
    routing::get,
    Router,
};
use chrono::NaiveDate;
use http::{HeaderMap, StatusCode};
use jsonwebtoken::{decode, Algorithm, DecodingKey, Validation};
use serde::{Deserialize, Serialize};
use std::env;
use std::sync::Arc;
use utoipa::{OpenApi, ToSchema};

use crate::domain::models::report::{Month, Report, Year};
use crate::usecase::report_usecase::ReportService;

#[derive(Clone)]
pub struct AppState<T: ReportService> {
    pub report_service: Arc<T>,
}

#[derive(Debug, Deserialize)]
struct Claims {
    id: String,
    email: Option<String>,
    name: Option<String>,
}

pub fn create_report_router<T: ReportService + Send + Sync + 'static + Clone>(
    report_service: T,
) -> Router {
    let state = AppState {
        report_service: Arc::new(report_service),
    };

    Router::new()
        .route(
            "/reports",
            get(get_all_reports::<T>).post(create_report::<T>),
        )
        .route(
            "/report/{id}",
            get(get_report_by_id::<T>)
                .put(update_report::<T>)
                .delete(delete_report::<T>),
        )
        .route(
            "/report/{year}/{month}/{day}",
            get(get_report_by_date::<T>).put(update_report::<T>),
        )
        .route(
            "/report/dates/{year}",
            get(get_available_dates_by_year::<T>),
        )
        .with_state(state)
}

#[derive(Deserialize, ToSchema)]
struct CreateReportRequest {
    date: String,
    content: String,
}

#[derive(Deserialize, ToSchema)]
struct UpdateReportRequest {
    content: String,
}

#[derive(Deserialize)]
struct SearchQuery {
    q: Option<String>,
}

#[derive(Serialize, ToSchema)]
struct ReportResponse {
    id: Option<i64>,
    #[schema(value_type = String)]
    date: NaiveDate,
    content: Option<String>,
}

impl From<Report> for ReportResponse {
    fn from(report: Report) -> Self {
        Self {
            id: report.id,
            date: report.date,
            content: report.content,
        }
    }
}
#[derive(Serialize, ToSchema)]
struct YearResponse {
    year: i64,
    months: Vec<Month>,
}

impl From<Year> for YearResponse {
    fn from(year_data: Year) -> Self {
        let mut months = year_data.months;
        months.sort_by_key(|m| m.month);

        Self {
            year: year_data.year,
            months: months,
        }
    }
}

#[derive(Serialize, Debug, ToSchema)]
struct ErrorResponse {
    code: u16,
    message: String,
}

impl ErrorResponse {
    fn from(error: sqlx::Error) -> Self {
        let (code, message) = match error {
            sqlx::Error::RowNotFound => (404, "リソースが見つかりません".to_string()),
            sqlx::Error::Database(e) if e.is_unique_violation() => (409, "重複エラー".to_string()),
            _ => (500, "サーバーエラー".to_string()),
        };

        Self { code, message }
    }
}

async fn get_all_reports<T: ReportService>(State(state): State<AppState<T>>) -> impl IntoResponse {
    match state.report_service.get_all_reports().await {
        Ok(reports) => Json(
            reports
                .into_iter()
                .map(ReportResponse::from)
                .collect::<Vec<_>>(),
        )
        .into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch reports").into_response(),
    }
}
async fn get_report_by_id<T: ReportService>(
    State(state): State<AppState<T>>,
    Path(id): Path<i64>,
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
    match state.report_service.get_report_by_id(id, user_id).await {
        Ok(Some(report)) => {
            println!("report: {:?}", report);
            Json(ReportResponse::from(report)).into_response()
        }
        Ok(None) => {
            println!("report not found");
            (StatusCode::NOT_FOUND, "Report not found").into_response()
        }
        Err(e) => {
            println!("error: {:?}", e);
            (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch report").into_response()
        }
    }
}
async fn get_report_by_date<T: ReportService>(
    State(state): State<AppState<T>>,
    headers: HeaderMap,
    Path((year, month, day)): Path<(i64, i64, i64)>,
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

    match state
        .report_service
        .get_report_by_date(year, month, day, user_id)
        .await
    {
        Ok(Some(report)) => Json(ReportResponse::from(report)).into_response(),
        Ok(None) => (StatusCode::NOT_FOUND, "Report not found").into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch report").into_response(),
    }
}
async fn create_report<T: ReportService>(
    State(state): State<AppState<T>>,
    headers: HeaderMap,
    Json(payload): Json<CreateReportRequest>,
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

    match state
        .report_service
        .create_report(payload.date, payload.content, user_id)
        .await
    {
        Ok(report) => (StatusCode::CREATED, Json(ReportResponse::from(report))).into_response(),
        Err(e) => {
            let error_response = ErrorResponse::from(e);
            (
                StatusCode::from_u16(error_response.code)
                    .unwrap_or(StatusCode::INTERNAL_SERVER_ERROR),
                Json(error_response),
            )
                .into_response()
        }
    }
}
async fn update_report<T: ReportService>(
    State(state): State<AppState<T>>,
    // Path((year, month, day)): Path<(i64, i64, i64)>,
    Path(id): Path<i64>,
    headers: HeaderMap,
    Json(payload): Json<UpdateReportRequest>,
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

    let result = state
        .report_service
        .update_report(id, payload.content, user_id)
        .await;
    match result {
        Ok(report) => Json(ReportResponse::from(report)).into_response(),
        Err(sqlx::Error::RowNotFound) => {
            (StatusCode::NOT_FOUND, "Report not found").into_response()
        }
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed update report").into_response(),
    }
}
async fn delete_report<T: ReportService>(
    State(state): State<AppState<T>>,
    Path(id): Path<i64>,
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

    match state.report_service.delete_report(id, user_id).await {
        Ok(_) => StatusCode::NO_CONTENT.into_response(),
        Err(sqlx::Error::RowNotFound) => {
            (StatusCode::INTERNAL_SERVER_ERROR, "Report not found").into_response()
        }
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed delete report").into_response(),
    }
}

#[utoipa::path(
  get,
  path = "/api/report/dates/{year}",
  params(
      ("year" = i64, Path, description = "Year to get available dates for"),
      ("q" = Option<String>, Query, description = "Optional search query to filter reports")
  ),
  security(
      ("bearer_auth" = [])
  ),
  responses(
      (status = 200, description = "Year found successfully", body = YearResponse),
      (status = 401, description = "Unauthorized"),
      (status = 500, description = "Failed to fetch dates")
  )
)]
async fn get_available_dates_by_year<T: ReportService>(
    State(state): State<AppState<T>>,
    Path(year): Path<i64>,
    Query(query): Query<SearchQuery>,
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

    match state
        .report_service
        .get_available_dates_by_year_with_search(year, user_id, query.q.as_deref())
        .await
    {
        Ok(dates) => Json(YearResponse::from(dates)).into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch dates").into_response(),
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

// OpenAPI documentation functions
#[utoipa::path(
    get,
    path = "/api/reports",
    responses(
        (status = 200, description = "List all reports successfully", body = [ReportResponse]),
        (status = 500, description = "Failed to fetch reports")
    )
)]
async fn get_all_reports_doc() {}

#[utoipa::path(
    get,
    path = "/api/report/{id}",
    params(
        ("id" = i64, Path, description = "Report ID")
    ),
    security(
        ("bearer_auth" = [])
    ),
    responses(
        (status = 200, description = "Report found successfully", body = ReportResponse),
        (status = 401, description = "Unauthorized"),
        (status = 404, description = "Report not found"),
        (status = 500, description = "Failed to fetch report")
    )
)]
async fn get_report_by_id_doc() {}

#[utoipa::path(
    get,
    path = "/api/report/{year}/{month}/{day}",
    params(
        ("year" = i64, Path, description = "Year"),
        ("month" = i64, Path, description = "Month"),
        ("day" = i64, Path, description = "Day")
    ),
    security(
        ("bearer_auth" = [])
    ),
    responses(
        (status = 200, description = "Report found successfully", body = ReportResponse),
        (status = 401, description = "Unauthorized"),
        (status = 404, description = "Report not found"),
        (status = 500, description = "Failed to fetch report")
    )
)]
async fn get_report_by_date_doc() {}

#[utoipa::path(
    post,
    path = "/api/reports",
    request_body = CreateReportRequest,
    security(
        ("bearer_auth" = [])
    ),
    responses(
        (status = 201, description = "Report created successfully", body = ReportResponse),
        (status = 401, description = "Unauthorized"),
        (status = 409, description = "Duplicate error"),
        (status = 500, description = "Server error")
    )
)]
async fn create_report_doc() {}

#[utoipa::path(
    put,
    path = "/api/report/{id}",
    params(
        ("id" = i64, Path, description = "Report ID")
    ),
    request_body = UpdateReportRequest,
    security(
        ("bearer_auth" = [])
    ),
    responses(
        (status = 200, description = "Report updated successfully", body = ReportResponse),
        (status = 401, description = "Unauthorized"),
        (status = 404, description = "Report not found"),
        (status = 500, description = "Failed update report")
    )
)]
async fn update_report_doc() {}

#[utoipa::path(
    delete,
    path = "/api/report/{id}",
    params(
        ("id" = i64, Path, description = "Report ID")
    ),
    security(
        ("bearer_auth" = [])
    ),
    responses(
        (status = 204, description = "Report deleted successfully"),
        (status = 401, description = "Unauthorized"),
        (status = 500, description = "Failed delete report")
    )
)]
async fn delete_report_doc() {}

#[derive(OpenApi)]
#[openapi(
  paths(
      get_all_reports_doc,
      get_report_by_id_doc,
      get_report_by_date_doc,
      create_report_doc,
      update_report_doc,
      delete_report_doc,
      get_available_dates_by_year
  ),
  components(schemas(
      ReportResponse,
      CreateReportRequest,
      UpdateReportRequest,
      YearResponse,
      Month,
      ErrorResponse
  )),
  security(
      ("bearer_auth" = [])
  )
)]
pub struct ApiDoc;
