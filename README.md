# Configuration Management & CI/CD Governance Practice

This repository is a small Azure DevOps practice project designed to demonstrate **structured CI/CD**, **environment promotion governance**, and **documentation discipline**.

## Project Goal
This repository demonstrates a structured CI/CD pipeline using Azure DevOps with controlled environment promotion and governance practices.

## Repository Structure
```text
ado-cicd-practice/
├── app/
│   ├── index.js
│   ├── index.test.js
│   └── package.json
├── database/
│   ├── V1__create_table.sql
│   └── V2__add_column.sql
├── pipelines/
│   └── azure-pipelines.yml
├── docs/
│   ├── branching-strategy.md
│   ├── release-process.md
│   ├── incident-response.md
│   └── testing-guide.md
└── README.md
```

## Branching Strategy
- Feature work is developed in `feature/*` branches.
- Pull requests into `main` require successful build validation.
- `main` is protected and requires reviewer approval.
- Release builds are version-tagged for traceability.

See: [`docs/branching-strategy.md`](docs/branching-strategy.md)

## Environment Promotion Strategy
- The pipeline builds and tests once, then publishes a reusable artifact.
- The same artifact is promoted from Dev → QA → Production.
- Variable groups are separated by environment (`Dev-Variables`, `QA-Variables`, `Prod-Variables`).
- QA and Production deployments are designed for manual approval gates in Azure DevOps environments.

See: [`docs/release-process.md`](docs/release-process.md)

## SQL Deployment Governance
- Database changes are stored as versioned scripts in `database/`.
- Scripts are validated in lower environments first.
- Roll-forward and rollback expectations are documented for release readiness.

## Rollback Plan
- Re-deploy previous stable artifact version tag from Azure DevOps artifacts.
- Restore database backup or run an approved rollback script.
- Capture root cause and preventive action in incident documentation.

See: [`docs/incident-response.md`](docs/incident-response.md)

## Pipeline Stages
The sample Azure DevOps pipeline includes:
1. **Build** – install dependencies and run tests.
2. **Publish** – archive output and publish versioned artifact.
3. **Deploy Dev** – automatic deployment.
4. **Deploy QA** – gated/manual approval in environment checks.
5. **Deploy Production** – gated/manual approval in environment checks.

Pipeline file: [`pipelines/azure-pipelines.yml`](pipelines/azure-pipelines.yml)


## How to Test
Use these commands locally:

```bash
cd app
npm ci
npm test
```

- `npm ci` gives a clean, reproducible install from lockfile.
- `npm test` runs the Jest suite that validates the API health endpoint.

Detailed instructions (including running the API and failure simulation): [`docs/testing-guide.md`](docs/testing-guide.md)

