-- Add down migration script here
ALTER TABLE users ADD CONSTRAINT users_password_key UNIQUE (password);