-- Add migration script here
CREATE TABLE reports (
  id BIGSERIAL PRIMARY KEY,
  -- user_id UUID REFERENCES users(id) NOT NULL,
  date DATE NOT NULL,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT (now() AT TIME ZONE 'Asia/Tokyo') NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT (now() AT TIME ZONE 'Asia/Tokyo') NOT NULL
);