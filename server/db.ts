import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import Database from 'better-sqlite3'
import { ALLOW_EPHEMERAL_DATA, DATA_DIR, isProd } from './config.ts'

// ─── Storage location ────────────────────────────────────────────────────────

function isMountPoint(dir: string): boolean {
  try {
    return fs.statSync(dir).dev !== fs.statSync(path.dirname(dir)).dev
  } catch {
    return false
  }
}

if (isProd && !ALLOW_EPHEMERAL_DATA && !isMountPoint(DATA_DIR)) {
  // Without a persistent disk every redeploy would wipe all employee results.
  console.error(
    `[academy] DATA_DIR ${DATA_DIR} is not a mounted persistent disk. ` +
      'Add a Render disk mounted at this path (Service → Disks), or set ALLOW_EPHEMERAL_DATA=1 for a throwaway test.',
  )
  process.exit(1)
}

fs.mkdirSync(DATA_DIR, { recursive: true })
export const DB_PATH = path.join(DATA_DIR, 'academy.sqlite3')

export const db = new Database(DB_PATH)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')
db.pragma('busy_timeout = 5000')
db.pragma('synchronous = NORMAL')

// ─── Schema ──────────────────────────────────────────────────────────────────

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id            TEXT PRIMARY KEY,
  login         TEXT NOT NULL UNIQUE,
  full_name     TEXT NOT NULL,
  role          TEXT NOT NULL CHECK (role IN ('admin', 'employee')),
  position      TEXT,
  is_active     INTEGER NOT NULL DEFAULT 1,
  password_hash TEXT NOT NULL,
  created_at    TEXT NOT NULL,
  created_by    TEXT REFERENCES users (id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash   TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  remember     INTEGER NOT NULL DEFAULT 1,
  created_at   TEXT NOT NULL,
  expires_at   TEXT NOT NULL,
  last_seen_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user_idx ON sessions (user_id);

CREATE TABLE IF NOT EXISTS module_progress (
  user_id      TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  module_slug  TEXT NOT NULL,
  completed_at TEXT NOT NULL,
  check_score  INTEGER,
  check_total  INTEGER,
  PRIMARY KEY (user_id, module_slug)
);

CREATE TABLE IF NOT EXISTS activity_log (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  event      TEXT NOT NULL CHECK (event IN ('login', 'lesson_view', 'lesson_complete', 'test_start', 'test_finish', 'final_join')),
  meta       TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS activity_user_created_idx ON activity_log (user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS final_sessions (
  id                   TEXT PRIMARY KEY,
  title                TEXT NOT NULL DEFAULT '',
  status               TEXT NOT NULL CHECK (status IN ('lobby', 'question', 'reveal', 'finished', 'cancelled')),
  question_ids         TEXT NOT NULL,
  current_index        INTEGER NOT NULL DEFAULT -1,
  asked_count          INTEGER NOT NULL DEFAULT 0,
  current_question     TEXT,
  reveal               TEXT,
  question_started_at  TEXT,
  question_deadline_at TEXT,
  settings             TEXT NOT NULL,
  created_by           TEXT REFERENCES users (id) ON DELETE SET NULL,
  created_at           TEXT NOT NULL,
  finished_at          TEXT
);
-- only one live session at a time
CREATE UNIQUE INDEX IF NOT EXISTS final_one_live_idx
  ON final_sessions (status IN ('lobby', 'question', 'reveal'))
  WHERE status IN ('lobby', 'question', 'reveal');

CREATE TABLE IF NOT EXISTS final_participants (
  session_id     TEXT NOT NULL REFERENCES final_sessions (id) ON DELETE CASCADE,
  user_id        TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  display_name   TEXT NOT NULL,
  joined_at      TEXT NOT NULL,
  last_seen_at   TEXT NOT NULL,
  answered_count INTEGER NOT NULL DEFAULT 0,
  score          INTEGER NOT NULL DEFAULT 0,
  rank           INTEGER,
  PRIMARY KEY (session_id, user_id)
);

CREATE TABLE IF NOT EXISTS final_answers (
  session_id   TEXT NOT NULL,
  user_id      TEXT NOT NULL,
  question_id  TEXT NOT NULL,
  answer_index INTEGER,
  answer_text  TEXT,
  is_correct   INTEGER,
  points       INTEGER NOT NULL DEFAULT 0,
  response_ms  INTEGER,
  open_score   INTEGER CHECK (open_score IS NULL OR open_score BETWEEN 0 AND 5),
  answered_at  TEXT NOT NULL,
  PRIMARY KEY (session_id, user_id, question_id),
  FOREIGN KEY (session_id, user_id) REFERENCES final_participants (session_id, user_id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS final_answers_question_idx ON final_answers (session_id, question_id);

CREATE TABLE IF NOT EXISTS test_attempts (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  kind            TEXT NOT NULL CHECK (kind IN ('knowledge', 'english', 'russian', 'final')),
  score           INTEGER NOT NULL CHECK (score >= 0),
  total           INTEGER NOT NULL CHECK (total > 0),
  percent         REAL NOT NULL DEFAULT 0,
  level           TEXT CHECK (level IS NULL OR level IN ('A0', 'A1', 'A2', 'B1', 'B2', 'C1')),
  details         TEXT NOT NULL DEFAULT '{}',
  writing         TEXT,
  writing_rubric  TEXT,
  writing_score   INTEGER CHECK (writing_score IS NULL OR writing_score BETWEEN 0 AND 5),
  writing_comment TEXT,
  graded_by       TEXT REFERENCES users (id) ON DELETE SET NULL,
  graded_at       TEXT,
  session_id      TEXT REFERENCES final_sessions (id) ON DELETE CASCADE,
  started_at      TEXT NOT NULL,
  finished_at     TEXT NOT NULL,
  duration_sec    INTEGER,
  CHECK (score <= total)
);
CREATE INDEX IF NOT EXISTS attempts_user_kind_idx ON test_attempts (user_id, kind, finished_at DESC);
CREATE UNIQUE INDEX IF NOT EXISTS attempts_final_once_idx ON test_attempts (session_id, user_id) WHERE kind = 'final';

CREATE TABLE IF NOT EXISTS test_grants (
  id                 TEXT PRIMARY KEY,
  user_id            TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  kind               TEXT NOT NULL CHECK (kind IN ('english', 'russian')),
  granted_by         TEXT REFERENCES users (id) ON DELETE SET NULL,
  created_at         TEXT NOT NULL,
  expires_at         TEXT NOT NULL,
  used_by_attempt_id TEXT REFERENCES test_attempts (id) ON DELETE SET NULL,
  used_at            TEXT
);
CREATE INDEX IF NOT EXISTS grants_user_kind_idx ON test_grants (user_id, kind);
`)

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const nowIso = (): string => new Date().toISOString()
export const uuid = (): string => crypto.randomUUID()
export const addMs = (iso: string, ms: number): string => new Date(Date.parse(iso) + ms).toISOString()

export function parseJson<T>(value: unknown, fallback: T): T {
  if (typeof value !== 'string' || !value) return fallback
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export const round2 = (n: number): number => Math.round(n * 100) / 100
