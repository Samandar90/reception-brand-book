import { Router } from 'express'
import { body, fail, int, str } from '../http.ts'
import { requireAdmin, requireUser } from '../auth.ts'
import { openStream } from '../realtime.ts'
import * as live from '../final.ts'

export const finalRouter = Router()
finalRouter.use('/final', requireUser)

finalRouter.get('/final/stream', (req, res) => openStream(req, res))

finalRouter.get('/final/active', (_req, res) => {
  res.json({ session: live.activeSession() })
})

finalRouter.get('/final/sessions', requireAdmin, (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit ?? 50) || 50, 1), 200)
  res.json(live.listSessions(limit))
})

finalRouter.post('/final/sessions', requireAdmin, (req, res) => {
  const b = body(req)
  const title = str(b.title ?? '', { max: 120 })
  if (!Array.isArray(b.questionIds) || b.questionIds.length < 1 || b.questionIds.length > 60) fail(400, 'invalid_input')
  const questionIds = (b.questionIds as unknown[]).map((q) => str(q, { min: 1, max: 64 }))
  if (new Set(questionIds).size !== questionIds.length) fail(400, 'invalid_input')
  const s = (b.settings ?? {}) as Record<string, unknown>
  const settings = {
    choiceSeconds: int(s.choiceSeconds ?? 30, 10, 600),
    openSeconds: int(s.openSeconds ?? 120, 30, 900),
  }
  res.json(live.createSession({ title, questionIds, settings, createdBy: req.user!.id }))
})

finalRouter.get('/final/sessions/:id', (req, res) => {
  const s = live.sessionById(String(req.params.id))
  if (!s) fail(404, 'session_not_found')
  res.json(s)
})

finalRouter.delete('/final/sessions/:id', requireAdmin, (req, res) => {
  live.deleteSession(String(req.params.id))
  res.json({ ok: true })
})

finalRouter.post('/final/sessions/:id/open', requireAdmin, (req, res) => {
  const b = body(req)
  const expected = int(b.expectedIndex, -1, 1000)
  const questionId = typeof b.questionId === 'string' ? b.questionId : null
  res.json(live.openQuestion(String(req.params.id), expected, questionId))
})

finalRouter.post('/final/sessions/:id/reveal', requireAdmin, (req, res) => {
  res.json(live.revealQuestion(String(req.params.id), int(body(req).expectedIndex, 0, 1000)))
})

finalRouter.post('/final/sessions/:id/finish', requireAdmin, (req, res) => {
  live.finishSession(String(req.params.id))
  res.json({ ok: true })
})

finalRouter.post('/final/sessions/:id/cancel', requireAdmin, (req, res) => {
  live.cancelSession(String(req.params.id))
  res.json({ ok: true })
})

finalRouter.post('/final/sessions/:id/join', (req, res) => {
  res.json(live.joinSession(String(req.params.id), req.user!))
})

finalRouter.get('/final/sessions/:id/participants', (req, res) => {
  res.json(live.participants(String(req.params.id)))
})

/** Administrators get every answer; employees only their own. */
finalRouter.get('/final/sessions/:id/answers', (req, res) => {
  const isAdmin = req.user!.role === 'admin'
  res.json(live.answers(String(req.params.id), isAdmin ? undefined : req.user!.id))
})

finalRouter.post('/final/sessions/:id/answers', (req, res) => {
  const b = body(req)
  const questionId = str(b.questionId, { min: 1, max: 64 })
  const answerIndex = b.answerIndex === undefined || b.answerIndex === null ? null : int(b.answerIndex, 0, 3)
  const answerText =
    b.answerText === undefined || b.answerText === null ? null : typeof b.answerText === 'string' ? b.answerText.slice(0, 2000) : null
  if (answerIndex === null && (answerText === null || !answerText.trim())) fail(400, 'empty_answer')
  res.json(live.submitAnswer(String(req.params.id), req.user!.id, questionId, answerIndex, answerText))
})

finalRouter.patch('/final/sessions/:id/answers/grade', requireAdmin, (req, res) => {
  const b = body(req)
  const userId = str(b.userId, { min: 1, max: 64 })
  const questionId = str(b.questionId, { min: 1, max: 64 })
  const openScore = b.openScore === null ? null : int(b.openScore, 0, 5)
  live.gradeOpenAnswer(String(req.params.id), userId, questionId, openScore)
  res.json({ ok: true })
})
