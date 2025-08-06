use crate::domain::models::skill::Skill;
use crate::domain::repositories::skill_repository::SkillRepository;
use async_trait::async_trait;
use sqlx::PgPool;

#[derive(Clone)]
pub struct SkillRepositoryImpl {
    pool: PgPool,
}

impl SkillRepositoryImpl {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }
}

#[async_trait]
impl SkillRepository for SkillRepositoryImpl {
    async fn find_all_by_user_id(&self, user_id: i64) -> Result<Vec<Skill>, sqlx::Error> {
        let profiles = sqlx::query!(
            "SELECT id, user_id, display_name, bio, created_at, updated_at 
             FROM profiles 
             WHERE user_id = $1 
             ORDER BY display_name",
            user_id
        )
        .fetch_all(&self.pool)
        .await?;

        let skills = profiles.into_iter().map(|profile| Skill {
            id: Some(profile.id),
            user_id: profile.user_id,
            name: profile.display_name.unwrap_or_default(),
            level: crate::domain::models::skill::SkillLevel::Beginner,
            category: Some("general".to_string()),
            description: profile.bio,
            created_at: profile.created_at.unwrap_or_default(),
            updated_at: profile.updated_at.unwrap_or_default(),
        }).collect();

        Ok(skills)
    }

    async fn find_by_id(&self, id: i64) -> Result<Option<Skill>, sqlx::Error> {
        let profile = sqlx::query!(
            "SELECT id, user_id, display_name, bio, created_at, updated_at 
             FROM profiles 
             WHERE id = $1",
            id
        )
        .fetch_optional(&self.pool)
        .await?;

        let skill = profile.map(|p| Skill {
            id: Some(p.id),
            user_id: p.user_id,
            name: p.display_name.unwrap_or_default(),
            level: crate::domain::models::skill::SkillLevel::Beginner,
            category: Some("general".to_string()),
            description: p.bio,
            created_at: p.created_at.unwrap_or_default(),
            updated_at: p.updated_at.unwrap_or_default(),
        });

        Ok(skill)
    }

    async fn create(&self, skill: Skill) -> Result<Skill, sqlx::Error> {
        let profile = sqlx::query!(
            "INSERT INTO profiles (user_id, display_name, bio) 
             VALUES ($1, $2, $3) 
             RETURNING id, user_id, display_name, bio, created_at, updated_at",
            skill.user_id,
            skill.name,
            skill.description
        )
        .fetch_one(&self.pool)
        .await?;

        let created_skill = Skill {
            id: Some(profile.id),
            user_id: profile.user_id,
            name: profile.display_name.unwrap_or_default(),
            level: skill.level,
            category: skill.category,
            description: profile.bio,
            created_at: profile.created_at.unwrap_or_default(),
            updated_at: profile.updated_at.unwrap_or_default(),
        };

        Ok(created_skill)
    }

    async fn update(&self, skill: Skill) -> Result<Skill, sqlx::Error> {
        let profile = sqlx::query!(
            "UPDATE profiles 
             SET display_name = $2, bio = $3, updated_at = CURRENT_TIMESTAMP 
             WHERE id = $1 
             RETURNING id, user_id, display_name, bio, created_at, updated_at",
            skill.id,
            skill.name,
            skill.description
        )
        .fetch_one(&self.pool)
        .await?;

        let updated_skill = Skill {
            id: Some(profile.id),
            user_id: profile.user_id,
            name: profile.display_name.unwrap_or_default(),
            level: skill.level,
            category: skill.category,
            description: profile.bio,
            created_at: profile.created_at.unwrap_or_default(),
            updated_at: profile.updated_at.unwrap_or_default(),
        };

        Ok(updated_skill)
    }

    async fn delete(&self, skill: Skill) -> Result<(), sqlx::Error> {
        sqlx::query("DELETE FROM profiles WHERE id = $1")
            .bind(skill.id)
            .execute(&self.pool)
            .await?;

        Ok(())
    }
}