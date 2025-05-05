-- Add up migration script here
ALTER TABLE users
  ADD COLUMN image TEXT,
  ADD COLUMN email_verified TIMESTAMP;