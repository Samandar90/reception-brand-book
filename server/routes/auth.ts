import { Router } from 'express'
import { db, nowIso, uuid } from '../db.ts'
import { body, fail, LOGIN_RE, str } from '../http.ts'
import {
  burnPasswordCheck,
  clearLoginFailures,
  createSession,
  destroySession,
  hashPassword,
  loginThrottled,
  recordLoginFailure,
  safeEqual,
  verifyPassword,
} from '../auth.ts'
import { SETUP_KEY } from '../config.ts'
import { toProfile, type UserRow } from '../mappers.ts'

export const authRouter = Router()

function logActivity(userId: string, event: string, meta: Record<string, unknown> = {}) {
  db.prepare('INSERT INTO activity_log (user_id, event, meta, created_at) VALUES (?, ?, ?, ?)').run(
    userId,
    event,
    JSON.stringify(meta),
    nowIso(),
  )
}

authRouter.post('/auth/login', (req, res) => {
  const b = body(req)
  const login = typeof b.login === 'string' ? b.login.trim().toLowerCase() : ''
  const password = typeof b.password === 'string' ? b.password : ''
  if (!login || !password) fail(400, 'required')
  const key = `${req.ip}|${login}`
  if (loginThrottled(key)) fail(429, 'too_many_attempts')

  const user = db.prepare('SELECT * FROM users WHERE login = ?').get(login) as UserRow | undefined
  if (!user) {
    burnPasswordCheck(password)
    recordLoginFailure(key)
    fail(401, 'invalid')
  }
  const u = user as UserRow
  if (!verifyPassword(password, u.password_hash)) {
    recordLoginFailure(key)
    fail(401, 'invalid')
  }
  if (u.is_active !== 1) fail(403, 'disabled')
  clearLoginFailures(key)
  createSession(res, u.id, b.remember !== false)
  logActivity(u.id, 'login', { userAgent: String(req.headers['user-agent'] ?? '').slice(0, 200) })
  res.json({ user: toProfile(u) })
})

authRouter.post('/auth/logout', (req, res) => {
  destroySession(req, res)
  res.json({ ok: true })
})

authRouter.get('/auth/me', (req, res) => {
  if (!req.user) fail(401, 'unauthorized')
  res.json({ user: toProfile(req.user as UserRow) })
})

// ─── First launch ────────────────────────────────────────────────────────────

const hasAdmin = () => Boolean(db.prepare("SELECT 1 FROM users WHERE role = 'admin' LIMIT 1").get())

authRouter.get('/setup/status', (_req, res) => {
  res.json({ hasAdmin: hasAdmin() })
})

authRouter.post('/setup/bootstrap', (req, res) => {
  const b = body(req)
  if (!SETUP_KEY || typeof b.key !== 'string' || !safeEqual(b.key, SETUP_KEY)) fail(403, 'forbidden')
  if (hasAdmin()) fail(409, 'admin_exists')
  const login = str(b.login, { max: 32, code: 'invalid_login' }).toLowerCase()
  if (!LOGIN_RE.test(login)) fail(400, 'invalid_login')
  const fullName = str(b.fullName ?? b.full_name, { min: 1, max: 120, code: 'invalid_name' })
  if (typeof b.password !== 'string' || b.password.length < 6 || b.password.length > 200) fail(400, 'weak_password')
  const id = uuid()
  db.prepare(
    'INSERT INTO users (id, login, full_name, role, position, is_active, password_hash, created_at) VALUES (?, ?, ?, ?, NULL, 1, ?, ?)',
  ).run(id, login, fullName, 'admin', hashPassword(b.password as string), nowIso())
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id) as UserRow
  res.json({ profile: toProfile(user) })
})
