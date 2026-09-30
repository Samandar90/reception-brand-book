// Fills a LOCAL Supabase stack with demo employees and results so the admin panel can be previewed.
//
//   SUPABASE_URL=http://127.0.0.1:55321 SUPABASE_ANON_KEY=... node scripts/seed-demo.mjs
//
// Uses the owner account (ADMIN_LOGIN / ADMIN_PASSWORD, default owner / owner123; created via bootstrap if missing).
// Never run it against the production project.

import { createClient } from '@supabase/supabase-js'

const URL = process.env.SUPABASE_URL ?? 'http://127.0.0.1:55321'
const ANON = process.env.SUPABASE_ANON_KEY
const BOOTSTRAP_KEY = process.env.ADMIN_BOOTSTRAP_KEY ?? 'local-bootstrap-key-change-me'
const ADMIN_LOGIN = process.env.ADMIN_LOGIN ?? 'owner'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'owner123'
if (!ANON) throw new Error('SUPABASE_ANON_KEY is required')
if (!/127\.0\.0\.1|localhost/.test(URL)) throw new Error('seed-demo is for a local stack only')

const MODULES = [
  'greeting-guests', 'check-in', 'check-out', 'phone-communication', 'whatsapp-communication',
  'booking-com-guests', 'walk-in-guests', 'upselling-rooms', 'late-checkout', 'early-checkin',
  'complaints', 'vip-guests', 'foreign-guests', 'lost-items', 'emergency-procedures',
]

const PEOPLE = [
  { login: 'aziza.k', name: 'Азиза Каримова', position: 'Старший администратор', modules: 15, knowledge: [72, 89], en: 'B2', ru: 'C1', writing: true, activeDaysAgo: 0 },
  { login: 'jasur.t', name: 'Жасур Тошматов', position: 'Администратор', modules: 12, knowledge: [64], en: 'B1', ru: 'B2', writing: true, activeDaysAgo: 1 },
  { login: 'malika.r', name: 'Малика Рахимова', position: 'Администратор', modules: 15, knowledge: [81], en: 'A2', ru: 'C1', writing: false, activeDaysAgo: 2 },
  { login: 'bobur.s', name: 'Бобур Саидов', position: 'Ночной администратор', modules: 6, knowledge: [47], en: 'A1', ru: 'B1', writing: true, activeDaysAgo: 16 },
  { login: 'dilnoza.u', name: 'Дилноза Усмонова', position: 'Администратор-стажёр', modules: 0, knowledge: [], en: null, ru: null, writing: false, activeDaysAgo: null },
]

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1']
const client = () => createClient(URL, ANON, { auth: { persistSession: false, autoRefreshToken: false } })

async function invoke(c, body) {
  const { data, error } = await c.functions.invoke('admin-users', { body })
  if (error) {
    const payload = await error.context?.json?.().catch(() => null)
    return { error: payload?.error ?? error.message }
  }
  return data
}

function daysAgo(n, hour = 11) {
  const d = new Date(Date.now() - n * 86400000)
  d.setHours(hour, 15, 0, 0)
  return d.toISOString()
}

function ladder(level) {
  const reached = LEVELS.indexOf(level)
  const results = []
  for (let i = 0; i <= Math.min(reached + 1, LEVELS.length - 1); i++) {
    const passed = i <= reached
    results.push({ level: LEVELS[i], score: passed ? 8 - (i % 2) : 4, total: 8, passed, timedOut: false })
  }
  return results
}

async function main() {
  await invoke(client(), { action: 'bootstrap', key: BOOTSTRAP_KEY, login: ADMIN_LOGIN, password: ADMIN_PASSWORD, full_name: 'Самандар (владелец)' })
  const admin = client()
  const { error: signErr } = await admin.auth.signInWithPassword({ email: `${ADMIN_LOGIN}@academy.local`, password: ADMIN_PASSWORD })
  if (signErr) throw signErr

  for (const p of PEOPLE) {
    const res = await invoke(admin, { action: 'create', login: p.login, password: 'demo123', full_name: p.name, position: p.position })
    if (res.error && res.error !== 'login_taken') throw new Error(`${p.login}: ${res.error}`)
    const emp = client()
    const { data: auth, error } = await emp.auth.signInWithPassword({ email: `${p.login}@academy.local`, password: 'demo123' })
    if (error) throw error
    const uid = auth.user.id

    const { count } = await emp.from('test_attempts').select('id', { count: 'exact', head: true })
    if ((count ?? 0) > 0) {
      console.log(`${p.login}: already seeded`)
      continue
    }

    for (let i = 0; i < p.modules; i++) {
      await emp.from('module_progress').insert({
        user_id: uid, module_slug: MODULES[i], completed_at: daysAgo(20 - i), check_score: i % 4 === 0 ? 2 : 3, check_total: 3,
      })
      await emp.from('activity_log').insert({ user_id: uid, event: 'lesson_view', meta: { module: MODULES[i], durationSec: 240 + i * 37 }, created_at: daysAgo(20 - i) })
    }

    for (const [i, pct] of p.knowledge.entries()) {
      const total = 36
      const score = Math.round((pct / 100) * total)
      const answers = Array.from({ length: total }, (_, k) => ({ id: `quiz-${MODULES[k % 15]}-${(k % 2) + 1}`, moduleSlug: MODULES[k % 15], selected: 1, correct: k < score, ms: 9000 }))
      await emp.from('test_attempts').insert({
        user_id: uid, kind: 'knowledge', score, total, details: { mode: 'assessment', answers, focusLost: 0 },
        started_at: daysAgo(6 - i * 3, 10), finished_at: daysAgo(6 - i * 3, 11), duration_sec: 900 + i * 60,
      })
    }

    for (const [kind, level] of [['english', p.en], ['russian', p.ru]]) {
      if (!level) continue
      const levelResults = ladder(level)
      const score = levelResults.reduce((s, r) => s + r.score, 0)
      const total = levelResults.length * 8
      const lang = kind === 'english' ? 'en' : 'ru'
      const writing = p.writing && LEVELS.indexOf(level) >= 1
        ? {
            promptId: `${lang}-writing-a2-01`,
            text: lang === 'en'
              ? 'Dear Mr. Smith, thank you for your message. Unfortunately our check-in time is 14:00, but we can keep your luggage and you can have breakfast while we prepare your room. We will call you as soon as it is ready. Best regards, Reception.'
              : 'Уважаемая госпожа Иванова, благодарим за сообщение. К сожалению, заезд у нас с 14:00, но мы с удовольствием сохраним ваш багаж и сообщим, как только номер будет готов. С уважением, ресепшен.',
            wordCount: 42, durationSec: 410, pasteAttempts: 0,
          }
        : null
      await emp.from('test_attempts').insert({
        user_id: uid, kind, score, total, level,
        details: {
          mode: 'placement', language: lang, levelResults,
          perLevelScores: Object.fromEntries(levelResults.map((r) => [r.level, r.score])),
          timedOut: false, focusLost: p.login === 'bobur.s' ? 4 : 0, medianMs: p.login === 'bobur.s' ? 3100 : 11000,
          writingSkipped: !writing, answers: [],
        },
        writing,
        started_at: daysAgo(4, 15), finished_at: daysAgo(4, 16), duration_sec: 1300,
      })
    }

    if (p.activeDaysAgo !== null) {
      await emp.from('activity_log').insert({ user_id: uid, event: 'login', meta: {}, created_at: daysAgo(p.activeDaysAgo, 9) })
    }
    console.log(`${p.login}: seeded`)
  }
  console.log('\nDemo ready. Owner:', ADMIN_LOGIN, '/', ADMIN_PASSWORD, ' Employees: <login> / demo123')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
