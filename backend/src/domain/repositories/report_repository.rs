use crate::domain::models::report::{Report, Year};
use async_trait::async_trait;

#[async_trait]
pub trait ReportRepository {
    async fn find_all(&self) -> Result<Vec<Report>, sqlx::Error>;
    async fn find_all_by_user(&self, user_id: i64) -> Result<Vec<Report>, sqlx::Error>;
    async fn find_by_id(&self, id: i64, user_id: i64) -> Result<Option<Report>, sqlx::Error>;
    async fn find_by_date(
        &self,
        year: i64,
        month: i64,
        day: i64,
        user_id: i64,
    ) -> Result<Option<Report>, sqlx::Error>;
    async fn find_available_dates_by_year(
        &self,
        year: i64,
        user_id: i64,
    ) -> Result<Year, sqlx::Error>;
    async fn create(&self, report: Report) -> Result<Report, sqlx::Error>;
    async fn update(&self, report: Report) -> Result<Report, sqlx::Error>;
    async fn delete(&self, report: Report) -> Result<(), sqlx::Error>;
}
