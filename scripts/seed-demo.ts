// Fills the LOCAL database (./data/academy.sqlite3) with demo employees and results so the
// admin panel can be previewed. Refuses to run in production.
//
//   npx tsx scripts/seed-demo.ts
//
// Owner: owner / owner123 (created if missing). Employees: <login> / demo123.

import { db, nowIso, uuid } from '../server/db.ts'
import { hashPassword } from '../server/auth.ts'
import { isProd } from '../server/config.ts'

if (isProd) throw new Error('seed-demo is for local development only')

const MODULES = [
  'greeting-guests', 'check-in', 'check-out', 'phone-communication', 'whatsapp-communication',
  'booking-com-guests', 'walk-in-guests', 'upselling-rooms', 'late-checkout', 'early-checkin',
  'complaints', 'vip-guests', 'foreign-guests', 'lost-items', 'emergency-procedures',
]
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1']

const PEOPLE = [
  { login: 'aziza.k', name: 'Азиза Каримова', position: 'Старший администратор', modules: 15, knowledge: [72, 89], en: 'B2', ru: 'C1', writing: true, activeDaysAgo: 0 },
  { login: 'jasur.t', name: 'Жасур Тошматов', position: 'Администратор', modules: 12, knowledge: [64], en: 'B1', ru: 'B2', writing: true, activeDaysAgo: 1 },
  { login: 'malika.r', name: 'Малика Рахимова', position: 'Администратор', modules: 15, knowledge: [81], en: 'A2', ru: 'C1', writing: false, activeDaysAgo: 2 },
  { login: 'bobur.s', name: 'Бобур Саидов', position: 'Ночной администратор', modules: 6, knowledge: [47], en: 'A1', ru: 'B1', writing: true, activeDaysAgo: 16 },
  { login: 'dilnoza.u', name: 'Дилноза Усмонова', position: 'Администратор-стажёр', modules: 0, knowledge: [] as number[], en: null, ru: null, writing: false, activeDaysAgo: null },
]

function daysAgo(n: number, hour = 11): string {
  const d = new Date(Date.now() - n * 86_400_000)
  d.setHours(hour, 15, 0, 0)
  return d.toISOString()
}

function ladder(level: string) {
  const reached = LEVELS.indexOf(level)
  const out = []
  for (let i = 0; i <= Math.min(reached + 1, LEVELS.length - 1); i++) {
    const passed = i <= reached
    out.push({ level: LEVELS[i], score: passed ? 8 - (i % 2) : 4, total: 8, passed, timedOut: false })
  }
  return out
}

const insertUser = db.prepare(
  'INSERT INTO users (id, login, full_name, role, position, is_active, password_hash, created_at) VALUES (?, ?, ?, ?, ?, 1, ?, ?)',
)
const findUser = db.prepare('SELECT id FROM users WHERE login = ?')

let owner = findUser.get('owner') as { id: string } | undefined
if (!owner) {
  const id = uuid()
  insertUser.run(id, 'owner', 'Самандар (владелец)', 'admin', null, hashPassword('owner123'), nowIso())
  owner = { id }
  console.log('owner created')
}

const seed = db.transaction(() => {
  for (const p of PEOPLE) {
    if (findUser.get(p.login)) {
      console.log(`${p.login}: already exists`)
      continue
    }
    const uid = uuid()
    insertUser.run(uid, p.login, p.name, 'employee', p.position, hashPassword('demo123'), daysAgo(25))

    for (let i = 0; i < p.modules; i++) {
      db.prepare('INSERT INTO module_progress (user_id, module_slug, completed_at, check_score, check_total) VALUES (?, ?, ?, ?, 3)').run(
        uid, MODULES[i], daysAgo(20 - i), i % 4 === 0 ? 2 : 3,
      )
      db.prepare("INSERT INTO activity_log (user_id, event, meta, created_at) VALUES (?, 'lesson_view', ?, ?)").run(
        uid, JSON.stringify({ module: MODULES[i], durationSec: 240 + i * 37 }), daysAgo(20 - i),
      )
    }

    p.knowledge.forEach((pct, i) => {
      const total = 36
      const score = Math.round((pct / 100) * total)
      const answers = Array.from({ length: total }, (_, k) => ({
        id: `quiz-${MODULES[k % 15]}-${(k % 2) + 1}`, moduleSlug: MODULES[k % 15], selected: 1, correct: k < score, ms: 9000,
      }))
      db.prepare(
        `INSERT INTO test_attempts (id, user_id, kind, score, total, percent, details, started_at, finished_at, duration_sec)
         VALUES (?, ?, 'knowledge', ?, ?, ?, ?, ?, ?, ?)`,
      ).run(uuid(), uid, score, total, Math.round((score * 10000) / total) / 100, JSON.stringify({ mode: 'assessment', answers, focusLost: 0 }), daysAgo(6 - i * 3, 10), daysAgo(6 - i * 3, 11), 900 + i * 60)
    })

    for (const [kind, level] of [['english', p.en], ['russian', p.ru]] as const) {
      if (!level) continue
      const levelResults = ladder(level)
      const score = levelResults.reduce((s, r) => s + r.score, 0)
      const total = levelResults.length * 8
      const lang = kind === 'english' ? 'en' : 'ru'
      const writing =
        p.writing && LEVELS.indexOf(level) >= 1
          ? {
              promptId: `${lang}-writing-a2-01`,
              text:
                lang === 'en'
                  ? 'Dear Mr. Smith, thank you for your message. Unfortunately our check-in time is 14:00, but we can keep your luggage and you can have breakfast while we prepare your room. We will call you as soon as it is ready. Best regards, Reception.'
                  : 'Уважаемая госпожа Иванова, благодарим за сообщение. К сожалению, заезд у нас с 14:00, но мы с удовольствием сохраним ваш багаж и сообщим, как только номер будет готов. С уважением, ресепшен.',
              wordCount: 42,
              durationSec: 410,
              pasteAttempts: 0,
            }
          : null
      const details = {
        mode: 'placement', language: lang, levelResults,
        perLevelScores: Object.fromEntries(levelResults.map((r) => [r.level, r.score])),
        timedOut: false, focusLost: p.login === 'bobur.s' ? 4 : 0, medianMs: p.login === 'bobur.s' ? 3100 : 11000,
        writingSkipped: !writing, answers: [],
      }
      db.prepare(
        `INSERT INTO test_attempts (id, user_id, kind, score, total, percent, level, details, writing, started_at, finished_at, duration_sec)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1300)`,
      ).run(uuid(), uid, kind, score, total, Math.round((score * 10000) / total) / 100, level, JSON.stringify(details), writing ? JSON.stringify(writing) : null, daysAgo(4, 15), daysAgo(4, 16))
    }

    if (p.activeDaysAgo !== null) {
      db.prepare("INSERT INTO activity_log (user_id, event, meta, created_at) VALUES (?, 'login', '{}', ?)").run(uid, daysAgo(p.activeDaysAgo, 9))
    }
    console.log(`${p.login}: seeded`)
  }
})
seed()
console.log('\nDemo ready. Owner: owner / owner123   Employees: <login> / demo123')
