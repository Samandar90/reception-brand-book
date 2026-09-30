import crypto from 'node:crypto'
import type { NextFunction, Request, Response } from 'express'
import { db, nowIso, addMs } from './db.ts'
import { HttpError } from './http.ts'
import { isProd, SESSION_COOKIE, SESSION_DAYS_REMEMBER, SESSION_HOURS_TEMPORARY } from './config.ts'
import type { UserRow } from './mappers.ts'

// ─── Passwords (scrypt) ──────────────────────────────────────────────────────

const SCRYPT_N = 16384
const SCRYPT_R = 8
const SCRYPT_P = 1
const KEY_LEN = 32

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16)
  const hash = crypto.scryptSync(password, salt, KEY_LEN, { N: SCRYPT_N, r: SCRYPT_R, p: SCRYPT_P })
  return `scrypt$${SCRYPT_N}$${SCRYPT_R}$${SCRYPT_P}$${salt.toString('base64')}$${hash.toString('base64')}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const [scheme, n, r, p, saltB64, hashB64] = stored.split('$')
  if (scheme !== 'scrypt' || !saltB64 || !hashB64) return false
  const expected = Buffer.from(hashB64, 'base64')
  const actual = crypto.scryptSync(password, Buffer.from(saltB64, 'base64'), expected.length, {
    N: Number(n),
    r: Number(r),
    p: Number(p),
  })
  return actual.length === expected.length && crypto.timingSafeEqual(actual, expected)
}

/** Spend the same time on unknown logins so response time does not reveal which logins exist. */
const DUMMY_HASH = hashPassword(crypto.randomBytes(8).toString('hex'))
export function burnPasswordCheck(password: string): void {
  verifyPassword(password, DUMMY_HASH)
}

export function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && crypto.timingSafeEqual(x, y)
}

// ─── Sessions (opaque token in an httpOnly cookie, sha256 stored) ───────────

const sha256 = (s: string) => crypto.createHash('sha256').update(s).digest('hex')

export function createSession(res: Response, userId: string, remember: boolean): void {
  const token = crypto.randomBytes(32).toString('base64url')
  const now = nowIso()
  const ttlMs = remember ? SESSION_DAYS_REMEMBER * 86_400_000 : SESSION_HOURS_TEMPORARY * 3_600_000
  db.prepare(
    'INSERT INTO sessions (token_hash, user_id, remember, created_at, expires_at, last_seen_at) VALUES (?, ?, ?, ?, ?, ?)',
  ).run(sha256(token), userId, remember ? 1 : 0, now, addMs(now, ttlMs), now)
  setCookie(res, token, remember ? ttlMs : null)
}

function setCookie(res: Response, token: string, maxAgeMs: number | null): void {
  res.cookie(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProd,
    path: '/',
    ...(maxAgeMs ? { maxAge: maxAgeMs } : {}),
  })
}

export function destroySession(req: Request, res: Response): void {
  const token = readCookie(req)
  if (token) db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(sha256(token))
  res.clearCookie(SESSION_COOKIE, { path: '/' })
}

export function destroyUserSessions(userId: string): void {
  db.prepare('DELETE FROM sessions WHERE user_id = ?').run(userId)
}

function readCookie(req: Request): string | null {
  const header = req.headers.cookie
  if (!header) return null
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === SESSION_COOKIE) return decodeURIComponent(v.join('='))
  }
  return null
}

interface SessionJoin extends UserRow {
  token_hash: string
  remember: number
  expires_at: string
  last_seen_at: string
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserRow
  }
}

/** Attaches req.user when the cookie belongs to a live session of an active account. */
export function loadUser(req: Request, res: Response, next: NextFunction): void {
  const token = readCookie(req)
  if (!token) {
    next()
    return
  }
  const hash = sha256(token)
  const row = db
    .prepare(
      `SELECT u.*, s.token_hash, s.remember, s.expires_at, s.last_seen_at AS session_seen
         FROM sessions s JOIN users u ON u.id = s.user_id
        WHERE s.token_hash = ?`,
    )
    .get(hash) as (SessionJoin & { session_seen: string }) | undefined
  const now = nowIso()
  if (!row || row.expires_at <= now || row.is_active !== 1) {
    if (row) db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(hash)
    res.clearCookie(SESSION_COOKIE, { path: '/' })
    next()
    return
  }
  // Sliding expiry for "remember this device": extend at most once an hour.
  if (Date.parse(now) - Date.parse(row.session_seen) > 3_600_000) {
    if (row.remember === 1) {
      const ttl = SESSION_DAYS_REMEMBER * 86_400_000
      db.prepare('UPDATE sessions SET last_seen_at = ?, expires_at = ? WHERE token_hash = ?').run(now, addMs(now, ttl), hash)
      setCookie(res, token, ttl)
    } else {
      db.prepare('UPDATE sessions SET last_seen_at = ? WHERE token_hash = ?').run(now, hash)
    }
  }
  const { token_hash: _t, remember: _r, expires_at: _e, last_seen_at: _l, session_seen: _s, ...user } = row
  req.user = user as UserRow
  next()
}

export function requireUser(req: Request, _res: Response, next: NextFunction): void {
  if (!req.user) throw new HttpError(401, 'unauthorized')
  next()
}

export function requireAdmin(req: Request, _res: Response, next: NextFunction): void {
  if (!req.user) throw new HttpError(401, 'unauthorized')
  if (req.user.role !== 'admin') throw new HttpError(403, 'forbidden')
  next()
}

/** Blocks cross-site form posts: every state-changing request must carry this header (set by the app). */
export function requireAppHeader(req: Request, _res: Response, next: NextFunction): void {
  if (req.method !== 'GET' && req.method !== 'HEAD' && req.headers['x-academy'] !== '1') {
    throw new HttpError(403, 'forbidden')
  }
  next()
}

// ─── Login throttling (in memory, per IP + login) ────────────────────────────

const attempts = new Map<string, { count: number; resetAt: number }>()
const MAX_FAILURES = 10
const WINDOW_MS = 15 * 60_000

export function loginThrottled(key: string): boolean {
  const entry = attempts.get(key)
  if (!entry || entry.resetAt < Date.now()) return false
  return entry.count >= MAX_FAILURES
}

export function recordLoginFailure(key: string): void {
  const entry = attempts.get(key)
  if (!entry || entry.resetAt < Date.now()) attempts.set(key, { count: 1, resetAt: Date.now() + WINDOW_MS })
  else entry.count += 1
  if (attempts.size > 10_000) attempts.clear()
}

export function clearLoginFailures(key: string): void {
  attempts.delete(key)
}
