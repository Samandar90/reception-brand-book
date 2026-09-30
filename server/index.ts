import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import { db, DB_PATH } from './db.ts'
import { DIST_DIR, isProd, PORT } from './config.ts'
import { errorHandler } from './http.ts'
import { loadUser, requireAppHeader } from './auth.ts'
import { streamCount } from './realtime.ts'
import { authRouter } from './routes/auth.ts'
import { meRouter } from './routes/me.ts'
import { adminRouter } from './routes/admin.ts'
import { finalRouter } from './routes/final.ts'

const app = express()
app.disable('x-powered-by')
app.set('trust proxy', 1) // Render terminates TLS in front of the app

app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'same-origin')
  res.setHeader('X-Frame-Options', 'DENY')
  next()
})

// ─── API ─────────────────────────────────────────────────────────────────────

const api = express.Router()
api.use(express.json({ limit: '1mb' }))
api.use(requireAppHeader)
api.use(loadUser)
api.use((_req, res, next) => {
  res.setHeader('Cache-Control', 'no-store')
  next()
})

api.get('/health', (_req, res) => {
  const row = db.prepare('SELECT count(*) AS users FROM users').get() as { users: number }
  res.json({ ok: true, db: 'ok', users: row.users, streams: streamCount() })
})
api.get('/time', (_req, res) => {
  res.json({ now: new Date().toISOString() })
})

api.use(authRouter)
api.use(meRouter)
api.use(adminRouter)
api.use(finalRouter)
api.use((_req, res) => {
  res.status(404).json({ error: 'not_found' })
})
api.use(errorHandler)

app.use('/api', api)

// ─── The React app (built by Vite) ───────────────────────────────────────────

const indexHtml = path.join(DIST_DIR, 'index.html')
if (fs.existsSync(indexHtml)) {
  app.use(
    express.static(DIST_DIR, {
      index: false,
      setHeaders(res, filePath) {
        if (filePath.includes(`${path.sep}assets${path.sep}`)) res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      },
    }),
  )
  app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next()
      return
    }
    res.setHeader('Cache-Control', 'no-cache')
    res.sendFile(indexHtml)
  })
} else if (isProd) {
  console.warn(`[academy] ${indexHtml} not found — run "npm run build" before starting in production`)
}

const server = app.listen(PORT, () => {
  console.log(`[academy] listening on :${PORT} (db ${DB_PATH}${isProd ? ', production' : ''})`)
})

function shutdown() {
  server.close(() => {
    db.close()
    process.exit(0)
  })
  setTimeout(() => process.exit(0), 5000).unref()
}
process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
