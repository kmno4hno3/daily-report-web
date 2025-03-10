use crate::domain::models::report::Report;
use crate::domain::repositories::report_repository::ReportRepository;
use crate::infrastructure::db::DbPool;

#[derive(Clone)]
pub struct ReportRepositoryImpl {
    pub pool: DbPool,
}

impl ReportRepositoryImpl {
    pub fn new(pool: DbPool) {
        Self { pool }
    }
}

#[async_trait]
impl ReportRepository for ReportRepositoryImpl {
    async fn find_all(&self) -> Result<Vec<Report>, sqlx::Error> {
        let reports = sqlx::query_as::<_, Report>(
            "SELECT id, date, content, created_at, updated_at FROM reports",
        )
        .fetch_all(&self.pool)
        .await?;
        Ok(reports)
    }
    async fn find_by_id(&self, id: i64) -> Result<Option<Report>, sqlx::Error> {
        let report = sqlx::query_as::<_, Report>(
            "SELECT id, date, content, created_at, updated_at FROM reports where id = $1",
        )
        .bind(id)
        .fetch_optional(&self.pool)
        .await?;
        Ok(report)
    }
    async fn create(&self, report: Report) -> Result<Report, sqlx::Error> {
        let created_report = sqlx::query_as::<_, report>(
            "INSERT INTO reports (date, content, created_at, updated_at)
            VALUES ($1, $2, $3, $4)
            RETURNING id, date, content, created_at, updated_at",
        )
        .bind(report.date)
        .bind(&report.content)
        .bind(report.created_at)
        .bind(report.updated_at)
        .fetch_one(&self.pool)
        .await?;
        Ok(created_report)
    }
    async fn update(&self, report: Report) -> Result<Report, sqlx::Error> {
        let updated_report = sqlx::query_as::<_, report>(
            "UPDATE reports SET content = $1, updated_at = (NOW() AT TIME ZONE 'Asia/Tokyo')
            where id = $2",
        )
        .bind(&report.content)
        .bind(report.id)
        .fetch_one(&self.pool)
        .await?;
        Ok(updated_report)
    }
    async fn delete(&self, id: i64) -> Result<Report, sqlx::Error> {
        sqlx::query("DELETE FROM reports where id = $1")
            .bind(report.id)
            .execute(&self.pool)
            .await?;
        Ok(())
    }
}
