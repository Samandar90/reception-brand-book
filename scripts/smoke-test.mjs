// End-to-end backend smoke test against a Supabase project with the academy migration applied.
//
//   SUPABASE_URL=http://127.0.0.1:55321 SUPABASE_ANON_KEY=... ADMIN_BOOTSTRAP_KEY=... node scripts/smoke-test.mjs
//
// Creates an admin (bootstrap, only if none exists yet — otherwise pass ADMIN_LOGIN/ADMIN_PASSWORD),
// two employees, and walks through accounts, RLS, retake grants, the live final test and grading.
// Intended for a local stack (`npx supabase start`); it leaves test data behind.

import { createClient } from '@supabase/supabase-js'

const URL = process.env.SUPABASE_URL ?? 'http://127.0.0.1:55321'
const ANON = process.env.SUPABASE_ANON_KEY
const BOOTSTRAP_KEY = process.env.ADMIN_BOOTSTRAP_KEY ?? 'local-bootstrap-key-change-me'
const ADMIN_LOGIN = process.env.ADMIN_LOGIN ?? 'owner'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'owner123'
if (!ANON) {
  console.error('SUPABASE_ANON_KEY is required')
  process.exit(2)
}

const suffix = Date.now().toString(36).slice(-5)
let failures = 0
let passes = 0

function check(name, cond, extra) {
  if (cond) {
    passes++
    console.log(`  ✓ ${name}`)
  } else {
    failures++
    console.log(`  ✗ ${name}`, extra === undefined ? '' : JSON.stringify(extra))
  }
}

function client() {
  return createClient(URL, ANON, { auth: { persistSession: false, autoRefreshToken: false } })
}

async function signIn(login, password) {
  const c = client()
  const { error } = await c.auth.signInWithPassword({ email: `${login}@academy.local`, password })
  return { c, error }
}

async function adminUsers(c, body) {
  const { data, error } = await c.functions.invoke('admin-users', { body })
  if (error) {
    let payload = null
    try {
      payload = await error.context.json()
    } catch {
      /* ignore */
    }
    return { error: payload?.error ?? error.message }
  }
  return data
}

async function main() {
  console.log(`Smoke test against ${URL}`)

  // ── Accounts ────────────────────────────────────────────────────────────────
  console.log('\nAccounts')
  const boot = await adminUsers(client(), {
    action: 'bootstrap',
    key: BOOTSTRAP_KEY,
    login: ADMIN_LOGIN,
    password: ADMIN_PASSWORD,
    full_name: 'Owner',
  })
  check('bootstrap creates an admin or reports one exists', boot.profile?.role === 'admin' || boot.error === 'admin_exists', boot)
  const boot2 = await adminUsers(client(), {
    action: 'bootstrap',
    key: BOOTSTRAP_KEY,
    login: `other${suffix}`,
    password: 'whatever1',
    full_name: 'X',
  })
  check('second bootstrap is refused', boot2.error === 'admin_exists', boot2)
  const badKey = await adminUsers(client(), { action: 'bootstrap', key: 'nope', login: 'zzz', password: 'zzzzzz', full_name: 'Z' })
  check('bootstrap with wrong key is forbidden', badKey.error === 'forbidden', badKey)

  const { c: admin, error: adminErr } = await signIn(ADMIN_LOGIN, ADMIN_PASSWORD)
  check('admin can sign in', !adminErr, adminErr?.message)
  if (adminErr) return

  const empLogin = `emp.${suffix}`
  const emp2Login = `emp2.${suffix}`
  const created = await adminUsers(admin, { action: 'create', login: empLogin, password: 'secret1', full_name: 'Test Employee', position: 'Receptionist' })
  check('admin creates employee', created.profile?.login === empLogin && created.profile?.role === 'employee', created)
  const created2 = await adminUsers(admin, { action: 'create', login: emp2Login, password: 'secret2', full_name: 'Second Employee' })
  check('admin creates second employee', created2.profile?.role === 'employee', created2)
  const dup = await adminUsers(admin, { action: 'create', login: empLogin, password: 'secret1', full_name: 'Dup' })
  check('duplicate login rejected', dup.error === 'login_taken', dup)
  const badLogin = await adminUsers(admin, { action: 'create', login: 'A B', password: 'secret1', full_name: 'Bad' })
  check('invalid login rejected', badLogin.error === 'invalid_login', badLogin)
  const empId = created.profile?.id
  const emp2Id = created2.profile?.id

  const { c: emp, error: empErr } = await signIn(empLogin, 'secret1')
  check('employee can sign in', !empErr, empErr?.message)
  const { c: emp2 } = await signIn(emp2Login, 'secret2')

  const notAdmin = await adminUsers(emp, { action: 'create', login: `hack${suffix}`, password: 'secret1', full_name: 'Hacker' })
  check('employee cannot create accounts', notAdmin.error === 'forbidden', notAdmin)

  // ── RLS ────────────────────────────────────────────────────────────────────
  console.log('\nRow level security')
  const { data: profilesSeen } = await emp.from('profiles').select('id')
  check('employee sees only own profile', profilesSeen?.length === 1 && profilesSeen[0].id === empId, profilesSeen)
  const { error: roleEsc } = await emp.from('profiles').update({ role: 'admin' }).eq('id', empId).select()
  const { data: stillEmp } = await admin.from('profiles').select('role').eq('id', empId).single()
  check('employee cannot promote self', stillEmp?.role === 'employee', { roleEsc, stillEmp })

  const { error: progErr } = await emp.from('module_progress').insert({ user_id: empId, module_slug: 'check-in', check_score: 3, check_total: 3 })
  check('employee records module progress', !progErr, progErr)
  const { error: foreignProg } = await emp.from('module_progress').insert({ user_id: emp2Id, module_slug: 'check-in' })
  check('employee cannot write progress for someone else', !!foreignProg)

  const now = new Date().toISOString()
  const { data: know, error: knowErr } = await emp
    .from('test_attempts')
    .insert({ user_id: empId, kind: 'knowledge', score: 30, total: 36, details: { mode: 'assessment', answers: [{ id: 'q1', correct: true }] }, started_at: now, finished_at: now })
    .select('percent')
    .single()
  check('employee records knowledge attempt with server-computed percent', !knowErr && Number(know?.percent) === 83.33, { knowErr, know })
  const { error: preGraded } = await emp
    .from('test_attempts')
    .insert({ user_id: empId, kind: 'english', score: 5, total: 8, writing_score: 5, started_at: now, finished_at: now })
  check('employee cannot insert a pre-graded attempt', !!preGraded)
  const { error: fakeFinal } = await emp.from('test_attempts').insert({ user_id: empId, kind: 'final', score: 10, total: 10, started_at: now, finished_at: now })
  check('employee cannot insert a final attempt', !!fakeFinal)
  const { data: emp2Attempts } = await emp2.from('test_attempts').select('id')
  check("employees cannot read each other's attempts", emp2Attempts?.length === 0, emp2Attempts)

  // ── Language retake grants ─────────────────────────────────────────────────
  console.log('\nLanguage tests & retake grants')
  const eng = { user_id: empId, kind: 'english', score: 14, total: 16, level: 'A2', details: { mode: 'placement' }, writing: { promptId: 'en-writing-a2-01', text: 'Hello', wordCount: 1, durationSec: 30 }, started_at: now, finished_at: now }
  const { data: eng1, error: eng1Err } = await emp.from('test_attempts').insert(eng).select('id').single()
  check('first english attempt is free', !eng1Err, eng1Err)
  const { error: eng2Err } = await emp.from('test_attempts').insert(eng)
  check('second english attempt needs a grant', !!eng2Err && /retake_not_allowed/.test(eng2Err.message), eng2Err?.message)
  const { data: grant, error: grantErr } = await admin.from('test_grants').insert({ user_id: empId, kind: 'english', granted_by: boot.profile?.id ?? (await admin.auth.getUser()).data.user.id }).select('id').single()
  check('admin grants a retake', !grantErr, grantErr)
  const { error: selfGrant } = await emp.from('test_grants').insert({ user_id: empId, kind: 'english', granted_by: empId })
  check('employee cannot grant self a retake', !!selfGrant)
  const { data: eng3, error: eng3Err } = await emp.from('test_attempts').insert(eng).select('id').single()
  check('retake allowed with grant', !eng3Err, eng3Err)
  const { data: usedGrant } = await admin.from('test_grants').select('used_by_attempt_id').eq('id', grant?.id).single()
  check('grant is consumed by the retake', usedGrant?.used_by_attempt_id === eng3?.id, usedGrant)
  const { error: eng4Err } = await emp.from('test_attempts').insert(eng)
  check('grant cannot be reused', !!eng4Err)

  const { data: graded, error: gradeErr } = await admin
    .from('test_attempts')
    .update({ writing_score: 4, writing_comment: 'Good', writing_rubric: { task: 1, tone: 1, grammar: 0.5, vocabulary: 0.5 } })
    .eq('id', eng1?.id)
    .select('writing_score, graded_by, graded_at')
    .single()
  check('admin grades writing (graded_by stamped)', !gradeErr && graded?.writing_score === 4 && !!graded?.graded_by && !!graded?.graded_at, { gradeErr, graded })
  const { data: empGrade } = await emp.from('test_attempts').update({ writing_score: 5 }).eq('id', eng1?.id).select()
  check('employee cannot grade own writing', !empGrade || empGrade.length === 0, empGrade)

  // ── Live final test ────────────────────────────────────────────────────────
  console.log('\nLive final test')
  // clean up any unfinished session left by an earlier run
  const { data: live } = await admin.from('final_sessions').select('id').in('status', ['lobby', 'question', 'reveal'])
  for (const s of live ?? []) await admin.rpc('cancel_final_session', { p_session_id: s.id })

  const adminUid = (await admin.auth.getUser()).data.user.id
  const qids = ['final-mc-01', 'final-mc-02', 'final-open-01']
  const { data: session, error: sessErr } = await admin
    .from('final_sessions')
    .insert({ title: `Smoke ${suffix}`, question_ids: qids, settings: { choiceSeconds: 30, openSeconds: 120 }, created_by: adminUid })
    .select('*')
    .single()
  check('admin creates session', !sessErr, sessErr)
  const { error: second } = await admin.from('final_sessions').insert({ title: 'dup', question_ids: qids, created_by: adminUid })
  check('only one live session at a time', !!second)
  const { error: empSess } = await emp.from('final_sessions').insert({ title: 'x', question_ids: qids, created_by: empId })
  check('employee cannot create sessions', !!empSess)

  const sid = session.id
  const { error: joinErr } = await emp.rpc('join_final_session', { p_session_id: sid })
  const { error: join2Err } = await emp.rpc('join_final_session', { p_session_id: sid })
  const { error: joinB } = await emp2.rpc('join_final_session', { p_session_id: sid })
  check('employees join (idempotent)', !joinErr && !join2Err && !joinB, { joinErr, join2Err, joinB })

  const { error: early } = await emp.rpc('submit_final_answer', { p_session_id: sid, p_question_id: 'final-mc-01', p_answer_index: 1 })
  check('answers rejected in lobby', !!early && /not_accepting/.test(early.message), early?.message)

  const q1 = { id: 'final-mc-01', type: 'choice', scenario: { ru: 's', uz: 's', en: 's' }, question: { ru: 'q', uz: 'q', en: 'q' }, options: [{ ru: 'a', uz: 'a', en: 'a' }, { ru: 'b', uz: 'b', en: 'b' }, { ru: 'c', uz: 'c', en: 'c' }, { ru: 'd', uz: 'd', en: 'd' }] }
  const { error: empOpen } = await emp.rpc('open_final_question', { p_session_id: sid, p_expected_index: -1, p_question: q1, p_correct_index: 2 })
  check('employee cannot drive the session', !!empOpen)
  const { data: opened, error: openErr } = await admin.rpc('open_final_question', { p_session_id: sid, p_expected_index: -1, p_question: q1, p_correct_index: 2 })
  check('admin opens question 1', !openErr && opened?.status === 'question' && opened?.current_index === 0 && !!opened?.question_deadline_at, { openErr, opened })
  check('phone payload has no answer key', opened && !('correctIndex' in (opened.current_question ?? {})), opened?.current_question)
  const { data: stale } = await admin.rpc('open_final_question', { p_session_id: sid, p_expected_index: -1, p_question: q1, p_correct_index: 2 })
  check('stale "next" click is a no-op', stale?.current_index === 0, stale)
  const { data: keysForEmp } = await emp.from('final_question_keys').select('*')
  check('employees cannot read answer keys', (keysForEmp ?? []).length === 0, keysForEmp)

  const { data: a1, error: a1Err } = await emp.rpc('submit_final_answer', { p_session_id: sid, p_question_id: 'final-mc-01', p_answer_index: 2 })
  check('correct answer scored on server with speed bonus', !a1Err && a1?.is_correct === true && a1?.points === 120, { a1Err, a1 })
  const { data: a1dup } = await emp.rpc('submit_final_answer', { p_session_id: sid, p_question_id: 'final-mc-01', p_answer_index: 0 })
  check('double tap returns the first answer', a1dup?.answer_index === 2 && a1dup?.points === 120, a1dup)
  const { data: b1 } = await emp2.rpc('submit_final_answer', { p_session_id: sid, p_question_id: 'final-mc-01', p_answer_index: 0 })
  check('wrong answer scores 0', b1?.is_correct === false && b1?.points === 0, b1)
  const { error: wrongQ } = await emp.rpc('submit_final_answer', { p_session_id: sid, p_question_id: 'final-mc-02', p_answer_index: 0 })
  check('answer to a non-current question rejected', !!wrongQ && /not_current_question/.test(wrongQ.message), wrongQ?.message)
  const { data: otherAnswers } = await emp.from('final_answers').select('user_id').eq('session_id', sid)
  check("employee sees only own answers", (otherAnswers ?? []).every((r) => r.user_id === empId), otherAnswers)

  const { data: rev } = await admin.rpc('reveal_final_question', { p_session_id: sid, p_expected_index: 0, p_explanation: { ru: 'e', uz: 'e', en: 'e' } })
  check('reveal publishes key and distribution', rev?.status === 'reveal' && rev?.reveal?.correctIndex === 2 && rev?.reveal?.answered === 2 && rev?.reveal?.distribution?.[2] === 1, rev?.reveal)

  const q3 = { id: 'final-open-01', type: 'open', scenario: { ru: 's', uz: 's', en: 's' }, question: { ru: 'q', uz: 'q', en: 'q' } }
  const { error: mismatch } = await admin.rpc('open_final_question', { p_session_id: sid, p_expected_index: 0, p_question: q3, p_correct_index: null })
  check('opening the wrong question id is rejected', !!mismatch && /question_mismatch/.test(mismatch.message), mismatch?.message)
  const q2 = { ...q1, id: 'final-mc-02' }
  await admin.rpc('open_final_question', { p_session_id: sid, p_expected_index: 0, p_question: q2, p_correct_index: 1 })
  await emp.rpc('submit_final_answer', { p_session_id: sid, p_question_id: 'final-mc-02', p_answer_index: 1 })
  await admin.rpc('reveal_final_question', { p_session_id: sid, p_expected_index: 1, p_explanation: null })
  const { data: o3 } = await admin.rpc('open_final_question', { p_session_id: sid, p_expected_index: 1, p_question: q3, p_correct_index: null })
  check('open question opened', o3?.current_index === 2 && o3?.current_question?.type === 'open', o3)
  const { data: t1, error: t1Err } = await emp.rpc('submit_final_answer', { p_session_id: sid, p_question_id: 'final-open-01', p_answer_text: 'I would apologise and offer a solution.' })
  check('open answer stored', !t1Err && t1?.answer_text?.startsWith('I would'), { t1Err, t1 })

  const { error: finErr } = await admin.rpc('finish_final_session', { p_session_id: sid })
  const { error: fin2Err } = await admin.rpc('finish_final_session', { p_session_id: sid })
  check('finish is idempotent', !finErr && !fin2Err, { finErr, fin2Err })
  const { data: finals } = await admin.from('test_attempts').select('user_id, score, total, percent, details').eq('session_id', sid).order('score', { ascending: false })
  const e1 = finals?.find((f) => f.user_id === empId)
  const e2 = finals?.find((f) => f.user_id === emp2Id)
  check('one final attempt per participant', finals?.length === 2, finals?.length)
  check('employee 1: 2/2 choice correct, open pending', e1?.score === 2 && e1?.total === 2 && Number(e1?.percent) === 100 && e1?.details?.gradingStatus === 'pending', e1)
  check('employee 2: 0/2 with missing answer counted as wrong', e2?.score === 0 && e2?.total === 2 && e2?.details?.incomplete === true, e2)
  check('ranking stored', e1?.details?.rank === 1, e1?.details)

  const { error: gradeOpenErr } = await admin.from('final_answers').update({ open_score: 3 }).match({ session_id: sid, user_id: empId, question_id: 'final-open-01' })
  const { data: e1After } = await admin.from('test_attempts').select('percent, details').eq('session_id', sid).eq('user_id', empId).single()
  check('grading open answer blends result (70% MC + 30% open)', !gradeOpenErr && Number(e1After?.percent) === 88 && e1After?.details?.gradingStatus === 'graded', { gradeOpenErr, e1After })
  const { error: lateAns } = await emp.rpc('submit_final_answer', { p_session_id: sid, p_question_id: 'final-open-01', p_answer_text: 'late' })
  check('no answers after finish (returns stored one)', !lateAns)

  // ── Overview ───────────────────────────────────────────────────────────────
  console.log('\nOverview')
  const { data: ov } = await admin.from('employee_overview').select('*').eq('id', empId).single()
  check('overview aggregates employee results', ov?.modules_completed === 1 && Number(ov?.knowledge_best) === 83.33 && ov?.english_level === 'A2' && ov?.english_attempts === 2 && Number(ov?.final_percent) === 88, ov)
  const { data: ovEmp } = await emp.from('employee_overview').select('id')
  check('employee sees only own overview row', ovEmp?.length === 1, ovEmp)
  const { data: stats, error: statsErr } = await admin.from('question_stats').select('*')
  check('question stats view works', !statsErr && (stats ?? []).length > 0, statsErr)

  // ── Deactivation ───────────────────────────────────────────────────────────
  console.log('\nDeactivation')
  const self = await adminUsers(admin, { action: 'set_active', user_id: adminUid, is_active: false })
  check('admin cannot deactivate self', self.error === 'cannot_change_self', self)
  const off = await adminUsers(admin, { action: 'set_active', user_id: emp2Id, is_active: false })
  check('admin deactivates employee', off.ok === true, off)
  const { error: bannedErr } = await signIn(emp2Login, 'secret2')
  check('deactivated employee cannot sign in', !!bannedErr, bannedErr?.message)
  const { error: oldTokenWrite } = await emp2.from('activity_log').insert({ user_id: emp2Id, event: 'login' })
  check('existing token of deactivated employee cannot write', !!oldTokenWrite)
  const on = await adminUsers(admin, { action: 'set_active', user_id: emp2Id, is_active: true })
  const { error: backErr } = await signIn(emp2Login, 'secret2')
  check('reactivated employee can sign in again', on.ok === true && !backErr, { on, backErr: backErr?.message })
  const reset = await adminUsers(admin, { action: 'reset_password', user_id: emp2Id, password: 'newpass9' })
  const { error: newPassErr } = await signIn(emp2Login, 'newpass9')
  check('password reset works', reset.ok === true && !newPassErr, { reset, newPassErr: newPassErr?.message })
  const del = await adminUsers(admin, { action: 'delete', user_id: emp2Id })
  const { data: gone } = await admin.from('profiles').select('id').eq('id', emp2Id)
  check('admin deletes an account (cascade)', del.ok === true && gone?.length === 0, { del, gone })
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
