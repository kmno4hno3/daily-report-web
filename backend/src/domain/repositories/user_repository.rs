use crate::domain::models::user::User;
use async_trait::async_trait;

#[async_trait]
pub trait UserRepository {
    async fn find_all(&self) -> Result<Vec<User>, sqlx::Error>;
    async fn find_by_id(&self, id: i64) -> Result<Option<User>, sqlx::Error>;
    async fn find_by_email(&self, email: &String) -> Result<Option<User>, sqlx::Error>;
    async fn create(&self, user: User) -> Result<User, sqlx::Error>;
    async fn update(&self, user: User) -> Result<User, sqlx::Error>;
    async fn delete(&self, user: User) -> Result<(), sqlx::Error>;
}
