use axum::{http::HeaderValue, routing::get, Router};
use dotenvy::dotenv;
use sqlx::PgPool;
use std::env;
use std::net::SocketAddr;
use tokio::net::TcpListener;
use tower_http::cors::CorsLayer;
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

mod domain;
mod infrastructure;
mod presentation;
mod usecase;

use crate::infrastructure::report_repository::ReportRepositoryImpl;
use crate::infrastructure::user_repository::UserRepositoryImpl;
use crate::presentation::handlers::dashboard_handler::{create_dashboard_router, DashboardApiDoc};
use crate::presentation::handlers::report_handler::{create_report_router, ApiDoc};
use crate::presentation::handlers::user_handler::create_user_router;
use crate::usecase::report_usecase::ReportUsecase;
use crate::usecase::user_usecase::UserUsecase;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenv().ok();

    let subscriber = FmtSubscriber::builder()
        .with_max_level(Level::DEBUG)
        .finish();
    tracing::subscriber::set_global_default(subscriber)?;

    let database_url = env::var("DATABASE_URL")?;
    let pool = PgPool::connect(&database_url).await?;

    let report_repository = ReportRepositoryImpl::new(pool.clone());
    let report_service = ReportUsecase::new(report_repository);
    let user_repository = UserRepositoryImpl::new(pool.clone());
    let user_service = UserUsecase::new(user_repository);

    let cors = CorsLayer::new()
        .allow_origin([env::var("FRONT_URL")
            .unwrap_or_else(|_| "http://localhost:3000".to_string())
            .parse::<HeaderValue>()
            .unwrap()])
        .allow_methods([
            http::Method::GET,
            http::Method::POST,
            http::Method::PUT,
            http::Method::DELETE,
        ])
        .allow_headers([http::header::CONTENT_TYPE, http::header::AUTHORIZATION]);

    let app = Router::new()
        .route("/", get(|| async { "Hello, Axum!!!" }))
        .nest("/api", create_report_router(report_service.clone()))
        .nest("/api", create_dashboard_router(report_service))
        .nest("/api", create_user_router(user_service))
        .merge(
            SwaggerUi::new("/swagger-ui").url("/api-docs/openapi.json", {
                let mut doc = ApiDoc::openapi();
                doc.merge(DashboardApiDoc::openapi());
                doc
            }),
        )
        .layer(cors);

    let port = env::var("PORT")
        .unwrap_or_else(|_| "8000".to_string())
        .parse::<u16>()
        .unwrap();
    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    info!("🚀 Server running at http://{}", addr);
    let listener = TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();

    Ok(())
}
