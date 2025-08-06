use crate::domain::models::skill::Skill;
use async_trait::async_trait;

#[async_trait]
pub trait SkillRepository {
    async fn find_all_by_user_id(&self, user_id: i64) -> Result<Vec<Skill>, sqlx::Error>;
    async fn find_by_id(&self, id: i64) -> Result<Option<Skill>, sqlx::Error>;
    async fn create(&self, skill: Skill) -> Result<Skill, sqlx::Error>;
    async fn update(&self, skill: Skill) -> Result<Skill, sqlx::Error>;
    async fn delete(&self, skill: Skill) -> Result<(), sqlx::Error>;
}