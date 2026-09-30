import path from 'node:path'

export const isProd = process.env.NODE_ENV === 'production'

/** Render injects PORT; locally the Vite dev server proxies /api to this port. */
export const PORT = Number(process.env.PORT ?? 8787)

/** Where the SQLite database lives. On Render this must be a persistent disk (see db.ts). */
export const DATA_DIR = path.resolve(process.env.DATA_DIR ?? 'data')

/** One-time key for creating the first administrator on /setup. */
export const SETUP_KEY = process.env.SETUP_KEY ?? (isProd ? '' : 'local-setup-key')

/** Built SPA served by the same process in production. */
export const DIST_DIR = path.resolve(process.env.DIST_DIR ?? 'dist')

/** Set ALLOW_EPHEMERAL_DATA=1 to run in production without a mounted disk (data is lost on redeploy). */
export const ALLOW_EPHEMERAL_DATA = process.env.ALLOW_EPHEMERAL_DATA === '1'

export const SESSION_COOKIE = 'academy_session'
export const SESSION_DAYS_REMEMBER = 30
export const SESSION_HOURS_TEMPORARY = 12
