# Completeness Review: ai-board-governance-briefing-assistant

**Review date:** 2026-07-18

## Assessment basis

Static inspection of project-owned source and configuration only; no dependency installation, build, database migration, external-service call, or runtime launch was performed. The scan considered 87 project files (63 source files), 2 manifest(s), 0 test-like file(s), and 0 CI workflow(s), excluding dependency/generated directories.

## Classification

**Prototype-demo**

This is a prototype/demo for governance/compliance. Generated gap/demo patterns are present: it contains 63 source files and visible routes/pages in `frontend/`, `backend/`, but those surfaces are not evidence of durable domain execution, verified integrations, or operational completion.

## Why it is not complete

- Generated gap/visualization routes describe missing capabilities or simulate recommendations; they do not implement the underlying domain operation.
- Generic LLM calls are used as product behavior without enough typed tools, grounded evidence, deterministic rules, or output evaluation.
- Mock, demo, sample, fixture, or placeholder behavior remains in executable/product paths.
- No recognizable project-owned automated tests were found for the main workflow.
- No checked-in CI workflow proves builds, tests, migrations, and security checks on every change.

## Needed features

1. Replace advisory-only AI output with versioned policies, evidence links, accountable owners, approvals, and immutable decisions.
2. Add authoritative regulatory/contract ingestion with source provenance, effective dates, jurisdiction, and change detection.
3. Implement SSO, least-privilege RBAC, segregation of duties, retention/legal holds, and exportable audit logs.
4. Build scenario-specific evaluations so citations, obligations, deadlines, and risk ratings are checked before release.
5. Add risk-based unit, integration, and end-to-end tests in CI, including migration and failure-path coverage.

## Risks or launch blockers

- Credential/configuration exposure: environment files are present in the repository tree and must be checked against Git history and rotated if real.
- Automation contains destructive process, filesystem, or database operations; do not run it on a shared machine without review.
- Startup appears coupled to seed/migration behavior, risking data mutation or non-repeatable launches.
- AI-provider availability, cost, privacy, prompt injection, and unvalidated output are launch risks until bounded and evaluated.

## Evidence inspected

- `README.md`
- `SOURCE_DATA_TABLES.md:127`
- `frontend/src/lib/sourceAIToolFields.ts:6`
- `frontend/src/app/layout.tsx`
- `backend/package.json`
- `start.sh`

## Recommended next action

Stop adding generated pages; prove one governance/compliance workflow against real services and persistent state, with tests and measurable acceptance criteria.

## Implementation progress (2026-07-18)

1. **Completed** — Added a durable tenant-scoped, versioned board-packet workflow with accountable owners, cited agenda evidence, requested decisions, independent approval, optimistic versions, release/retirement, and immutable decision history; advisory AI cannot release packets.
2. **Completed at the connector boundary** — Added regulatory, contract, evidence, identity, board-portal, and audit-export source contracts with stable IDs, versions, effective dates, jurisdictions, freshness, hashes, deletion markers, deduplication, and provider receipts. Live source agreements and qualified interpretation remain external gates.
3. **Completed in code; IdP onboarding remains external** — Added short-lived audience-bound SSO-gateway assertions, tenant/permission RBAC, board secretary/counsel/governance approver roles, segregation of duties, append-only audit export, legal-hold guidance, and fail-closed secrets/TLS configuration.
4. **Completed** — Added deterministic packet evaluation covering meeting dates, requested decisions, citations, evidence, obligation deadlines, risk ratings, source-change uncertainty, and explicit human/board decision gates before release.
5. **Completed** — Added 12 unit/contract/integration-boundary tests in CI, additive migration and destructive-migration checks, idempotency, retry/dead-letter and typed-receipt controls, plus a non-destructive check/migrate/start and rollback/incident runbook.

## Runtime verification (2026-07-20)

- `start.sh` now requires the assigned runtime port, refuses an occupied port, preserves environment precedence, and maps the validator's 32+ character JWT secret to the governance gateway secret when the project-specific value is absent.
- Replaced executable demo credentials and unsigned identity cookies with explicitly provisioned PostgreSQL users, scrypt password verification, opaque server-side session tokens, database-backed `/api/auth/me`, and session revocation on logout.
- The isolated acceptance run passed on fresh PostgreSQL `55621`, application `6056`, and reserved UI `6057` with `startup_login_session_api`; the administrator was provisioned by an explicit bootstrap command and the authenticated API reloaded the session from PostgreSQL.
- All 12 governance tests, TypeScript validation, the optimized 20-page Next.js build, launcher syntax, JavaScript syntax checks, and whitespace validation passed. Acceptance ports were released afterward.
