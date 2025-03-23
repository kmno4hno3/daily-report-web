-- Add up migration script here
CREATE UNIQUE INDEX idx_reports_date ON reports(date);