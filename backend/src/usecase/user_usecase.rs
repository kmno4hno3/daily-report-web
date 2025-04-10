use crate::domain::models::user::User;
use crate::domain::repositories::user_repository::UserRepository;
use async_trait::async_trait;

#[derive(Clone)]
pub struct UserUsecase<T: UserRepository + Clone> {
    repository: T,
}

impl<T: UserRepository + Clone> UserUsecase<T> {
    pub fn new(repository: T) -> Self {
        Self { repository }
    }
}

#[async_trait]
pub trait UserService {
    async fn get_all_users(&self) -> Result<Vec<User>, sqlx::Error>;
    async fn get_user_by_email(&self, email: String) -> Result<Option<User>, sqlx::Error>;
    async fn create_user(
        &self,
        name: String,
        email: String,
        password: String,
    ) -> Result<User, sqlx::Error>;
    async fn update_user(
        &self,
        name: String,
        email: String,
        password: String,
    ) -> Result<User, sqlx::Error>;
    async fn delete_user(&self, id: i64) -> Result<(), sqlx::Error>;
}

#[async_trait]
impl<T: UserRepository + Send + Sync + Clone> UserService for UserUsecase<T> {
    async fn get_all_users(&self) -> Result<Vec<User>, sqlx::Error> {
        self.repository.find_all().await
    }
    async fn get_user_by_email(&self, email: String) -> Result<Option<User>, sqlx::Error> {
        self.repository.find_by_email(&email).await
    }
    async fn create_user(
        &self,
        name: String,
        email: String,
        password: String,
    ) -> Result<User, sqlx::Error> {
        let new_user = User::new(name, email, password);
        println!("{:?}", new_user);
        self.repository.create(new_user).await
    }
    async fn update_user(
        &self,
        name: String,
        email: String,
        password: String,
    ) -> Result<User, sqlx::Error> {
        // TODO:対応
        let existing_user = self.repository.find_by_email(&email).await?;
        if let Some(mut user) = existing_user {
            user.name = Some(name);
            user.email = email;
            user.password = password;
            return self.repository.update(user).await;
        }

        Err(sqlx::Error::RowNotFound)
    }
    async fn delete_user(&self, id: i64) -> Result<(), sqlx::Error> {
        let existing_user = self.repository.find_by_id(id).await?;
        if let Some(user) = existing_user {
            self.repository.delete(user).await?;
            Ok(())
        } else {
            Err(sqlx::Error::RowNotFound)
        }
    }
}
