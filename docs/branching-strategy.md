# Branching Strategy

## Model
- `main` is the protected production branch.
- `feature/*` branches are used for new work.
- `hotfix/*` branches are used for urgent production fixes.

## Pull Request Controls
1. PR validation pipeline must pass before merge.
2. Minimum one reviewer approval is required.
3. Direct pushes to `main` are blocked.

## Versioning
- Build artifacts are tagged with pipeline build numbers.
- Release tags follow semantic versioning (for example `v1.0.0`).
