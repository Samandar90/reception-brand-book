import { Router } from 'express'
import { db, nowIso, round2, uuid } from '../db.ts'
import { body, fail, int, isoDate, obj, oneOf, optInt, SLUG_RE } from '../http.ts'
import { requireUser } from '../auth.ts'
import { toAttempt, toGrant, toModule, type AttemptRow, type GrantRow, type ModuleRow } from '../mappers.ts'

export const meRouter = Router()
meRouter.use('/me', requireUser)

const EVENTS = ['login', 'lesson_view', 'lesson_complete', 'test_start', 'test_finish', 'final_join'] as const
const LEVELS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1'] as const

// ─── Modules ─────────────────────────────────────────────────────────────────

meRouter.get('/me/modules', (req, res) => {
  const rows = db
    .prepare('SELECT module_slug, completed_at, check_score, check_total FROM module_progress WHERE user_id = ? ORDER BY completed_at')
    .all(req.user!.id) as ModuleRow[]
  res.json(rows.map(toModule))
})

meRouter.put('/me/modules/:slug', (req, res) => {
  const slug = String(req.params.slug)
  if (!SLUG_RE.test(slug)) fail(400, 'invalid_input')
  const b = body(req)
  const score = optInt(b.checkScore, 0, 100)
  const total = optInt(b.checkTotal, 1, 100)
  if (score !== null && total !== null && score > total) fail(400, 'invalid_input')
  db.prepare(
    `INSERT INTO module_progress (user_id, module_slug, completed_at, check_score, check_total) VALUES (?, ?, ?, ?, ?)
     ON CONFLICT (user_id, module_slug) DO UPDATE SET completed_at = excluded.completed_at,
       check_score = excluded.check_score, check_total = excluded.check_total`,
  ).run(req.user!.id, slug, nowIso(), score, total)
  res.json({ ok: true })
})

meRouter.delete('/me/modules/:slug', (req, res) => {
  db.prepare('DELETE FROM module_progress WHERE user_id = ? AND module_slug = ?').run(req.user!.id, String(req.params.slug))
  res.json({ ok: true })
})

meRouter.delete('/me/modules', (req, res) => {
  db.prepare('DELETE FROM module_progress WHERE user_id = ?').run(req.user!.id)
  res.json({ ok: true })
})

// ─── Attempts ────────────────────────────────────────────────────────────────

meRouter.get('/me/attempts', (req, res) => {
  const rows = db
    .prepare('SELECT * FROM test_attempts WHERE user_id = ? ORDER BY finished_at DESC')
    .all(req.user!.id) as AttemptRow[]
  res.json(rows.map(toAttempt))
})

meRouter.post('/me/attempts', (req, res) => {
  const b = body(req)
  const userId = req.user!.id
  const kind = oneOf(b.kind, ['knowledge', 'english', 'russian'] as const)
  const total = int(b.total, 1, 500)
  const score = int(b.score, 0, total)
  const level = b.level === undefined || b.level === null ? null : oneOf(b.level, LEVELS)
  const details = b.details === undefined ? {} : obj(b.details, 200_000)
  const writing = b.writing === undefined || b.writing === null ? null : obj(b.writing, 20_000)
  const startedAt = isoDate(b.startedAt)
  const finishedAt = nowIso()
  const durationSec =
    typeof b.durationSec === 'number' && Number.isFinite(b.durationSec) && b.durationSec >= 0
      ? Math.round(b.durationSec)
      : Math.max(0, Math.round((Date.parse(finishedAt) - Date.parse(startedAt)) / 1000))
  const id = uuid()

  const insert = db.transaction(() => {
    // Language tests: the first attempt is free, every retake needs an unused, unexpired grant.
    if (kind === 'english' || kind === 'russian') {
      const previous = db.prepare('SELECT 1 FROM test_attempts WHERE user_id = ? AND kind = ? LIMIT 1').get(userId, kind)
      if (previous) {
        const grant = db
          .prepare(
            'SELECT id FROM test_grants WHERE user_id = ? AND kind = ? AND used_by_attempt_id IS NULL AND expires_at > ? ORDER BY created_at LIMIT 1',
          )
          .get(userId, kind, finishedAt) as { id: string } | undefined
        if (!grant) fail(403, 'retake_not_allowed')
        db.prepare(
          `INSERT INTO test_attempts (id, user_id, kind, score, total, percent, level, details, writing, started_at, finished_at, duration_sec)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        ).run(id, userId, kind, score, total, round2((score * 100) / total), level, JSON.stringify(details), writing ? JSON.stringify(writing) : null, startedAt, finishedAt, durationSec)
        db.prepare('UPDATE test_grants SET used_by_attempt_id = ?, used_at = ? WHERE id = ?').run(id, finishedAt, grant!.id)
        return
      }
    }
    db.prepare(
      `INSERT INTO test_attempts (id, user_id, kind, score, total, percent, level, details, writing, started_at, finished_at, duration_sec)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).run(id, userId, kind, score, total, round2((score * 100) / total), level, JSON.stringify(details), writing ? JSON.stringify(writing) : null, startedAt, finishedAt, durationSec)
  })
  insert()
  const row = db.prepare('SELECT * FROM test_attempts WHERE id = ?').get(id) as AttemptRow
  res.json(toAttempt(row))
})

// ─── Grants & activity ───────────────────────────────────────────────────────

meRouter.get('/me/grants', (req, res) => {
  const rows = db
    .prepare(
      'SELECT * FROM test_grants WHERE user_id = ? AND used_by_attempt_id IS NULL AND expires_at > ? ORDER BY created_at',
    )
    .all(req.user!.id, nowIso()) as GrantRow[]
  res.json(rows.map(toGrant))
})

meRouter.post('/me/activity', (req, res) => {
  const b = body(req)
  const event = oneOf(b.event, EVENTS)
  const meta = b.meta === undefined ? {} : obj(b.meta, 4_000)
  db.prepare('INSERT INTO activity_log (user_id, event, meta, created_at) VALUES (?, ?, ?, ?)').run(
    req.user!.id,
    event,
    JSON.stringify(meta),
    nowIso(),
  )
  res.json({ ok: true })
})
