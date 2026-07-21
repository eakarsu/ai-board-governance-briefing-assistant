# Board packet release operations

`/api/governed` is authoritative for versioned board packets, source provenance, review, release, and immutable decisions. Short-lived HMAC assertions are issued by an SSO gateway and carry tenant, role, and permissions. Advisory AI output cannot release a packet or replace board, secretary, counsel, or committee judgment.

Install dependencies explicitly, configure `.env.example`, run `./start.sh check`, back up PostgreSQL, and use `ALLOW_SCHEMA_MIGRATION=1 ./start.sh migrate`. Provision the initial administrator as a separate guarded operation with `ADMIN_EMAIL` and a 12+ character `ADMIN_PASSWORD` via `npm --prefix backend run create-admin`. Startup never installs, seeds, resets, creates schema, edits credentials, or kills ports. Rollback deploys prior code while retaining additive tables; restore only after reconciling packet releases and provider receipts.

Regulatory, contract, evidence, and board-portal adapters require stable IDs, versions, effective dates, jurisdiction, freshness, hashes, deletion markers, idempotency, and typed receipts. Independent approval is mandatory. Preserve legal holds and append-only decisions; reconcile dead letters before replay.

Production SSO onboarding, source contracts, board-portal credentials, qualified legal interpretation, retention approval, and security/legal certification are external gates. Review Git history for `.env` exposure and rotate all potentially real values.
