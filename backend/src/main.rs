use axum::{routing::get, Router};
use dotenvy::dotenv;
use sqlx::PgPool;
use std::env;
use std::net::SocketAddr;
use tokio::net::TcpListener;
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;

mod domain;
mod infrastructure;
mod presentation;
mod usecase;

use crate::infrastructure::report_repository::ReportRepositoryImpl;
use crate::presentation::handlers::report_handler::create_report_router;
use crate::usecase::report_usecase::ReportUsecase;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenv().ok();

    let subscriber = FmtSubscriber::builder()
        .with_max_level(Level::INFO)
        .finish();
    tracing::subscriber::set_global_default(subscriber)?;

    let database_url = env::var("DATABASE_URL")?;
    let pool = PgPool::connect(&database_url).await?;

    let report_repository = ReportRepositoryImpl::new(pool.clone());
    let report_service = ReportUsecase::new(report_repository);

    let app = Router::new()
        .route("/", get(|| async { "Hello, Axum!!!" }))
        .nest("/api", create_report_router(report_service));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    info!("🚀 Server running at http://{}", addr);
    let listener = TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();

    Ok(())
}
