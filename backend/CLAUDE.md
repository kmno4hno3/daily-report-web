# Daily Report Backend API

## Overview
This is a Rust-based backend API for a daily report management system using Axum framework and PostgreSQL database.

## Recent Updates (2025-07-29)
- Added search functionality to the `/api/report/dates/{year}` endpoint
- Now supports query parameter `?q={search_term}` to filter reports by content

## API Endpoints

### Reports
- `GET /api/report/dates/{year}` - Get all report dates for a specific year
  - Query params: `?q={search_term}` (optional) - Filter reports containing the search term
  - Example: `/api/report/dates/2025?q=会議` returns only dates with reports containing "会議"
- `GET /api/report/{id}` - Get a specific report by ID
- `GET /api/report/{year}/{month}/{day}` - Get report by date
- `POST /api/reports` - Create a new report
- `PUT /api/report/{id}` - Update an existing report
- `DELETE /api/report/{id}` - Delete a report

### Dashboard
- `GET /api/dashboard` - Get dashboard statistics

### Users
- `POST /api/register` - Register a new user
- `POST /api/login` - User login
- `GET /api/profile` - Get user profile

## Architecture
The project follows Clean Architecture principles:
- `domain/` - Core business logic and entities
- `infrastructure/` - Database implementations
- `usecase/` - Application business rules
- `presentation/` - HTTP handlers and routing

## Authentication
All report endpoints require JWT Bearer token authentication.

## Database
PostgreSQL with the following main tables:
- `reports` - Daily reports with date, content, and user_id
- `users` - User accounts
- `accounts` - OAuth provider accounts

## Search Implementation
The search feature uses PostgreSQL's `ILIKE` operator for case-insensitive partial matching on report content.