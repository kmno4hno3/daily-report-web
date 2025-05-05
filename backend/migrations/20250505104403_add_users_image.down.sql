-- Add down migration script here
ALTER TABLE users
  DROP COLUMN image,
  DROP COLUMN email_verified;