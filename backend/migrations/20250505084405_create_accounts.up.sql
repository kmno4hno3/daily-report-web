-- Add up migration script here
CREATE TABLE accounts (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  provider_account_id TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at Int,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,

  UNIQUE(provider, provider_account_id)
)