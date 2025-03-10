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
async fn get_report_find_by_id(&self, id: i64) -> Result<Option<Report>, sqlx::Error> {}
async fn create_report(&self, content: String) -> Result<Report, sqlx::Error> {}
async fn update_report(&self, id: i64, content: String) -> Result<Report, sqlx::Error> {}
async fn delete_report(&self, id: i64) -> Result<Report, sqlx::Error> {}
