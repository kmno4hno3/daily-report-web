use axum::{http::HeaderValue, routing::get, Router};
use dotenvy::dotenv;
use sqlx::PgPool;
use std::env;
use std::net::SocketAddr;
use tokio::net::TcpListener;
use tower_http::cors::CorsLayer;
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;

mod domain;
mod infrastructure;
mod presentation;
mod usecase;

use crate::infrastructure::report_repository::ReportRepositoryImpl;
use crate::infrastructure::user_repository::UserRepositoryImpl;
use crate::presentation::handlers::report_handler::create_report_router;
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
        .allow_origin(["http://localhost:3000".parse::<HeaderValue>().unwrap()])
        .allow_methods([
            http::Method::GET,
            http::Method::POST,
            http::Method::PUT,
            http::Method::DELETE,
        ])
        .allow_headers([http::header::CONTENT_TYPE]);

    let app = Router::new()
        .route("/", get(|| async { "Hello, Axum!!!" }))
        .nest("/api", create_report_router(report_service))
        .nest("/api", create_user_router(user_service))
        .layer(cors);

    let addr = SocketAddr::from(([127, 0, 0, 1], 8000));
    info!("🚀 Server running at http://{}", addr);
    let listener = TcpListener::bind("127.0.0.1:8000").await.unwrap();
    axum::serve(listener, app).await.unwrap();

    Ok(())
}
