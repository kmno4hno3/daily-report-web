use axum::{
    extract::{Path, State},
    response::{IntoResponse, Json},
    routing::get,
    Router,
};
use chrono::NaiveDate;
use http::StatusCode;
use serde::{Deserialize, Serealize};
use std::sync::Arc;

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
        .route("/reports", get(get_all_reports::<T>))
        .post(create_report::<T>)
        .route(
            "/report/{id}",
            get(get_report_by_id::<T>)
                .put(update_report::<T>)
                .delete(delete_report::<T>),
        )
        .with_state(state)
}

#[derive(Deserialize)]
struct CreateReportRequest {
    content: String,
}

#[derive(Deserialize)]
struct UpdateReportRequest {
    content: String,
}

#[derive(Serialize)]
struct ReportResponse {
    id: i64,
    date: NaiveDate,
    content: String,
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

async fn get_all_reports<T: ReportService>(State(state): State<AppState<T>>) -> impl IntoResponse {
    match state.report_service.get_all_reports().await {
        Ok(reports) => Json(
            reports
                .into_iter()
                .map(ReportResponse::from)
                .collect::<Vec<_>>(),
        ),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch reports").into_response(),
    }
}
async fn get_report_find_by_id(
    State(state): State<AppState<T>>,
    Path(id): Path<id>,
) -> impl IntoResponse {
    match state.report_service.get_report_by_id(id).await {
        Ok(Some(report)) => Json(ReportResponse::from(report).into_response()),
        Ok(None) => (StatusCode::NOT_FOUND, "Report not found").into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch report").into_response(),
    }
}
async fn create_report(
    State(state): State<AppState<T>>,
    Json(payload): Json<CreateReportRequest>,
) -> impl IntoResponse {
    match state.report_service.create_report(payload.content).await {
        Ok(report) => (StatusCode::CREATED, Json(ReportResponse::from(report))).into_response,
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to create report"),
    }
}
async fn update_report(
    State(state): State<AppState<T>>,
    Path(id): Path<id>,
    Json(payload): Json<UpdateResponse>,
) -> impl IntoResponse {
    match state
        .report_service
        .update_response(id, payload.content)
        .await
    {
        Ok(report) => Json(ReportResponse::from(report).into_response()),
        Err(sqlx::Error::RowNotFound) => {
            (StatusCode::INTERNAL_SERVER_ERROR, "Report not found").into_response()
        }
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed update report").into_response(),
    }
}
async fn delete_report(State(state): State<AppState<T>, Path(id): Path<id>>) -> impl IntoResponse {
    match state.report_service.delete_report(id).await {
        Ok(report) => StatusCode::NO_CONTENT.into_response(),
        Err(sqlx::Error::RowNotFound) => {
            (StatusCode::INTERNAL_SERVER_ERROR, "Report not found").into_response()
        }
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed delete report").into_response(),
    }
}
