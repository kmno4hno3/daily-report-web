use crate::domain::models::user::User;
use crate::domain::repositories::user_repository::UserRepository;
use crate::infrastructure::db::DbPool;
use async_trait::async_trait;

#[derive(Clone)]
pub struct UserRepositoryImpl {
    pub pool: DbPool,
}

impl UserRepositoryImpl {
    pub fn new(pool: DbPool) -> Self {
        Self { pool }
    }
}

#[async_trait]
impl UserRepository for UserRepositoryImpl {
    async fn find_all(&self) -> Result<Vec<User>, sqlx::Error> {
        let users = sqlx::query_as::<_, User>(
            "SELECT id, name, email, password, created_at, updated_at FROM users",
        )
        .fetch_all(&self.pool)
        .await?;
        Ok(users)
    }
    async fn find_by_id(&self, id: i64) -> Result<Option<User>, sqlx::Error> {
        let user = sqlx::query_as::<_, User>(
            "SELECT id, name, email, password, created_at, updated_at FROM users where id = $1",
        )
        .bind(id)
        .fetch_optional(&self.pool)
        .await?;
        Ok(user)
    }
    async fn create(&self, user: User) -> Result<User, sqlx::Error> {
        let created_user = sqlx::query_as::<_, User>(
            "INSERT INTO users (name, email, password, created_at, updated_at)
            VALUES ($1, $2, $3, $4)
            RETURNING id, name, email, password, created_at, updated_at",
        )
        .bind(user.name)
        .bind(&user.email)
        .bind(&user.password)
        .bind(user.created_at)
        .bind(user.updated_at)
        .fetch_one(&self.pool)
        .await?;
        Ok(created_user)
    }
    async fn update(&self, user: User) -> Result<User, sqlx::Error> {
        let updated_user = sqlx::query_as::<_, User>(
            "UPDATE users SET name = $1, email = $2, password = $3, updated_at = (NOW() AT TIME ZONE 'Asia/Tokyo')
            where id = $4
            RETURNING id, name, email, password, created_at, updated_at",
        )
        .bind(&user.name)
        .bind(&user.email)
        .bind(&user.password)
        .bind(user.id)
        .fetch_one(&self.pool)
        .await?;
        Ok(updated_user)
    }
    async fn delete(&self, user: User) -> Result<(), sqlx::Error> {
        sqlx::query("DELETE FROM users WHERE id = $1")
            .bind(user.id)
            .execute(&self.pool)
            .await?;
        Ok(())
    }
}
