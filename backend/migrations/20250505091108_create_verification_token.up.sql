-- Add up migration script here
CREATE TABLE verification_tokens (
  identifier TEXT NOT NULL,
  token TEXT NOT NULL,
  expires TIMESTAMP NOT NULL,

  UNIQUE(identifier, token)
)