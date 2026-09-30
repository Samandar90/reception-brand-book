import type { NextFunction, Request, Response } from 'express'

/** Error with a stable machine-readable code; the app maps codes to translated messages. */
export class HttpError extends Error {
  status: number
  code: string
  constructor(status: number, code: string, message?: string) {
    super(message ?? code)
    this.status = status
    this.code = code
  }
}

export const fail = (status: number, code: string): never => {
  throw new HttpError(status, code)
}

export function errorHandler(err: unknown, _req: Request, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    next(err)
    return
  }
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.code })
    return
  }
  const e = err as { type?: string; status?: number }
  if (e?.type === 'entity.parse.failed') {
    res.status(400).json({ error: 'invalid_json' })
    return
  }
  if (e?.type === 'entity.too.large') {
    res.status(413).json({ error: 'too_large' })
    return
  }
  console.error('[academy] unhandled error', err)
  res.status(500).json({ error: 'server_error' })
}

// ─── Input validation ────────────────────────────────────────────────────────

export function body(req: Request): Record<string, unknown> {
  const b = req.body as unknown
  return b && typeof b === 'object' && !Array.isArray(b) ? (b as Record<string, unknown>) : {}
}

export function str(v: unknown, { min = 0, max = 1000, code = 'invalid_input' } = {}): string {
  if (typeof v !== 'string') fail(400, code)
  const s = (v as string).trim()
  if (s.length < min || s.length > max) fail(400, code)
  return s
}

export function optStr(v: unknown, max = 1000, code = 'invalid_input'): string | null {
  if (v === undefined || v === null || v === '') return null
  return str(v, { max, code })
}

export function int(v: unknown, min: number, max: number, code = 'invalid_input'): number {
  if (typeof v !== 'number' || !Number.isInteger(v) || v < min || v > max) fail(400, code)
  return v as number
}

export function optInt(v: unknown, min: number, max: number, code = 'invalid_input'): number | null {
  if (v === undefined || v === null) return null
  return int(v, min, max, code)
}

export function oneOf<T extends string>(v: unknown, values: readonly T[], code = 'invalid_input'): T {
  if (typeof v !== 'string' || !values.includes(v as T)) fail(400, code)
  return v as T
}

export function obj(v: unknown, maxBytes: number, code = 'invalid_input'): Record<string, unknown> {
  if (!v || typeof v !== 'object' || Array.isArray(v)) fail(400, code)
  if (JSON.stringify(v).length > maxBytes) fail(413, 'too_large')
  return v as Record<string, unknown>
}

export function isoDate(v: unknown, code = 'invalid_input'): string {
  if (typeof v !== 'string' || Number.isNaN(Date.parse(v))) fail(400, code)
  return new Date(v as string).toISOString()
}

export const LOGIN_RE = /^[a-z0-9][a-z0-9._-]{2,31}$/
export const SLUG_RE = /^[a-z0-9-]{2,64}$/
