-- Creates a table for tracking deployment metadata
CREATE TABLE IF NOT EXISTS deployment_audit (
    id SERIAL PRIMARY KEY,
    release_version VARCHAR(30) NOT NULL,
    deployed_by VARCHAR(100) NOT NULL,
    deployed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    environment VARCHAR(20) NOT NULL
);
