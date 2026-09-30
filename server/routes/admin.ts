import { Router } from 'express'
import { db, addMs, nowIso, parseJson, uuid } from '../db.ts'
import { body, fail, int, LOGIN_RE, oneOf, optStr, str } from '../http.ts'
import { destroyUserSessions, hashPassword, requireAdmin } from '../auth.ts'
import {
  toActivity,
  toAttempt,
  toGrant,
  toModule,
  toProfile,
  type ActivityDbRow,
  type AttemptRow,
  type GrantRow,
  type ModuleRow,
  type UserRow,
} from '../mappers.ts'

export const adminRouter = Router()
adminRouter.use('/admin', requireAdmin)

const getUser = (id: string) => db.prepare('SELECT * FROM users WHERE id = ?').get(id) as UserRow | undefined

function mustUser(id: string): UserRow {
  const u = getUser(id)
  if (!u) fail(404, 'not_found')
  return u as UserRow
}

function isLastActiveAdmin(userId: string): boolean {
  const u = getUser(userId)
  if (!u || u.role !== 'admin' || u.is_active !== 1) return false
  const { n } = db.prepare("SELECT count(*) AS n FROM users WHERE role = 'admin' AND is_active = 1").get() as { n: number }
  return n <= 1
}

// ─── Team overview ───────────────────────────────────────────────────────────

interface OverviewRow {
  id: string
  login: string
  full_name: string
  role: 'admin' | 'employee'
  position: string | null
  is_active: number
  created_at: string
  modules_completed: number
  knowledge_best: number | null
  knowledge_last: number | null
  knowledge_at: string | null
  english_level: string | null
  english_at: string | null
  english_attempts: number
  russian_level: string | null
  russian_at: string | null
  russian_attempts: number
  final_percent: number | null
  final_grading_status: 'pending' | 'graded' | null
  final_at: string | null
  last_active_at: string | null
  ungraded_writing: number
  open_grants: number
}

const OVERVIEW_SQL = `
SELECT u.id, u.login, u.full_name, u.role, u.position, u.is_active, u.created_at,
  (SELECT count(*) FROM module_progress mp WHERE mp.user_id = u.id) AS modules_completed,
  (SELECT max(t.percent) FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'knowledge' AND json_extract(t.details, '$.mode') = 'assessment') AS knowledge_best,
  (SELECT t.percent FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'knowledge' AND json_extract(t.details, '$.mode') = 'assessment' ORDER BY t.finished_at DESC LIMIT 1) AS knowledge_last,
  (SELECT t.finished_at FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'knowledge' AND json_extract(t.details, '$.mode') = 'assessment' ORDER BY t.finished_at DESC LIMIT 1) AS knowledge_at,
  (SELECT t.level FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'english' ORDER BY t.finished_at DESC LIMIT 1) AS english_level,
  (SELECT t.finished_at FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'english' ORDER BY t.finished_at DESC LIMIT 1) AS english_at,
  (SELECT count(*) FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'english') AS english_attempts,
  (SELECT t.level FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'russian' ORDER BY t.finished_at DESC LIMIT 1) AS russian_level,
  (SELECT t.finished_at FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'russian' ORDER BY t.finished_at DESC LIMIT 1) AS russian_at,
  (SELECT count(*) FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'russian') AS russian_attempts,
  (SELECT t.percent FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'final' ORDER BY t.finished_at DESC LIMIT 1) AS final_percent,
  (SELECT json_extract(t.details, '$.gradingStatus') FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'final' ORDER BY t.finished_at DESC LIMIT 1) AS final_grading_status,
  (SELECT t.finished_at FROM test_attempts t WHERE t.user_id = u.id AND t.kind = 'final' ORDER BY t.finished_at DESC LIMIT 1) AS final_at,
  (SELECT max(a.created_at) FROM activity_log a WHERE a.user_id = u.id) AS last_active_at,
  (SELECT count(*) FROM test_attempts t WHERE t.user_id = u.id AND t.writing IS NOT NULL AND t.writing_score IS NULL) AS ungraded_writing,
  (SELECT count(*) FROM test_grants g WHERE g.user_id = u.id AND g.used_by_attempt_id IS NULL AND g.expires_at > @now) AS open_grants
FROM users u
ORDER BY u.full_name COLLATE NOCASE`

adminRouter.get('/admin/overview', (_req, res) => {
  const rows = db.prepare(OVERVIEW_SQL).all({ now: nowIso() }) as OverviewRow[]
  res.json(
    rows.map((r) => ({
      id: r.id,
      login: r.login,
      fullName: r.full_name,
      role: r.role,
      position: r.position,
      isActive: r.is_active === 1,
      createdAt: r.created_at,
      modulesCompleted: r.modules_completed,
      knowledgeBest: r.knowledge_best,
      knowledgeLast: r.knowledge_last,
      knowledgeAt: r.knowledge_at,
      englishLevel: r.english_level,
      englishAt: r.english_at,
      englishAttempts: r.english_attempts,
      russianLevel: r.russian_level,
      russianAt: r.russian_at,
      russianAttempts: r.russian_attempts,
      finalPercent: r.final_percent,
      finalGradingStatus: r.final_grading_status,
      finalAt: r.final_at,
      lastActiveAt: r.last_active_at,
      ungradedWriting: r.ungraded_writing,
      openGrants: r.open_grants,
    })),
  )
})

// ─── Employee card ───────────────────────────────────────────────────────────

adminRouter.get('/admin/users/:id', (req, res) => {
  res.json(toProfile(mustUser(String(req.params.id))))
})

adminRouter.get('/admin/users/:id/modules', (req, res) => {
  const rows = db
    .prepare('SELECT module_slug, completed_at, check_score, check_total FROM module_progress WHERE user_id = ? ORDER BY completed_at')
    .all(String(req.params.id)) as ModuleRow[]
  res.json(rows.map(toModule))
})

adminRouter.delete('/admin/users/:id/modules', (req, res) => {
  db.prepare('DELETE FROM module_progress WHERE user_id = ?').run(String(req.params.id))
  res.json({ ok: true })
})

adminRouter.get('/admin/users/:id/attempts', (req, res) => {
  const rows = db
    .prepare('SELECT * FROM test_attempts WHERE user_id = ? ORDER BY finished_at DESC')
    .all(String(req.params.id)) as AttemptRow[]
  res.json(rows.map(toAttempt))
})

adminRouter.get('/admin/users/:id/activity', (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit ?? 100) || 100, 1), 2000)
  const rows = db
    .prepare('SELECT id, event, meta, created_at FROM activity_log WHERE user_id = ? ORDER BY created_at DESC, id DESC LIMIT ?')
    .all(String(req.params.id), limit) as ActivityDbRow[]
  res.json(rows.map(toActivity))
})

adminRouter.get('/admin/users/:id/grants', (req, res) => {
  const rows = db
    .prepare('SELECT * FROM test_grants WHERE user_id = ? ORDER BY created_at DESC')
    .all(String(req.params.id)) as GrantRow[]
  res.json(rows.map(toGrant))
})

// ─── Grading & retake grants ─────────────────────────────────────────────────

const RUBRIC_KEYS = ['task', 'tone', 'grammar', 'vocabulary'] as const

adminRouter.patch('/admin/attempts/:id/grade', (req, res) => {
  const b = body(req)
  const id = String(req.params.id)
  const score = int(b.score, 0, 5)
  const comment = optStr(b.comment, 1000)
  let rubric: Record<string, number> | null = null
  if (b.rubric !== undefined && b.rubric !== null) {
    if (typeof b.rubric !== 'object') fail(400, 'invalid_input')
    const r = b.rubric as Record<string, unknown>
    rubric = {}
    for (const k of RUBRIC_KEYS) {
      const v = r[k]
      if (typeof v !== 'number' || ![0, 0.5, 1].includes(v)) fail(400, 'invalid_input')
      rubric[k] = v as number
    }
  }
  const result = db
    .prepare('UPDATE test_attempts SET writing_score = ?, writing_comment = ?, writing_rubric = ?, graded_by = ?, graded_at = ? WHERE id = ?')
    .run(score, comment, rubric ? JSON.stringify(rubric) : null, req.user!.id, nowIso(), id)
  if (!result.changes) fail(404, 'not_found')
  res.json(toAttempt(db.prepare('SELECT * FROM test_attempts WHERE id = ?').get(id) as AttemptRow))
})

adminRouter.post('/admin/grants', (req, res) => {
  const b = body(req)
  const userId = str(b.userId, { min: 1, max: 64 })
  const kind = oneOf(b.kind, ['english', 'russian'] as const)
  mustUser(userId)
  const id = uuid()
  const now = nowIso()
  db.prepare('INSERT INTO test_grants (id, user_id, kind, granted_by, created_at, expires_at) VALUES (?, ?, ?, ?, ?, ?)').run(
    id,
    userId,
    kind,
    req.user!.id,
    now,
    addMs(now, 24 * 3_600_000),
  )
  res.json(toGrant(db.prepare('SELECT * FROM test_grants WHERE id = ?').get(id) as GrantRow))
})

adminRouter.delete('/admin/grants/:id', (req, res) => {
  db.prepare('DELETE FROM test_grants WHERE id = ?').run(String(req.params.id))
  res.json({ ok: true })
})

// ─── Question statistics ─────────────────────────────────────────────────────

adminRouter.get('/admin/question-stats', (_req, res) => {
  const rows = db
    .prepare("SELECT kind, details FROM test_attempts WHERE kind IN ('knowledge', 'english', 'russian')")
    .all() as { kind: string; details: string }[]
  const agg = new Map<string, { kind: string; questionId: string; answered: number; correct: number }>()
  for (const r of rows) {
    const answers = parseJson<{ answers?: unknown }>(r.details, {}).answers
    if (!Array.isArray(answers)) continue
    for (const a of answers) {
      if (!a || typeof a !== 'object') continue
      const id = (a as { id?: unknown }).id
      if (typeof id !== 'string') continue
      const key = `${r.kind}|${id}`
      const entry = agg.get(key) ?? { kind: r.kind, questionId: id, answered: 0, correct: 0 }
      entry.answered += 1
      if ((a as { correct?: unknown }).correct === true) entry.correct += 1
      agg.set(key, entry)
    }
  }
  res.json(
    [...agg.values()].map((e) => ({
      kind: e.kind,
      questionId: e.questionId,
      answered: e.answered,
      pctCorrect: Math.round((e.correct * 1000) / e.answered) / 10,
    })),
  )
})

// ─── Accounts ────────────────────────────────────────────────────────────────

function passwordOrFail(v: unknown): string {
  if (typeof v !== 'string' || v.length < 6 || v.length > 200) fail(400, 'weak_password')
  return v as string
}

adminRouter.post('/admin/accounts', (req, res) => {
  const b = body(req)
  const login = (typeof b.login === 'string' ? b.login : '').trim().toLowerCase()
  if (!LOGIN_RE.test(login)) fail(400, 'invalid_login')
  const fullName = str(b.fullName, { min: 1, max: 120, code: 'invalid_name' })
  const password = passwordOrFail(b.password)
  const position = optStr(b.position, 80)
  const role = b.role === 'admin' ? 'admin' : 'employee'
  if (db.prepare('SELECT 1 FROM users WHERE login = ?').get(login)) fail(409, 'login_taken')
  const id = uuid()
  db.prepare(
    'INSERT INTO users (id, login, full_name, role, position, is_active, password_hash, created_at, created_by) VALUES (?, ?, ?, ?, ?, 1, ?, ?, ?)',
  ).run(id, login, fullName, role, position, hashPassword(password), nowIso(), req.user!.id)
  res.json({ profile: toProfile(mustUser(id)) })
})

adminRouter.patch('/admin/accounts/:id', (req, res) => {
  const id = String(req.params.id)
  const user = mustUser(id)
  const b = body(req)
  const fullName = b.fullName === undefined ? user.full_name : str(b.fullName, { min: 1, max: 120, code: 'invalid_name' })
  const position = b.position === undefined ? user.position : optStr(b.position, 80)
  let role = user.role
  if (b.role !== undefined) {
    role = oneOf(b.role, ['admin', 'employee'] as const)
    if (role !== user.role && id === req.user!.id) fail(400, 'cannot_change_self')
    if (role === 'employee' && isLastActiveAdmin(id)) fail(400, 'last_admin')
  }
  db.prepare('UPDATE users SET full_name = ?, position = ?, role = ? WHERE id = ?').run(fullName, position, role, id)
  res.json(toProfile(mustUser(id)))
})

adminRouter.post('/admin/accounts/:id/password', (req, res) => {
  const id = String(req.params.id)
  mustUser(id)
  const password = passwordOrFail(body(req).password)
  db.prepare('UPDATE users SET password_hash = ? WHERE id = ?').run(hashPassword(password), id)
  // Signing out everywhere else is the point of a reset; the admin keeps their own session.
  if (id !== req.user!.id) destroyUserSessions(id)
  res.json({ ok: true })
})

adminRouter.post('/admin/accounts/:id/active', (req, res) => {
  const id = String(req.params.id)
  mustUser(id)
  if (id === req.user!.id) fail(400, 'cannot_change_self')
  const active = body(req).isActive === true
  if (!active && isLastActiveAdmin(id)) fail(400, 'last_admin')
  db.prepare('UPDATE users SET is_active = ? WHERE id = ?').run(active ? 1 : 0, id)
  if (!active) destroyUserSessions(id)
  res.json({ ok: true })
})

adminRouter.delete('/admin/accounts/:id', (req, res) => {
  const id = String(req.params.id)
  mustUser(id)
  if (id === req.user!.id) fail(400, 'cannot_delete_self')
  if (isLastActiveAdmin(id)) fail(400, 'last_admin')
  db.prepare('DELETE FROM users WHERE id = ?').run(id)
  res.json({ ok: true })
})

// ─── Final test results ──────────────────────────────────────────────────────

adminRouter.get('/admin/final/:id/attempts', (req, res) => {
  const rows = db
    .prepare("SELECT * FROM test_attempts WHERE session_id = ? AND kind = 'final' ORDER BY percent DESC")
    .all(String(req.params.id)) as AttemptRow[]
  res.json(rows.map(toAttempt))
})
