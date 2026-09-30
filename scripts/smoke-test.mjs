// End-to-end smoke test of the academy server (accounts, permissions, retake grants,
// the live final test with realtime events, grading, deactivation).
//
//   npm run dev:server            (in another terminal; uses ./data/academy.sqlite3)
//   npm run smoke                 (runs this file through tsx so it can read the question bank)
//
// Env: ACADEMY_URL (default http://localhost:8787), SETUP_KEY (default local-setup-key),
//      ADMIN_LOGIN / ADMIN_PASSWORD (default owner / owner123; created via /setup if no admin exists).
// Leaves test data behind — run it against a local or throwaway database, never production.

import { getFinalQuestion } from '../src/data/final/index.ts'

const BASE = (process.env.ACADEMY_URL ?? 'http://localhost:8787').replace(/\/$/, '')
const SETUP_KEY = process.env.SETUP_KEY ?? 'local-setup-key'
const ADMIN_LOGIN = process.env.ADMIN_LOGIN ?? 'owner'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'owner123'

const suffix = Date.now().toString(36).slice(-5)
let passes = 0
let failures = 0

function check(name, cond, extra) {
  if (cond) {
    passes++
    console.log(`  ✓ ${name}`)
  } else {
    failures++
    console.log(`  ✗ ${name}`, extra === undefined ? '' : JSON.stringify(extra))
  }
}

/** A browser-like client: keeps the session cookie and sends the app header. */
class Client {
  cookie = ''
  async call(method, path, body, { header = true } = {}) {
    const res = await fetch(`${BASE}/api${path}`, {
      method,
      headers: {
        ...(header ? { 'x-academy': '1' } : {}),
        ...(body === undefined ? {} : { 'Content-Type': 'application/json' }),
        ...(this.cookie ? { Cookie: this.cookie } : {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
    const setCookie = res.headers.get('set-cookie')
    if (setCookie) {
      const pair = setCookie.split(';')[0]
      this.cookie = pair.endsWith('=') ? '' : pair
      this.lastSetCookie = setCookie
    }
    const text = await res.text()
    let data = null
    try {
      data = text ? JSON.parse(text) : null
    } catch {
      data = text
    }
    return { status: res.status, data, error: data && typeof data === 'object' ? data.error : undefined }
  }
  get(p) {
    return this.call('GET', p)
  }
  post(p, b = {}) {
    return this.call('POST', p, b)
  }
  put(p, b = {}) {
    return this.call('PUT', p, b)
  }
  patch(p, b = {}) {
    return this.call('PATCH', p, b)
  }
  del(p) {
    return this.call('DELETE', p)
  }
}

async function signIn(login, password) {
  const c = new Client()
  const r = await c.post('/auth/login', { login, password, remember: true })
  return { c, r }
}

/** Collects Server-Sent Events from /api/final/stream until stopped. */
function openStream(client) {
  const events = []
  const controller = new AbortController()
  const ready = fetch(`${BASE}/api/final/stream`, { headers: { Cookie: client.cookie }, signal: controller.signal })
    .then(async (res) => {
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buf = ''
      for (;;) {
        const { value, done } = await reader.read()
        if (done) break
        buf += decoder.decode(value, { stream: true })
        let idx
        while ((idx = buf.indexOf('\n\n')) >= 0) {
          const chunk = buf.slice(0, idx)
          buf = buf.slice(idx + 2)
          const ev = /^event: (.+)$/m.exec(chunk)?.[1]
          const data = /^data: (.+)$/m.exec(chunk)?.[1]
          if (ev && data) events.push({ event: ev, data: JSON.parse(data) })
        }
      }
    })
    .catch(() => undefined)
  return { events, stop: () => controller.abort(), ready }
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

async function main() {
  console.log(`Smoke test against ${BASE}`)
  const health = await new Client().get('/health')
  check('health endpoint', health.status === 200 && health.data.ok === true, health)

  // ── Accounts ──────────────────────────────────────────────────────────────
  console.log('\nAccounts')
  const anon = new Client()
  const boot = await anon.post('/setup/bootstrap', { key: SETUP_KEY, login: ADMIN_LOGIN, password: ADMIN_PASSWORD, fullName: 'Owner' })
  check('bootstrap creates an admin or reports one exists', boot.data?.profile?.role === 'admin' || boot.error === 'admin_exists', boot)
  const boot2 = await anon.post('/setup/bootstrap', { key: SETUP_KEY, login: `other${suffix}`, password: 'whatever1', fullName: 'X' })
  check('second bootstrap is refused', boot2.error === 'admin_exists', boot2)
  const badKey = await anon.post('/setup/bootstrap', { key: 'nope', login: 'zzzz', password: 'zzzzzz', fullName: 'Z' })
  check('bootstrap with a wrong key is forbidden', badKey.error === 'forbidden', badKey)
  const status = await anon.get('/setup/status')
  check('setup status reports an admin', status.data?.hasAdmin === true, status)

  const noHeader = await anon.call('POST', '/auth/login', { login: ADMIN_LOGIN, password: ADMIN_PASSWORD }, { header: false })
  check('state-changing request without the app header is refused', noHeader.status === 403, noHeader)

  const { c: admin, r: adminLogin } = await signIn(ADMIN_LOGIN, ADMIN_PASSWORD)
  check('admin can sign in', adminLogin.status === 200 && adminLogin.data?.user?.role === 'admin', adminLogin)
  check('session cookie is httpOnly', /httponly/i.test(admin.lastSetCookie ?? ''), admin.lastSetCookie)
  const adminId = adminLogin.data?.user?.id

  const empLogin = `emp.${suffix}`
  const emp2Login = `emp2.${suffix}`
  const created = await admin.post('/admin/accounts', { login: empLogin, password: 'secret1', fullName: 'Test Employee', position: 'Receptionist', role: 'employee' })
  check('admin creates an employee', created.data?.profile?.login === empLogin && created.data?.profile?.role === 'employee', created)
  const created2 = await admin.post('/admin/accounts', { login: emp2Login.toUpperCase(), password: 'secret2', fullName: 'Second Employee', role: 'employee' })
  check('logins are normalised to lower case', created2.data?.profile?.login === emp2Login, created2)
  const dup = await admin.post('/admin/accounts', { login: empLogin, password: 'secret1', fullName: 'Dup' })
  check('duplicate login rejected', dup.error === 'login_taken', dup)
  const badLogin = await admin.post('/admin/accounts', { login: 'A B', password: 'secret1', fullName: 'Bad' })
  check('invalid login rejected', badLogin.error === 'invalid_login', badLogin)
  const weak = await admin.post('/admin/accounts', { login: `weak.${suffix}`, password: '123', fullName: 'Weak' })
  check('weak password rejected', weak.error === 'weak_password', weak)
  const empId = created.data?.profile?.id
  const emp2Id = created2.data?.profile?.id

  const { c: emp, r: empSign } = await signIn(empLogin, 'secret1')
  check('employee can sign in', empSign.status === 200, empSign)
  const { c: emp2 } = await signIn(emp2Login, 'secret2')
  const wrongPw = await new Client().post('/auth/login', { login: empLogin, password: 'nope' })
  check('wrong password rejected', wrongPw.status === 401 && wrongPw.error === 'invalid', wrongPw)

  const notAdmin = await emp.post('/admin/accounts', { login: `hack${suffix}`, password: 'secret1', fullName: 'Hacker' })
  check('employee cannot create accounts', notAdmin.status === 403, notAdmin)

  // ── Permissions ────────────────────────────────────────────────────────────
  console.log('\nPermissions')
  const me = await emp.get('/auth/me')
  check('employee sees own profile', me.data?.user?.id === empId, me)
  const overviewEmp = await emp.get('/admin/overview')
  check('employee cannot open the team overview', overviewEmp.status === 403, overviewEmp.status)
  const othersAttempts = await emp.get(`/admin/users/${emp2Id}/attempts`)
  check("employee cannot read someone else's attempts", othersAttempts.status === 403, othersAttempts.status)
  const selfPromote = await emp.patch(`/admin/accounts/${empId}`, { role: 'admin' })
  const stillEmp = await admin.get(`/admin/users/${empId}`)
  check('employee cannot promote self', selfPromote.status === 403 && stillEmp.data?.role === 'employee', { selfPromote, stillEmp })
  const anonMe = await new Client().get('/me/attempts')
  check('anonymous requests are rejected', anonMe.status === 401, anonMe.status)

  const prog = await emp.put('/me/modules/check-in', { checkScore: 3, checkTotal: 3 })
  check('employee records module progress', prog.status === 200, prog)
  const progAdmin = await admin.get(`/admin/users/${empId}/modules`)
  check('admin sees the progress', progAdmin.data?.[0]?.moduleSlug === 'check-in' && progAdmin.data?.[0]?.checkScore === 3, progAdmin)

  const now = new Date().toISOString()
  const know = await emp.post('/me/attempts', { kind: 'knowledge', score: 30, total: 36, details: { mode: 'assessment', answers: [{ id: 'q1', correct: true }] }, startedAt: now })
  check('knowledge attempt stored with server-computed percent', know.status === 200 && know.data?.percent === 83.33, know)
  const preGraded = await emp.post('/me/attempts', { kind: 'knowledge', score: 1, total: 2, writingScore: 5, startedAt: now })
  check('employee cannot pre-grade an attempt', preGraded.status === 200 && preGraded.data?.writingScore === null, preGraded)
  const fakeFinal = await emp.post('/me/attempts', { kind: 'final', score: 10, total: 10, startedAt: now })
  check('employee cannot insert a final attempt', fakeFinal.status === 400, fakeFinal)
  const overScore = await emp.post('/me/attempts', { kind: 'knowledge', score: 40, total: 36, startedAt: now })
  check('score above total rejected', overScore.status === 400, overScore)

  // ── Language retake grants ─────────────────────────────────────────────────
  console.log('\nLanguage tests & retake grants')
  const eng = { kind: 'english', score: 14, total: 16, level: 'A2', details: { mode: 'placement' }, writing: { promptId: 'en-writing-a2-01', text: 'Hello', wordCount: 1, durationSec: 30 }, startedAt: now }
  const eng1 = await emp.post('/me/attempts', eng)
  check('first english attempt is free', eng1.status === 200, eng1)
  const eng2 = await emp.post('/me/attempts', eng)
  check('second english attempt needs a grant', eng2.error === 'retake_not_allowed', eng2)
  const grant = await admin.post('/admin/grants', { userId: empId, kind: 'english' })
  check('admin grants a retake', grant.status === 200 && grant.data?.kind === 'english', grant)
  const selfGrant = await emp.post('/admin/grants', { userId: empId, kind: 'english' })
  check('employee cannot grant self a retake', selfGrant.status === 403, selfGrant.status)
  const myGrants = await emp.get('/me/grants')
  check('employee sees the open grant', myGrants.data?.length === 1, myGrants)
  const eng3 = await emp.post('/me/attempts', eng)
  check('retake allowed with the grant', eng3.status === 200, eng3)
  const grants = await admin.get(`/admin/users/${empId}/grants`)
  check('grant is consumed by the retake', grants.data?.[0]?.usedByAttemptId === eng3.data?.id, grants)
  const eng4 = await emp.post('/me/attempts', eng)
  check('grant cannot be reused', eng4.error === 'retake_not_allowed', eng4)

  const graded = await admin.patch(`/admin/attempts/${eng1.data?.id}/grade`, { score: 4, comment: 'Good', rubric: { task: 1, tone: 1, grammar: 0.5, vocabulary: 0.5 } })
  check('admin grades writing with a rubric', graded.data?.writingScore === 4 && graded.data?.writingRubric?.grammar === 0.5, graded)
  const badRubric = await admin.patch(`/admin/attempts/${eng1.data?.id}/grade`, { score: 4, rubric: { task: 2, tone: 1, grammar: 1, vocabulary: 1 } })
  check('invalid rubric rejected', badRubric.status === 400, badRubric)
  const empGrade = await emp.patch(`/admin/attempts/${eng1.data?.id}/grade`, { score: 5 })
  check('employee cannot grade', empGrade.status === 403, empGrade.status)

  // ── Live final test ────────────────────────────────────────────────────────
  console.log('\nLive final test')
  const existing = await admin.get('/final/sessions?limit=200')
  for (const s of existing.data ?? []) if (['lobby', 'question', 'reveal'].includes(s.status)) await admin.post(`/final/sessions/${s.id}/cancel`)

  const qids = ['final-mc-01', 'final-mc-02', 'final-open-01']
  const [q1, q2] = qids.map((id) => getFinalQuestion(id))
  const session = await admin.post('/final/sessions', { title: `Smoke ${suffix}`, questionIds: qids, settings: { choiceSeconds: 30, openSeconds: 120 } })
  check('admin creates a session', session.status === 200 && session.data?.status === 'lobby', session)
  const second = await admin.post('/final/sessions', { title: 'dup', questionIds: qids })
  check('only one live session at a time', second.error === 'live_session_exists', second)
  const unknownQ = await admin.post('/final/sessions', { title: 'x', questionIds: ['nope'] })
  check('unknown question ids rejected', unknownQ.status >= 400, unknownQ)
  const empSess = await emp.post('/final/sessions', { title: 'x', questionIds: qids })
  check('employee cannot create sessions', empSess.status === 403, empSess.status)
  const sid = session.data.id

  const adminStream = openStream(admin)
  const empStream = openStream(emp)
  await wait(300)

  const j1 = await emp.post(`/final/sessions/${sid}/join`)
  const j1b = await emp.post(`/final/sessions/${sid}/join`)
  const j2 = await emp2.post(`/final/sessions/${sid}/join`)
  check('employees join (idempotent)', j1.status === 200 && j1b.status === 200 && j2.status === 200 && j1.data?.displayName === 'Test Employee', { j1, j1b, j2 })
  const active = await emp.get('/final/active')
  check('employees find the live session', active.data?.session?.id === sid, active)

  const early = await emp.post(`/final/sessions/${sid}/answers`, { questionId: 'final-mc-01', answerIndex: 1 })
  check('answers rejected in the lobby', early.error === 'not_accepting', early)
  const empOpen = await emp.post(`/final/sessions/${sid}/open`, { expectedIndex: -1 })
  check('employee cannot drive the session', empOpen.status === 403, empOpen.status)
  const opened = await admin.post(`/final/sessions/${sid}/open`, { expectedIndex: -1, questionId: 'final-mc-01' })
  check('admin opens question 1', opened.data?.status === 'question' && opened.data?.currentIndex === 0 && !!opened.data?.questionDeadlineAt, opened)
  check('phone payload has no answer key', opened.data && !('correctIndex' in (opened.data.currentQuestion ?? {})) && !('explanation' in (opened.data.currentQuestion ?? {})), opened.data?.currentQuestion)
  const stale = await admin.post(`/final/sessions/${sid}/open`, { expectedIndex: -1 })
  check('a stale "next" click is a no-op', stale.data?.currentIndex === 0, stale)

  const a1 = await emp.post(`/final/sessions/${sid}/answers`, { questionId: 'final-mc-01', answerIndex: q1.correctIndex })
  check('correct answer scored on the server with the speed bonus', a1.data?.isCorrect === true && a1.data?.points === 120, a1)
  const a1dup = await emp.post(`/final/sessions/${sid}/answers`, { questionId: 'final-mc-01', answerIndex: (q1.correctIndex + 1) % 4 })
  check('double tap returns the first answer', a1dup.data?.answerIndex === q1.correctIndex && a1dup.data?.points === 120, a1dup)
  const b1 = await emp2.post(`/final/sessions/${sid}/answers`, { questionId: 'final-mc-01', answerIndex: (q1.correctIndex + 1) % 4 })
  check('wrong answer scores 0', b1.data?.isCorrect === false && b1.data?.points === 0, b1)
  const wrongQ = await emp.post(`/final/sessions/${sid}/answers`, { questionId: 'final-mc-02', answerIndex: 0 })
  check('answer to a non-current question rejected', wrongQ.error === 'not_current_question', wrongQ)
  const ownAnswers = await emp.get(`/final/sessions/${sid}/answers`)
  check('employee sees only own answers', ownAnswers.data?.length === 1 && ownAnswers.data[0].userId === empId, ownAnswers)
  const allAnswers = await admin.get(`/final/sessions/${sid}/answers`)
  check('admin sees every answer', allAnswers.data?.length === 2, allAnswers)

  const rev = await admin.post(`/final/sessions/${sid}/reveal`, { expectedIndex: 0 })
  const r = rev.data?.reveal
  check('reveal publishes key, explanation and distribution', rev.data?.status === 'reveal' && r?.correctIndex === q1.correctIndex && r?.answered === 2 && r?.distribution?.[q1.correctIndex] === 1 && !!r?.explanation?.ru, r)

  const mismatch = await admin.post(`/final/sessions/${sid}/open`, { expectedIndex: 0, questionId: 'final-open-01' })
  check('opening the wrong question id is rejected', mismatch.error === 'question_mismatch', mismatch)
  await admin.post(`/final/sessions/${sid}/open`, { expectedIndex: 0, questionId: 'final-mc-02' })
  await emp.post(`/final/sessions/${sid}/answers`, { questionId: 'final-mc-02', answerIndex: q2.correctIndex })
  await admin.post(`/final/sessions/${sid}/reveal`, { expectedIndex: 1 })
  const o3 = await admin.post(`/final/sessions/${sid}/open`, { expectedIndex: 1, questionId: 'final-open-01' })
  check('open task opened', o3.data?.currentIndex === 2 && o3.data?.currentQuestion?.type === 'open' && !('rubric' in (o3.data?.currentQuestion ?? {})), o3.data?.currentQuestion)
  const emptyText = await emp.post(`/final/sessions/${sid}/answers`, { questionId: 'final-open-01', answerText: '   ' })
  check('empty open answer rejected', emptyText.error === 'empty_answer', emptyText)
  const t1 = await emp.post(`/final/sessions/${sid}/answers`, { questionId: 'final-open-01', answerText: 'I would apologise and offer a solution.' })
  check('open answer stored', t1.data?.answerText?.startsWith('I would'), t1)

  await wait(300)
  adminStream.stop()
  empStream.stop()
  const adminAnswerEvents = adminStream.events.filter((e) => e.event === 'answer')
  const empAnswerEvents = empStream.events.filter((e) => e.event === 'answer')
  const empSessionEvents = empStream.events.filter((e) => e.event === 'session' && e.data.session?.id === sid)
  check('realtime: admin receives answer events', adminAnswerEvents.length >= 3, adminStream.events.map((e) => e.event))
  check("realtime: employees never receive other people's answers", empAnswerEvents.length === 0, empAnswerEvents)
  check('realtime: employees receive session updates', empSessionEvents.length >= 5, empStream.events.map((e) => e.event))
  check('realtime: session events carry no answer key while a question is open', empSessionEvents.filter((e) => e.data.session.status === 'question').every((e) => !('correctIndex' in (e.data.session.currentQuestion ?? {}))))

  const fin = await admin.post(`/final/sessions/${sid}/finish`)
  const fin2 = await admin.post(`/final/sessions/${sid}/finish`)
  check('finish is idempotent', fin.status === 200 && fin2.status === 200, { fin, fin2 })
  const finals = await admin.get(`/admin/final/${sid}/attempts`)
  const e1 = finals.data?.find((f) => f.userId === empId)
  const e2 = finals.data?.find((f) => f.userId === emp2Id)
  check('one final attempt per participant', finals.data?.length === 2, finals.data?.length)
  check('employee 1: 2/2 choice correct, open pending', e1?.score === 2 && e1?.total === 2 && e1?.percent === 100 && e1?.details?.gradingStatus === 'pending', e1)
  check('employee 2: 0/2, missing answer counted as wrong', e2?.score === 0 && e2?.total === 2 && e2?.details?.incomplete === true, e2)
  check('ranking stored', e1?.details?.rank === 1 && e2?.details?.rank === 2, [e1?.details?.rank, e2?.details?.rank])

  const gradeOpen = await admin.patch(`/final/sessions/${sid}/answers/grade`, { userId: empId, questionId: 'final-open-01', openScore: 3 })
  const e1After = (await admin.get(`/admin/final/${sid}/attempts`)).data?.find((f) => f.userId === empId)
  check('grading the open answer blends the result (70 % choice + 30 % open)', gradeOpen.status === 200 && e1After?.percent === 88 && e1After?.details?.gradingStatus === 'graded', { gradeOpen, e1After })
  const empGradeOpen = await emp.patch(`/final/sessions/${sid}/answers/grade`, { userId: empId, questionId: 'final-open-01', openScore: 5 })
  check('employee cannot grade open answers', empGradeOpen.status === 403, empGradeOpen.status)
  const late = await emp2.post(`/final/sessions/${sid}/answers`, { questionId: 'final-open-01', answerText: 'late' })
  check('no answers after finish', late.error === 'not_accepting', late)
  const delFinished = await admin.del(`/final/sessions/${sid}`)
  check('finished sessions cannot be deleted', delFinished.error === 'only_cancelled', delFinished)

  // ── Overview ───────────────────────────────────────────────────────────────
  console.log('\nOverview')
  const ov = (await admin.get('/admin/overview')).data?.find((o) => o.id === empId)
  check('overview aggregates the employee', ov?.modulesCompleted === 1 && ov?.knowledgeBest === 83.33 && ov?.englishLevel === 'A2' && ov?.englishAttempts === 2 && ov?.finalPercent === 88, ov)
  const stats = await admin.get('/admin/question-stats')
  check('question statistics', stats.status === 200 && stats.data?.some((s) => s.questionId === 'q1'), stats.data?.length)
  const act = await admin.get(`/admin/users/${empId}/activity?limit=50`)
  check('login is recorded in the activity log', act.data?.some((a) => a.event === 'login'), act.data?.length)

  // ── Deactivation & account management ─────────────────────────────────────
  console.log('\nDeactivation')
  const self = await admin.post(`/admin/accounts/${adminId}/active`, { isActive: false })
  check('admin cannot deactivate self', self.error === 'cannot_change_self', self)
  const off = await admin.post(`/admin/accounts/${emp2Id}/active`, { isActive: false })
  check('admin deactivates an employee', off.data?.ok === true, off)
  const banned = await new Client().post('/auth/login', { login: emp2Login, password: 'secret2' })
  check('deactivated employee cannot sign in', banned.status === 403 && banned.error === 'disabled', banned)
  const oldCookie = await emp2.post('/me/activity', { event: 'login' })
  check("the deactivated employee's open session stops working", oldCookie.status === 401, oldCookie)
  await admin.post(`/admin/accounts/${emp2Id}/active`, { isActive: true })
  const back = await new Client().post('/auth/login', { login: emp2Login, password: 'secret2' })
  check('reactivated employee can sign in again', back.status === 200, back)
  const reset = await admin.post(`/admin/accounts/${emp2Id}/password`, { password: 'newpass9' })
  const newPass = await new Client().post('/auth/login', { login: emp2Login, password: 'newpass9' })
  check('password reset works', reset.data?.ok === true && newPass.status === 200, { reset, newPass })
  const edit = await admin.patch(`/admin/accounts/${emp2Id}`, { fullName: 'Renamed Employee', position: 'Night auditor' })
  check('admin edits name and position', edit.data?.fullName === 'Renamed Employee' && edit.data?.position === 'Night auditor', edit)
  const del = await admin.del(`/admin/accounts/${emp2Id}`)
  const gone = await admin.get(`/admin/users/${emp2Id}`)
  check('admin deletes an account', del.data?.ok === true && gone.status === 404, { del, gone: gone.status })
  const delSelf = await admin.del(`/admin/accounts/${adminId}`)
  check('admin cannot delete self', delSelf.error === 'cannot_delete_self', delSelf)

  // ── Login throttling ───────────────────────────────────────────────────────
  console.log('\nLogin throttling')
  const probe = new Client()
  let throttled = null
  for (let i = 0; i < 11; i++) throttled = await probe.post('/auth/login', { login: `ghost.${suffix}`, password: 'x' })
  check('repeated failed logins are throttled', throttled?.status === 429 && throttled?.error === 'too_many_attempts', throttled)

  const logout = await emp.post('/auth/logout')
  const afterLogout = await emp.get('/auth/me')
  check('logout ends the session', logout.status === 200 && afterLogout.status === 401, afterLogout.status)
}

main()
  .catch((e) => {
    failures++
    console.error(e)
  })
  .finally(() => {
    console.log(`\n${passes} passed, ${failures} failed`)
    process.exit(failures ? 1 : 0)
  })
