#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_ROOT="${RUNTIME_PROJECT_SOURCE:-$ROOT_DIR}"
ENV_FILE="$ROOT_DIR/.env"

read_env(){ awk -F= -v key="$1" '$0!~/^[[:space:]]*#/&&$1==key{v=substr($0,index($0,"=")+1);gsub(/^[[:space:]]+|[[:space:]]+$/,"",v);gsub(/^["\047]|["\047]$/,"",v);print v;exit}' "$ENV_FILE"; }
load_key(){ local key="$1" value; [ -n "${!key-}" ] && return; [ -f "$ENV_FILE" ] || return; value="$(read_env "$key")"; [ -z "$value" ] || export "$key=$value"; }
for key in DATABASE_URL GOVERNANCE_GATEWAY_SECRET JWT_SECRET ALLOW_SCHEMA_MIGRATION PORT BACKEND_PORT FRONTEND_PORT PGSSLROOTCERT ADMIN_EMAIL ADMIN_PASSWORD ADMIN_NAME OPENROUTER_API_KEY OPENROUTER_MODEL OPENROUTER_BASE_URL; do load_key "$key"; done

GOVERNANCE_GATEWAY_SECRET="${GOVERNANCE_GATEWAY_SECRET:-${JWT_SECRET:-}}"
BACKEND_PORT="${BACKEND_PORT:-${PORT:-}}"
FRONTEND_PORT="${FRONTEND_PORT:-}"
export GOVERNANCE_GATEWAY_SECRET BACKEND_PORT FRONTEND_PORT

fail(){ printf 'error: %s\n' "$*" >&2; exit 1; }
check(){
  local admin_password="${ADMIN_PASSWORD:-}"
  [ -n "${DATABASE_URL:-}" ] || fail "DATABASE_URL required"
  [ "${#GOVERNANCE_GATEWAY_SECRET}" -ge 32 ] || fail "GOVERNANCE_GATEWAY_SECRET must be 32+ characters"
  [ -n "${OPENROUTER_API_KEY:-}" ] || fail "OPENROUTER_API_KEY required"
  [ -n "${OPENROUTER_MODEL:-}" ] || fail "OPENROUTER_MODEL required"
  [ "${OPENROUTER_BASE_URL:-}" = "https://openrouter.ai/api/v1" ] || fail "OPENROUTER_BASE_URL must be https://openrouter.ai/api/v1"
  [ -n "${ADMIN_EMAIL:-}" ] && [ "${#admin_password}" -ge 12 ] || fail "ADMIN_EMAIL and a 12+ character ADMIN_PASSWORD are required"
  case "${ALLOW_SCHEMA_MIGRATION:-}" in true|1) ;; *) fail "ALLOW_SCHEMA_MIGRATION=true is required";; esac
  for port in "$BACKEND_PORT" "$FRONTEND_PORT"; do
    case "$port" in *[!0-9]*|'') fail "runtime ports must be numeric";; esac
    [ "$port" -ge 1 ] && [ "$port" -le 65535 ] || fail "runtime port out of range"
  done
  [ "$BACKEND_PORT" != "$FRONTEND_PORT" ] || fail "BACKEND_PORT and FRONTEND_PORT must be distinct"
}
migrate(){ local migration; check; command -v psql >/dev/null || fail "psql required"; for migration in "$ROOT_DIR"/migrations/*.sql; do psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$migration"; done; }
start(){
  check
  [ -d "$APP_ROOT/frontend/node_modules" ] || fail "dependencies missing; install explicitly"
  for port in "$BACKEND_PORT" "$FRONTEND_PORT"; do
    if lsof -tiTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then fail "runtime port $port is occupied"; fi
  done
  migrate
  (cd "$ROOT_DIR/frontend" && node scripts/create-admin.mjs)
  (cd "$APP_ROOT/frontend" && npm run dev -- -H 127.0.0.1 -p "$BACKEND_PORT") & api_pid=$!
  (cd "$APP_ROOT/frontend" && RUNTIME_TARGET_PORT="$BACKEND_PORT" RUNTIME_PROXY_PORT="$FRONTEND_PORT" node scripts/runtime-proxy.mjs) & proxy_pid=$!
  wait "$api_pid" "$proxy_pid"
}

case "${1:-start}" in check) check;; migrate) migrate;; start) start;; *) fail "usage: $0 {check|migrate|start}";; esac
