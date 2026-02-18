-- Adds a status column used by release governance reporting
ALTER TABLE deployment_audit
ADD COLUMN IF NOT EXISTS deployment_status VARCHAR(20) NOT NULL DEFAULT 'successful';
