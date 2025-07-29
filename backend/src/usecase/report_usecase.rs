use crate::domain::models::report::{Report, Year};
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
    async fn get_all_reports_by_user(&self, user_id: i64) -> Result<Vec<Report>, sqlx::Error>;
    async fn get_report_by_id(&self, id: i64, user_id: i64) -> Result<Option<Report>, sqlx::Error>;
    async fn get_report_by_date(
        &self,
        year: i64,
        month: i64,
        day: i64,
        user_id: i64,
    ) -> Result<Option<Report>, sqlx::Error>;
    async fn create_report(
        &self,
        date: String,
        content: String,
        user_id: i64,
    ) -> Result<Report, sqlx::Error>;
    async fn update_report(
        &self,
        id: i64,
        content: String,
        user_id: i64,
    ) -> Result<Report, sqlx::Error>;
    async fn delete_report(&self, id: i64, user_id: i64) -> Result<(), sqlx::Error>;
    async fn get_available_dates_by_year(
        &self,
        year: i64,
        user_id: i64,
    ) -> Result<Year, sqlx::Error>;
    async fn get_available_dates_by_year_with_search(
        &self,
        year: i64,
        user_id: i64,
        query: Option<&str>,
    ) -> Result<Year, sqlx::Error>;
}

#[async_trait]
impl<T: ReportRepository + Send + Sync + Clone> ReportService for ReportUsecase<T> {
    async fn get_all_reports(&self) -> Result<Vec<Report>, sqlx::Error> {
        self.repository.find_all().await
    }
    async fn get_all_reports_by_user(&self, user_id: i64) -> Result<Vec<Report>, sqlx::Error> {
        self.repository.find_all_by_user(user_id).await
    }
    async fn get_report_by_id(&self, id: i64, user_id: i64) -> Result<Option<Report>, sqlx::Error> {
        self.repository.find_by_id(id, user_id).await
    }
    async fn get_report_by_date(
        &self,
        year: i64,
        month: i64,
        day: i64,
        user_id: i64,
    ) -> Result<Option<Report>, sqlx::Error> {
        let result = self
            .repository
            .find_by_date(year, month, day, user_id)
            .await;
        return result;
    }
    async fn create_report(
        &self,
        date: String,
        content: String,
        user_id: i64,
    ) -> Result<Report, sqlx::Error> {
        let new_report = Report::new(date, content, user_id);
        self.repository.create(new_report).await
    }
    async fn update_report(
        &self,
        id: i64,
        content: String,
        user_id: i64,
    ) -> Result<Report, sqlx::Error> {
        let existing_report = self.repository.find_by_id(id, user_id).await?;
        if let Some(mut report) = existing_report {
            report.content = Some(content);
            return self.repository.update(report).await;
        }

        Err(sqlx::Error::RowNotFound)
    }
    async fn delete_report(&self, id: i64, user_id: i64) -> Result<(), sqlx::Error> {
        let existing_report = self.repository.find_by_id(id, user_id).await?;
        if let Some(report) = existing_report {
            self.repository.delete(report).await?;
            Ok(())
        } else {
            Err(sqlx::Error::RowNotFound)
        }
    }
    async fn get_available_dates_by_year(
        &self,
        year: i64,
        user_id: i64,
    ) -> Result<Year, sqlx::Error> {
        self.repository
            .find_available_dates_by_year(year, user_id)
            .await
    }

    async fn get_available_dates_by_year_with_search(
        &self,
        year: i64,
        user_id: i64,
        query: Option<&str>,
    ) -> Result<Year, sqlx::Error> {
        match query {
            Some(q) if !q.is_empty() => {
                self.repository
                    .find_available_dates_by_year_with_search(year, user_id, q)
                    .await
            }
            _ => {
                self.repository
                    .find_available_dates_by_year(year, user_id)
                    .await
            }
        }
    }
}
