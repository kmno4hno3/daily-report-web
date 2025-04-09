use axum::{
    extract::{Path, State},
    response::{IntoResponse, Json},
    routing::get,
    Router,
};
use http::StatusCode;
use serde::{Deserialize, Serialize};
use std::sync::Arc;

use crate::domain::models::user::User;
use crate::usecase::user_usecase::UserService;

#[derive(Clone)]
pub struct AppState<T: UserService> {
    pub user_service: Arc<T>,
}

pub fn create_user_router<T: UserService + Send + Sync + 'static + Clone>(
    user_service: T,
) -> Router {
    let state = AppState {
        user_service: Arc::new(user_service),
    };

    Router::new()
        .route("/users", get(get_all_users::<T>).post(create_user::<T>))
        .route(
            "/user",
            get(get_user::<T>).put(update_user::<T>), // .delete(delete_user::<T>),
        )
        .with_state(state)
}

#[derive(Deserialize)]
struct CreateUserRequest {
    name: String,
    email: String,
    password: String,
}

#[derive(Deserialize)]
struct UpdateUserRequest {
    name: String,
    email: String,
    password: String,
}

#[derive(Serialize)]
struct UserResponse {
    id: Option<i64>,
    name: Option<String>,
    email: String,
    password: String,
}

impl From<User> for UserResponse {
    fn from(user: User) -> Self {
        Self {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
        }
    }
}

#[derive(Serialize, Debug)]
struct ErrorResponse {
    code: u16,
    message: String,
}

impl ErrorResponse {
    fn from(error: sqlx::Error) -> Self {
        let (code, message) = match error {
            sqlx::Error::RowNotFound => (404, "リソースが見つかりません".to_string()),
            sqlx::Error::Database(e) if e.is_unique_violation() => (409, "重複エラー".to_string()),
            _ => (500, "サーバーエラー".to_string()),
        };

        Self { code, message }
    }
}

async fn get_all_users<T: UserService>(State(state): State<AppState<T>>) -> impl IntoResponse {
    match state.user_service.get_all_users().await {
        Ok(users) => Json(
            users
                .into_iter()
                .map(UserResponse::from)
                .collect::<Vec<_>>(),
        )
        .into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch users").into_response(),
    }
}
async fn get_user<T: UserService>(
    State(state): State<AppState<T>>,
    Json(payload): Json<CreateUserRequest>,
) -> impl IntoResponse {
    match state.user_service.get_user_by_email(payload.email).await {
        Ok(Some(user)) => Json(UserResponse::from(user)).into_response(),
        Ok(None) => (StatusCode::NOT_FOUND, "User not found").into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch user").into_response(),
    }
}
async fn create_user<T: UserService>(
    State(state): State<AppState<T>>,
    Json(payload): Json<CreateUserRequest>,
) -> impl IntoResponse {
    match state
        .user_service
        .create_user(payload.name, payload.email, payload.password)
        .await
    {
        Ok(user) => (StatusCode::CREATED, Json(UserResponse::from(user))).into_response(),
        Err(e) => {
            let error_response = ErrorResponse::from(e);
            (
                StatusCode::from_u16(error_response.code)
                    .unwrap_or(StatusCode::INTERNAL_SERVER_ERROR),
                Json(error_response),
            )
                .into_response()
        }
    }
}
async fn update_user<T: UserService>(
    State(state): State<AppState<T>>,
    Json(payload): Json<UpdateUserRequest>,
) -> impl IntoResponse {
    let result = state
        .user_service
        .update_user(payload.name, payload.email, payload.password)
        .await;
    match result {
        Ok(user) => Json(UserResponse::from(user)).into_response(),
        Err(sqlx::Error::RowNotFound) => (StatusCode::NOT_FOUND, "User not found").into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed update user").into_response(),
    }
}
// async fn delete_user<T: UserService>(State(state): State<AppState<T>>) -> impl IntoResponse {
//     match state.user_service.delete_user(id).await {
//         Ok(_) => StatusCode::NO_CONTENT.into_response(),
//         Err(sqlx::Error::RowNotFound) => {
//             (StatusCode::INTERNAL_SERVER_ERROR, "User not found").into_response()
//         }
//         Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed delete user").into_response(),
//     }
// }
