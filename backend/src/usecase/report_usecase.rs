use crate::domain::models::report::Report;
use crate::domain::repositories::report_repository;
use async_trait::async_trait;

#[derive(Clone)]
pub struct ReportUsecase<T: ReportRepository + Clone> {
    report: T,
}

impl<T: ReportRepository + Clone> ReportUsecase<T> {
    pub fn new(repository: T) -> Self {
        Self { repository }
    }
}

#[async_trait]
pub trait ReportService {
    async fn find_all(&self) -> Result<Vec<Report>, sqlx::Error>;
    async fn find_by_id(&self, id: i64) -> Result<Option<Report>, sqlx::Error>;
    async fn create(&self, content: String) -> Result<Report, sqlx::Error>;
    async fn update(&self, content: String) -> Result<Report, sqlx::Error>;
    async fn delete(&self, id: i64) -> Result<Report, sqlx::Error>;
}

#[async_trait]
impl<T: ReportRepository + Send + Sync + Clone> ReportService for ReportUsecase<T> {
    async fn find_all(&self) -> Result<Vec<Report>, sqlx::Error> {
        self.repository.find_all().await?
    }
    async fn find_by_id(&self, id: i64) -> Result<Option<Report>, sqlx::Error> {
        self.repository.find_by_id(id).await?
    }
    async fn create(&self, content: String) -> Result<Report, sqlx::Error> {
        let new_report = Report::new(content);
        self.repository.create(new_report).await?
    }
    async fn update(&self, id: i64, content: String) -> Result<Report, sqlx::Error> {
        let existing_report = self.reporsitory.find_by_id(id).await?;
        if let Some(mut report) = existing_report {
            report.content = Some(content);
            return self.repository.update(report).await?;
        }
    }
    async fn delete(&self, id: i64) -> Result<Report, sqlx::Error> {
        self.repository.delete(id).await?
    }
}
