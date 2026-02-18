# Incident Response Simulation

## Simulated Failure Scenario
A SQL migration script was intentionally changed with invalid syntax in a feature branch to validate pipeline and governance controls.

## Detection
- PR validation pipeline failed during migration verification in CI.
- Build logs identified the exact failing script and line.

## Containment
- The faulty migration was reverted in the feature branch.
- A corrected migration script was reviewed and re-submitted via pull request.

## Recovery / Rollback
- If the script had reached higher environments, rollback would use the previously stable artifact tag and corresponding database backup.
- Application rollback path: re-deploy prior successful artifact (`vX.Y.Z`) from pipeline artifacts.
- Database rollback path: execute pre-approved rollback script or restore backup taken before deployment.

## Post-Incident Actions
- Add SQL lint/validation task in PR pipeline.
- Record incident timeline and corrective action in release notes.
- Confirm approval gates remain enabled for QA and Production.
