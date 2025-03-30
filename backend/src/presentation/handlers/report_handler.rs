use axum::{
    extract::{Path, State},
    response::{IntoResponse, Json},
    routing::get,
    Router,
};
use chrono::NaiveDate;
use http::StatusCode;
use serde::{Deserialize, Serialize};
use std::sync::Arc;

use crate::domain::models::report::{Month, Report, Year};
use crate::usecase::report_usecase::ReportService;

#[derive(Clone)]
pub struct AppState<T: ReportService> {
    pub report_service: Arc<T>,
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
        .route("/report/{id}", get(get_report_by_id::<T>))
        .route(
            "/report/{year}/{month}/{day}",
            get(get_report_by_date::<T>)
                .put(update_report::<T>)
                .delete(delete_report::<T>),
        )
        .route(
            "/report/dates/{year}",
            get(get_available_dates_by_year::<T>),
        )
        .with_state(state)
}

#[derive(Deserialize)]
struct CreateReportRequest {
    date: String,
    content: String,
}

#[derive(Deserialize)]
struct UpdateReportRequest {
    content: String,
}

#[derive(Serialize)]
struct ReportResponse {
    id: Option<i64>,
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
#[derive(Serialize)]
struct YearResponse {
    year: i64,
    months: Vec<Month>,
}

impl From<Year> for YearResponse {
    fn from(year_data: Year) -> Self {
        Self {
            year: year_data.year,
            months: year_data.months,
        }
    }
}

#[derive(Serialize, Debug)]
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
) -> impl IntoResponse {
    match state.report_service.get_report_by_id(id).await {
        Ok(Some(report)) => Json(ReportResponse::from(report)).into_response(),
        Ok(None) => (StatusCode::NOT_FOUND, "Report not found").into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch report").into_response(),
    }
}
async fn get_report_by_date<T: ReportService>(
    State(state): State<AppState<T>>,
    Path((year, month, day)): Path<(i64, i64, i64)>,
) -> impl IntoResponse {
    match state
        .report_service
        .get_report_by_date(year, month, day)
        .await
    {
        Ok(Some(report)) => Json(ReportResponse::from(report)).into_response(),
        Ok(None) => (StatusCode::NOT_FOUND, "Report not found").into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch report").into_response(),
    }
}
async fn create_report<T: ReportService>(
    State(state): State<AppState<T>>,
    Json(payload): Json<CreateReportRequest>,
) -> impl IntoResponse {
    match state
        .report_service
        .create_report(payload.date, payload.content)
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
    Path((year, month, day)): Path<(i64, i64, i64)>,
    Json(payload): Json<UpdateReportRequest>,
) -> impl IntoResponse {
    let result = state
        .report_service
        .update_report(year, month, day, payload.content)
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
    Path((year, month, day)): Path<(i64, i64, i64)>,
) -> impl IntoResponse {
    match state.report_service.delete_report(year, month, day).await {
        Ok(_) => StatusCode::NO_CONTENT.into_response(),
        Err(sqlx::Error::RowNotFound) => {
            (StatusCode::INTERNAL_SERVER_ERROR, "Report not found").into_response()
        }
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed delete report").into_response(),
    }
}
async fn get_available_dates_by_year<T: ReportService>(
    State(state): State<AppState<T>>,
    Path(year): Path<i64>,
) -> impl IntoResponse {
    match state.report_service.get_available_dates_by_year(year).await {
        Ok(dates) => Json(YearResponse::from(dates)).into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch dates").into_response(),
    }
}
