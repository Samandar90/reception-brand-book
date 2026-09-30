import type { Request, Response } from 'express'

// Server-Sent Events hub for the live final test. One stream per browser tab;
// the app treats every event as "something changed, re-read it".

interface Client {
  res: Response
  isAdmin: boolean
}

const clients = new Set<Client>()

function send(client: Client, event: string, data: unknown): void {
  client.res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
}

export function openStream(req: Request, res: Response): void {
  res.status(200)
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
  res.setHeader('Cache-Control', 'no-cache, no-transform')
  res.setHeader('Connection', 'keep-alive')
  res.setHeader('X-Accel-Buffering', 'no')
  res.flushHeaders()
  res.write('retry: 3000\n\n')

  const client: Client = { res, isAdmin: req.user?.role === 'admin' }
  clients.add(client)

  const ping = setInterval(() => res.write(': ping\n\n'), 20_000)
  req.on('close', () => {
    clearInterval(ping)
    clients.delete(client)
  })
}

/** Session row changed (created / updated / deleted). Visible to every signed-in user, like before. */
export function emitSession(type: 'created' | 'updated' | 'deleted', session: unknown): void {
  for (const c of clients) send(c, 'session', { type, session })
}

/** Participants list or scores changed. */
export function emitParticipants(sessionId: string): void {
  for (const c of clients) send(c, 'participants', { sessionId })
}

/** A new answer — only administrators receive other people's answers. */
export function emitAnswer(answer: { sessionId: string }): void {
  for (const c of clients) if (c.isAdmin) send(c, 'answer', answer)
}

export function streamCount(): number {
  return clients.size
}
