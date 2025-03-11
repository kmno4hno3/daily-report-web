use chrono::{DateTime, FixedOffset, NaiveDate, TimeZone, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Report {
    pub id: Option<i64>,
    pub date: NaiveDate,
    pub content: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Report {
    pub fn new(content: String) -> Self {
        let jst = FixedOffset::east_opt(9 * 3600).unwrap();
        let now_jst = jst.from_utc_datetime(&Utc::now().naive_utc());
        let now_utc = now_jst.with_timezone(&Utc);
        let today = now_jst.date_naive();
        Self {
            id: None,
            date: today,
            content: Some(content),
            created_at: now_utc,
            updated_at: now_utc,
        }
    }
}
