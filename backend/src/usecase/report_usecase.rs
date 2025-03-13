use crate::domain::models::report::Report;
use crate::domain::repositories::report_repository::ReportRepository;
use async_trait::async_trait;

#[derive(Clone)]
pub struct ReportUsecase<T: ReportRepository + Clone> {
    repository: T,
}

impl<T: ReportRepository + Clone> ReportUsecase<T> {
    pub fn new(repository: T) -> Self {
        Self { repository }
    }
}

#[async_trait]
pub trait ReportService {
    async fn get_all_reports(&self) -> Result<Vec<Report>, sqlx::Error>;
    async fn get_report_by_id(&self, id: i64) -> Result<Option<Report>, sqlx::Error>;
    async fn create_report(&self, content: String) -> Result<Report, sqlx::Error>;
    async fn update_report(&self, id: i64, content: String) -> Result<Report, sqlx::Error>;
    async fn delete_report(&self, id: i64) -> Result<(), sqlx::Error>;
}

#[async_trait]
impl<T: ReportRepository + Send + Sync + Clone> ReportService for ReportUsecase<T> {
    async fn get_all_reports(&self) -> Result<Vec<Report>, sqlx::Error> {
        self.repository.find_all().await
    }
    async fn get_report_by_id(&self, id: i64) -> Result<Option<Report>, sqlx::Error> {
        self.repository.find_by_id(id).await
    }
    async fn create_report(&self, content: String) -> Result<Report, sqlx::Error> {
        let new_report = Report::new(content);
        self.repository.create(new_report).await
    }
    async fn update_report(&self, id: i64, content: String) -> Result<Report, sqlx::Error> {
        let existing_report = self.repository.find_by_id(id).await?;
        if let Some(mut report) = existing_report {
            report.content = Some(content);
            return self.repository.update(report).await;
        }

        Err(sqlx::Error::RowNotFound)
    }
    async fn delete_report(&self, id: i64) -> Result<(), sqlx::Error> {
        self.repository.delete(id).await
    }
}
