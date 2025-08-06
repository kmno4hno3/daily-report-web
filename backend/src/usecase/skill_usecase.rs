use crate::domain::models::skill::{Skill, SkillLevel};
use crate::domain::repositories::skill_repository::SkillRepository;
use async_trait::async_trait;

#[derive(Clone)]
pub struct SkillUsecase<T: SkillRepository + Clone> {
    repository: T,
}

impl<T: SkillRepository + Clone> SkillUsecase<T> {
    pub fn new(repository: T) -> Self {
        Self { repository }
    }
}

#[async_trait]
pub trait SkillService {
    async fn get_skills_by_user_id(&self, user_id: i64) -> Result<Vec<Skill>, sqlx::Error>;
    async fn get_skill_by_id(&self, id: i64) -> Result<Option<Skill>, sqlx::Error>;
    async fn create_skill(
        &self,
        user_id: i64,
        name: String,
        level: SkillLevel,
        category: Option<String>,
        description: Option<String>,
    ) -> Result<Skill, sqlx::Error>;
    async fn update_skill(&self, skill: Skill) -> Result<Skill, sqlx::Error>;
    async fn delete_skill(&self, id: i64) -> Result<(), sqlx::Error>;
}

#[async_trait]
impl<T: SkillRepository + Send + Sync + Clone> SkillService for SkillUsecase<T> {
    async fn get_skills_by_user_id(&self, user_id: i64) -> Result<Vec<Skill>, sqlx::Error> {
        self.repository.find_all_by_user_id(user_id).await
    }

    async fn get_skill_by_id(&self, id: i64) -> Result<Option<Skill>, sqlx::Error> {
        self.repository.find_by_id(id).await
    }

    async fn create_skill(
        &self,
        user_id: i64,
        name: String,
        level: SkillLevel,
        category: Option<String>,
        description: Option<String>,
    ) -> Result<Skill, sqlx::Error> {
        let new_skill = Skill::new(user_id, name, level, category, description);
        self.repository.create(new_skill).await
    }

    async fn update_skill(&self, skill: Skill) -> Result<Skill, sqlx::Error> {
        self.repository.update(skill).await
    }

    async fn delete_skill(&self, id: i64) -> Result<(), sqlx::Error> {
        let existing_skill = self.repository.find_by_id(id).await?;
        if let Some(skill) = existing_skill {
            self.repository.delete(skill).await?;
            Ok(())
        } else {
            Err(sqlx::Error::RowNotFound)
        }
    }
}