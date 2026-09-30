import { supabase } from '@/lib/supabase'
import type {
  ActivityEvent,
  ActivityRow,
  ModuleProgressRow,
  NewAttemptInput,
  Profile,
  TestAttempt,
  TestGrant,
  TestKind,
  WritingRubricScores,
  WritingSubmission,
} from '@/types'

// ─── Row shapes (mirror supabase/migrations) ─────────────────────────────────

export interface ProfileRow {
  id: string
  login: string
  full_name: string
  role: 'admin' | 'employee'
  position: string | null
  is_active: boolean
  created_at: string
}

export interface TestAttemptRow {
  id: string
  user_id: string
  kind: TestKind
  score: number
  total: number
  percent: number | string
  level: string | null
  details: Record<string, unknown> | null
  writing: WritingSubmission | null
  writing_score: number | null
  writing_comment: string | null
  writing_rubric: WritingRubricScores | null
  session_id: string | null
  started_at: string
  finished_at: string
  duration_sec: number | null
}

export const PROFILE_COLUMNS = 'id, login, full_name, role, position, is_active, created_at'
export const ATTEMPT_COLUMNS =
  'id, user_id, kind, score, total, percent, level, details, writing, writing_score, writing_comment, writing_rubric, session_id, started_at, finished_at, duration_sec'

export function mapProfile(row: ProfileRow): Profile {
  return {
    id: row.id,
    login: row.login,
    fullName: row.full_name,
    role: row.role,
    position: row.position,
    isActive: row.is_active,
    createdAt: row.created_at,
  }
}

export function mapAttempt(row: TestAttemptRow): TestAttempt {
  return {
    id: row.id,
    userId: row.user_id,
    kind: row.kind,
    score: row.score,
    total: row.total,
    percent: Number(row.percent),
    level: row.level,
    details: row.details ?? {},
    writing: row.writing,
    writingScore: row.writing_score,
    writingComment: row.writing_comment,
    writingRubric: row.writing_rubric ?? null,
    sessionId: row.session_id,
    startedAt: row.started_at,
    finishedAt: row.finished_at,
    durationSec: row.duration_sec,
  }
}

// ─── Current user ────────────────────────────────────────────────────────────

export async function fetchMyProfile(): Promise<Profile | null> {
  const { data: userData } = await supabase.auth.getUser()
  const uid = userData.user?.id
  if (!uid) return null
  const { data, error } = await supabase.from('profiles').select(PROFILE_COLUMNS).eq('id', uid).maybeSingle()
  if (error) throw error
  return data ? mapProfile(data as ProfileRow) : null
}

// ─── Progress ────────────────────────────────────────────────────────────────

export async function fetchCompletedModules(userId: string): Promise<string[]> {
  const { data, error } = await supabase
    .from('module_progress')
    .select('module_slug')
    .eq('user_id', userId)
    .order('completed_at', { ascending: true })
  if (error) throw error
  return (data as { module_slug: string }[]).map((r) => r.module_slug)
}

export interface ModuleProgressDbRow {
  module_slug: string
  completed_at: string
  check_score: number | null
  check_total: number | null
}

export function mapModuleProgress(row: ModuleProgressDbRow): ModuleProgressRow {
  return { moduleSlug: row.module_slug, completedAt: row.completed_at, checkScore: row.check_score, checkTotal: row.check_total }
}

export async function fetchModuleProgress(userId: string): Promise<ModuleProgressRow[]> {
  const { data, error } = await supabase
    .from('module_progress')
    .select('module_slug, completed_at, check_score, check_total')
    .eq('user_id', userId)
    .order('completed_at', { ascending: true })
  if (error) throw error
  return (data as ModuleProgressDbRow[]).map(mapModuleProgress)
}

/** Marks a module complete (with the "check yourself" result when it was passed through the mini-quiz). */
export async function insertModuleProgress(
  userId: string,
  slug: string,
  check?: { score: number; total: number },
): Promise<void> {
  const { error } = await supabase.from('module_progress').upsert(
    {
      user_id: userId,
      module_slug: slug,
      completed_at: new Date().toISOString(),
      check_score: check?.score ?? null,
      check_total: check?.total ?? null,
    },
    { onConflict: 'user_id,module_slug' },
  )
  if (error) throw error
}

export async function deleteModuleProgress(userId: string, slug?: string): Promise<void> {
  let query = supabase.from('module_progress').delete().eq('user_id', userId)
  if (slug) query = query.eq('module_slug', slug)
  const { error } = await query
  if (error) throw error
}

// ─── Test attempts ───────────────────────────────────────────────────────────

export async function fetchAttempts(userId: string): Promise<TestAttempt[]> {
  const { data, error } = await supabase
    .from('test_attempts')
    .select(ATTEMPT_COLUMNS)
    .eq('user_id', userId)
    .order('finished_at', { ascending: false })
  if (error) throw error
  return (data as TestAttemptRow[]).map(mapAttempt)
}

export async function insertAttempt(userId: string, input: NewAttemptInput): Promise<TestAttempt> {
  const finishedAt = new Date().toISOString()
  const { data, error } = await supabase
    .from('test_attempts')
    .insert({
      user_id: userId,
      kind: input.kind,
      score: input.score,
      total: input.total,
      level: input.level ?? null,
      details: input.details ?? {},
      writing: input.writing ?? null,
      started_at: input.startedAt,
      finished_at: finishedAt,
      duration_sec:
        input.durationSec ?? Math.max(0, Math.round((Date.parse(finishedAt) - Date.parse(input.startedAt)) / 1000)),
    })
    .select(ATTEMPT_COLUMNS)
    .single()
  if (error) throw error
  return mapAttempt(data as TestAttemptRow)
}

// ─── Retake grants ───────────────────────────────────────────────────────────

export interface GrantDbRow {
  id: string
  user_id: string
  kind: 'english' | 'russian'
  granted_by: string | null
  created_at: string
  expires_at: string
  used_by_attempt_id: string | null
  used_at: string | null
}

export function mapGrant(row: GrantDbRow): TestGrant {
  return {
    id: row.id,
    userId: row.user_id,
    kind: row.kind,
    grantedBy: row.granted_by,
    createdAt: row.created_at,
    expiresAt: row.expires_at,
    usedByAttemptId: row.used_by_attempt_id,
    usedAt: row.used_at,
  }
}

/** Unused, unexpired retake grants of a user. */
export async function fetchOpenGrants(userId: string): Promise<TestGrant[]> {
  const { data, error } = await supabase
    .from('test_grants')
    .select('*')
    .eq('user_id', userId)
    .is('used_by_attempt_id', null)
    .gt('expires_at', new Date().toISOString())
    .order('created_at', { ascending: true })
  if (error) throw error
  return (data as GrantDbRow[]).map(mapGrant)
}

// ─── Activity ────────────────────────────────────────────────────────────────

export function logActivity(userId: string, event: ActivityEvent, meta: Record<string, unknown> = {}): void {
  void supabase
    .from('activity_log')
    .insert({ user_id: userId, event, meta })
    .then(({ error }) => {
      if (error) console.warn('activity_log insert failed', error.message)
    })
}

// Access token cached synchronously so unload-time logging does not need an await
// (getSession() takes a lock, and the page may be gone before it resolves).
let cachedAccessToken: string | null = null
void supabase.auth.getSession().then(({ data }) => {
  cachedAccessToken = data.session?.access_token ?? null
})
supabase.auth.onAuthStateChange((_event, session) => {
  cachedAccessToken = session?.access_token ?? null
})

/**
 * Same as logActivity but survives page unload (pagehide): the keepalive request is started
 * synchronously with the cached token. Used to record how long a lesson was open.
 */
export function logActivityKeepalive(userId: string, event: ActivityEvent, meta: Record<string, unknown> = {}): void {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
  if (!url || !key) return
  if (!cachedAccessToken) {
    logActivity(userId, event, meta)
    return
  }
  try {
    void fetch(`${url}/rest/v1/activity_log`, {
      method: 'POST',
      keepalive: true,
      headers: {
        apikey: key,
        Authorization: `Bearer ${cachedAccessToken}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ user_id: userId, event, meta }),
    }).catch(() => undefined)
  } catch {
    // best effort
  }
}

export interface ActivityDbRow {
  id: number
  event: ActivityEvent
  meta: Record<string, unknown> | null
  created_at: string
}

export function mapActivity(row: ActivityDbRow): ActivityRow {
  return { id: row.id, event: row.event, meta: row.meta ?? {}, createdAt: row.created_at }
}

/** Browser/device fingerprint stored with test attempts as an honesty signal for the admin. */
export function clientSignals(): Record<string, unknown> {
  const nav = typeof navigator === 'undefined' ? null : navigator
  const html = typeof document === 'undefined' ? null : document.documentElement
  return {
    userAgent: nav?.userAgent ?? null,
    touch: nav ? nav.maxTouchPoints > 0 : null,
    screen: typeof screen === 'undefined' ? null : `${screen.width}x${screen.height}`,
    translatedDom: html ? html.classList.contains('translated-ltr') || html.classList.contains('translated-rtl') : null,
  }
}

// ─── Errors ──────────────────────────────────────────────────────────────────

export function errorMessage(e: unknown): string {
  if (e && typeof e === 'object' && 'message' in e && typeof (e as { message: unknown }).message === 'string') {
    return (e as { message: string }).message
  }
  return String(e)
}
