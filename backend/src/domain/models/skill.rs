use chrono::{DateTime, FixedOffset, TimeZone, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Skill {
    pub id: Option<i64>,
    pub user_id: i64,
    pub name: String,
    pub level: SkillLevel,
    pub category: Option<String>,
    pub description: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, sqlx::Type)]
#[sqlx(type_name = "text")]
pub enum SkillLevel {
    #[sqlx(rename = "beginner")]
    Beginner,
    #[sqlx(rename = "intermediate")]
    Intermediate,
    #[sqlx(rename = "advanced")]
    Advanced,
    #[sqlx(rename = "expert")]
    Expert,
}

impl std::fmt::Display for SkillLevel {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            SkillLevel::Beginner => write!(f, "beginner"),
            SkillLevel::Intermediate => write!(f, "intermediate"),
            SkillLevel::Advanced => write!(f, "advanced"),
            SkillLevel::Expert => write!(f, "expert"),
        }
    }
}

impl Skill {
    pub fn new(
        user_id: i64,
        name: String,
        level: SkillLevel,
        category: Option<String>,
        description: Option<String>,
    ) -> Self {
        let jst = FixedOffset::east_opt(9 * 3600).unwrap();
        let now_jst = jst.from_utc_datetime(&Utc::now().naive_utc());
        let now_utc = now_jst.with_timezone(&Utc);
        
        Self {
            id: None,
            user_id,
            name,
            level,
            category,
            description,
            created_at: now_utc,
            updated_at: now_utc,
        }
    }
}