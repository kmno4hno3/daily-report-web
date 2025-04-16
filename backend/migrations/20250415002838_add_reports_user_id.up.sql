-- Add up migration script here
ALTER TABLE reports ADD COLUMN user_id BIGINT REFERENCES users(id);