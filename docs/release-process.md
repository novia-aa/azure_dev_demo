# Release Process

## Promotion Flow
1. Build and test once in CI.
2. Publish a versioned artifact.
3. Automatically deploy to Dev.
4. Promote the exact same artifact to QA after manual approval.
5. Promote the exact same artifact to Production after manual approval.

## Governance Controls
- Environment-specific variable groups prevent hard-coded secrets.
- Manual approval checks on QA and Production environments enforce governance.
- Build tags provide traceability from deployment back to source and pipeline run.

## Release Notes
- Capture release notes per deployment with changes, risk level, and rollback instructions.
