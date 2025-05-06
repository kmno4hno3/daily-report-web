use chrono::{DateTime, FixedOffset, NaiveDate, TimeZone, Utc};
use serde::{Deserialize, Serialize};
use sqlx::{Decode, FromRow, Type};

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Report {
    pub id: Option<i64>,
    pub date: NaiveDate,
    pub content: Option<String>,
    pub user_id: i64,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, FromRow, Decode)]
pub struct Year {
    pub year: i64,
    pub months: Vec<Month>,
}

#[derive(Debug, Clone, Serialize, Deserialize, FromRow, Type)]
pub struct Month {
    pub month: i64,
    pub days: Vec<i64>,
}

impl Report {
    pub fn new(date: String, content: String, user_id: i64) -> Self {
        let jst = FixedOffset::east_opt(9 * 3600).unwrap();
        let now_jst = jst.from_utc_datetime(&Utc::now().naive_utc());
        let now_utc = now_jst.with_timezone(&Utc);
        let today = now_jst.date_naive();
        let date_parsed = NaiveDate::parse_from_str(&date, "%Y-%m-%d").unwrap_or(today);
        Self {
            id: None,
            date: date_parsed,
            content: Some(content),
            user_id: user_id,
            created_at: now_utc,
            updated_at: now_utc,
        }
    }
}
