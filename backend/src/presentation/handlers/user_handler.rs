use axum::{
    extract::State,
    http::{HeaderMap, StatusCode},
    response::{IntoResponse, Json},
    routing::get,
    Router,
};
use jsonwebtoken::{decode, Algorithm, DecodingKey, Validation};
use serde::{Deserialize, Serialize};
use std::{env, sync::Arc};
use utoipa::{OpenApi, ToSchema};

use crate::domain::models::skill::{Skill, SkillLevel};
use crate::domain::models::user::User;
use crate::usecase::skill_usecase::SkillService;
use crate::usecase::user_usecase::UserService;

#[derive(Clone)]
pub struct AppState<T: UserService, S: SkillService> {
    pub user_service: Arc<T>,
    pub skill_service: Arc<S>,
}

pub fn create_user_router<T: UserService + Send + Sync + 'static + Clone, S: SkillService + Send + Sync + 'static + Clone>(
    user_service: T,
    skill_service: S,
) -> Router {
    let state = AppState {
        user_service: Arc::new(user_service),
        skill_service: Arc::new(skill_service),
    };

    Router::new()
        .route("/users", get(get_all_users::<T, S>).post(create_user::<T, S>))
        .route(
            "/user",
            get(get_user::<T, S>).put(update_user::<T, S>), // .delete(delete_user::<T>),
        )
        .route("/profile", get(get_profile::<T, S>).put(update_profile::<T, S>))
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

#[derive(Debug, Serialize, ToSchema)]
struct SkillResponse {
    id: i64,
    name: String,
    level: String,
    category: Option<String>,
    description: Option<String>,
}

#[derive(Debug, Serialize, ToSchema)]
struct ProfileResponse {
    id: i64,
    name: Option<String>,
    email: String,
    skills: Vec<SkillResponse>,
}

#[derive(Deserialize, ToSchema)]
struct UpdateProfileRequest {
    name: Option<String>,
    skills: Option<Vec<UpdateSkillRequest>>,
}

#[derive(Deserialize, ToSchema)]
struct UpdateSkillRequest {
    id: Option<i64>,
    name: String,
    level: String,
    category: Option<String>,
    description: Option<String>,
}

#[derive(Debug, Deserialize)]
struct Claims {
    id: String,
    email: Option<String>,
    name: Option<String>,
}

impl From<User> for UserResponse {
    fn from(user: User) -> Self {
        Self {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password.unwrap_or_default(),
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

fn verify_token(token: &str) -> Result<Claims, jsonwebtoken::errors::Error> {
    let jwt_secret = env::var("JWT_SECRET").map_err(|_| {
        jsonwebtoken::errors::Error::from(jsonwebtoken::errors::ErrorKind::InvalidToken)
    })?;
    let key = DecodingKey::from_secret(jwt_secret.as_bytes());
    let validation = Validation::new(Algorithm::HS256);
    let data = decode::<Claims>(token, &key, &validation)?;
    Ok(data.claims)
}

async fn get_all_users<T: UserService, S: SkillService>(State(state): State<AppState<T, S>>) -> impl IntoResponse {
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
async fn get_user<T: UserService, S: SkillService>(
    State(state): State<AppState<T, S>>,
    Json(payload): Json<CreateUserRequest>,
) -> impl IntoResponse {
    match state.user_service.get_user_by_email(payload.email).await {
        Ok(Some(user)) => Json(UserResponse::from(user)).into_response(),
        Ok(None) => (StatusCode::NOT_FOUND, "User not found").into_response(),
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch user").into_response(),
    }
}
async fn create_user<T: UserService, S: SkillService>(
    State(state): State<AppState<T, S>>,
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
async fn update_user<T: UserService, S: SkillService>(
    State(state): State<AppState<T, S>>,
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
async fn get_profile<T: UserService, S: SkillService>(
    State(state): State<AppState<T, S>>,
    headers: HeaderMap,
) -> impl IntoResponse {
    let user_id = match headers
        .get("Authorization")
        .and_then(|token| {
            token.to_str().ok().and_then(|t| {
                if let Some(token_str) = t.strip_prefix("Bearer ") {
                    verify_token(token_str).ok()
                } else {
                    None
                }
            })
        })
        .and_then(|user| user.id.parse::<i64>().ok())
    {
        Some(id) => {
            tracing::info!("Authenticated user ID: {}", id);
            id
        }
        None => {
            tracing::warn!("Unauthorized access attempt");
            return (StatusCode::UNAUTHORIZED).into_response()
        }
    };

    match state.user_service.get_user_by_id(user_id).await {
        Ok(Some(user)) => {
            tracing::info!("Found user: {:?}", user);
            // Get user's skills
            let skills = Vec::new(); // Temporarily return empty skills until profile exists

            let profile_response = ProfileResponse {
                id: user.id.unwrap_or(user_id),
                name: user.name,
                email: user.email,
                skills,
            };
            tracing::info!("Returning profile response: {:?}", profile_response);
            Json(profile_response).into_response()
        }
        Ok(None) => {
            tracing::warn!("User not found for id: {}", user_id);
            (StatusCode::NOT_FOUND, "User not found").into_response()
        }
        Err(e) => {
            tracing::error!("Failed to fetch profile for user {}: {:?}", user_id, e);
            (StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch profile").into_response()
        }
    }
}

async fn update_profile<T: UserService, S: SkillService>(
    State(state): State<AppState<T, S>>,
    headers: HeaderMap,
    Json(payload): Json<UpdateProfileRequest>,
) -> impl IntoResponse {
    let user_id = match headers
        .get("Authorization")
        .and_then(|token| {
            token.to_str().ok().and_then(|t| {
                if let Some(token_str) = t.strip_prefix("Bearer ") {
                    verify_token(token_str).ok()
                } else {
                    None
                }
            })
        })
        .and_then(|user| user.id.parse::<i64>().ok())
    {
        Some(id) => id,
        None => return (StatusCode::UNAUTHORIZED).into_response(),
    };

    // Update user profile
    let user_result = state.user_service.update_user_profile(user_id, payload.name).await;
    let user = match user_result {
        Ok(user) => user,
        Err(sqlx::Error::RowNotFound) => return (StatusCode::NOT_FOUND, "User not found").into_response(),
        Err(_) => return (StatusCode::INTERNAL_SERVER_ERROR, "Failed to update profile").into_response(),
    };

    // Skip skills update for now since we're using profiles table differently

    // Get updated skills - temporarily return empty
    let skills = Vec::new();

    let profile_response = ProfileResponse {
        id: user.id.unwrap_or(user_id),
        name: user.name,
        email: user.email,
        skills,
    };
    Json(profile_response).into_response()
}

// OpenAPI documentation functions
#[utoipa::path(
    get,
    path = "/api/profile",
    security(
        ("bearer_auth" = [])
    ),
    responses(
        (status = 200, description = "Profile fetched successfully", body = ProfileResponse),
        (status = 401, description = "Unauthorized"),
        (status = 404, description = "User not found"),
        (status = 500, description = "Failed to fetch profile")
    )
)]
async fn get_profile_doc() {}

#[utoipa::path(
    put,
    path = "/api/profile",
    security(
        ("bearer_auth" = [])
    ),
    request_body = UpdateProfileRequest,
    responses(
        (status = 200, description = "Profile updated successfully", body = ProfileResponse),
        (status = 401, description = "Unauthorized"),
        (status = 404, description = "User not found"),
        (status = 500, description = "Failed to update profile")
    )
)]
async fn update_profile_doc() {}

#[derive(OpenApi)]
#[openapi(
    paths(get_profile_doc, update_profile_doc),
    components(schemas(ProfileResponse, UpdateProfileRequest, SkillResponse, UpdateSkillRequest)),
    security(
        ("bearer_auth" = [])
    )
)]
pub struct ProfileApiDoc;

// async fn delete_user<T: UserService>(State(state): State<AppState<T>>) -> impl IntoResponse {
//     match state.user_service.delete_user(id).await {
//         Ok(_) => StatusCode::NO_CONTENT.into_response(),
//         Err(sqlx::Error::RowNotFound) => {
//             (StatusCode::INTERNAL_SERVER_ERROR, "User not found").into_response()
//         }
//         Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed delete user").into_response(),
//     }
// }
