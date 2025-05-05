-- Add up migration script here
-- Add migration script here
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT (now() AT TIME ZONE 'Asia/Tokyo') NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT (now() AT TIME ZONE 'Asia/Tokyo') NOT NULL
);