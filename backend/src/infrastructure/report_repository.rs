use crate::domain::models::report::{Month, Report, Year};
use crate::domain::repositories::report_repository::ReportRepository;
use crate::infrastructure::db::DbPool;
use async_trait::async_trait;
use sqlx::Row;
use std::collections::HashMap;

#[derive(Clone)]
pub struct ReportRepositoryImpl {
    pub pool: DbPool,
}

impl ReportRepositoryImpl {
    pub fn new(pool: DbPool) -> Self {
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
    async fn find_by_date(
        &self,
        year: i64,
        month: i64,
        day: i64,
        user_id: i64,
    ) -> Result<Option<Report>, sqlx::Error> {
        let report = sqlx::query_as::<_, Report>(
            "SELECT id, date, content, user_id, created_at, updated_at FROM reports WHERE EXTRACT(YEAR FROM date) = $1 AND EXTRACT(MONTH FROM date) = $2 AND EXTRACT(DAY FROM date) = $3 AND user_id = $4;",
        )
        .bind(year)
        .bind(month)
        .bind(day)
        .bind(user_id)
        .fetch_optional(&self.pool)
        .await?;

        Ok(report)
    }
    async fn create(&self, report: Report) -> Result<Report, sqlx::Error> {
        let created_report = sqlx::query_as::<_, Report>(
            "INSERT INTO reports (date, content, user_id, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, date, content, user_id, created_at, updated_at",
        )
        .bind(report.date)
        .bind(&report.content)
        .bind(report.user_id)
        .bind(report.created_at)
        .bind(report.updated_at)
        .fetch_one(&self.pool)
        .await?;
        Ok(created_report)
    }
    async fn update(&self, report: Report) -> Result<Report, sqlx::Error> {
        let updated_report = sqlx::query_as::<_, Report>(
            "UPDATE reports SET content = $1, updated_at = (NOW() AT TIME ZONE 'Asia/Tokyo')
            where id = $2 AND user_id = $3
            RETURNING id, date, user_id, content, created_at, updated_at",
        )
        .bind(&report.content)
        .bind(report.id)
        .bind(report.user_id)
        .fetch_one(&self.pool)
        .await?;
        Ok(updated_report)
    }
    async fn delete(&self, report: Report) -> Result<(), sqlx::Error> {
        sqlx::query("DELETE FROM reports WHERE id = $1")
            .bind(report.id)
            .execute(&self.pool)
            .await?;
        Ok(())
    }
    async fn find_available_dates_by_year(
        &self,
        year: i64,
        user_id: i64,
    ) -> Result<Year, sqlx::Error> {
        let rows = sqlx::query(
            "SELECT DISTINCT 
                CAST(EXTRACT(YEAR FROM date) AS INTEGER) AS year, 
                CAST(EXTRACT(MONTH FROM date) AS INTEGER) AS month, 
                CAST(EXTRACT(DAY FROM date) AS INTEGER) AS day 
            FROM reports 
            WHERE EXTRACT(YEAR FROM date) = $1 AND user_id = $2;",
        )
        .bind(year)
        .bind(user_id)
        .fetch_all(&self.pool)
        .await?;

        let mut month_map: HashMap<i64, Vec<i64>> = HashMap::new();
        for row in rows {
            let month: Option<i32> = row.get("month");
            let day: Option<i32> = row.get("day");

            month_map
                .entry(month.unwrap() as i64)
                .or_insert_with(Vec::new)
                .push(day.unwrap() as i64);
        }

        let months = month_map
            .into_iter()
            .map(|(month, days)| Month { month, days })
            .collect();

        Ok(Year { year, months })
    }
}
