# Testing Guide

This project keeps testing intentionally simple so you can focus on CI/CD and governance.

## Prerequisites
- Node.js 18+ (Node 20.x recommended to match the pipeline).
- npm (comes with Node.js).

## Local Test Commands
From repository root:

```bash
cd app
npm ci
npm test
```

### What each command does
- `npm ci`: performs a clean install using `package-lock.json` for repeatable builds.
- `npm test`: runs the Jest test suite (`index.test.js`) that validates the `/health` endpoint behavior.

## Run the API locally
```bash
cd app
npm ci
npm start
```

Then verify in another terminal:

```bash
curl http://localhost:3000/health
```

Expected response shape:

```json
{
  "status": "ok",
  "environment": "dev",
  "version": "v1.0.0"
}
```

## CI Validation in Azure DevOps
The `Build` stage in `pipelines/azure-pipelines.yml` executes:
1. `npm ci`
2. `npm test`

If tests fail, the pipeline fails and the PR should be blocked by branch policy.

## Optional failure simulation
To practice incident handling:
1. Create a temporary branch.
2. Intentionally break an assertion in `app/index.test.js`.
3. Push and open a PR.
4. Confirm build validation fails.
5. Revert the test change and push again to restore green status.
