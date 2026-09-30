import { supabase } from '@/lib/supabase'
import {
  ATTEMPT_COLUMNS,
  PROFILE_COLUMNS,
  mapActivity,
  mapAttempt,
  mapGrant,
  mapModuleProgress,
  mapProfile,
  type ActivityDbRow,
  type GrantDbRow,
  type ModuleProgressDbRow,
  type ProfileRow,
  type TestAttemptRow,
} from '@/lib/api'
import type { ActivityRow, EmployeeOverview, ModuleProgressRow, Profile, TestAttempt, TestGrant, UserRole } from '@/types'

// ─── Overview ────────────────────────────────────────────────────────────────

interface OverviewRow {
  id: string
  login: string
  full_name: string
  role: UserRole
  position: string | null
  is_active: boolean
  created_at: string
  modules_completed: number
  knowledge_best: number | string | null
  knowledge_last: number | string | null
  knowledge_at: string | null
  english_level: string | null
  english_at: string | null
  english_attempts: number
  russian_level: string | null
  russian_at: string | null
  russian_attempts: number
  final_percent: number | string | null
  final_grading_status: 'pending' | 'graded' | null
  final_at: string | null
  last_active_at: string | null
  ungraded_writing: number
  open_grants: number
}

const num = (v: number | string | null) => (v === null || v === undefined ? null : Number(v))

export function mapOverview(row: OverviewRow): EmployeeOverview {
  return {
    id: row.id,
    login: row.login,
    fullName: row.full_name,
    role: row.role,
    position: row.position,
    isActive: row.is_active,
    createdAt: row.created_at,
    modulesCompleted: row.modules_completed ?? 0,
    knowledgeBest: num(row.knowledge_best),
    knowledgeLast: num(row.knowledge_last),
    knowledgeAt: row.knowledge_at,
    englishLevel: row.english_level,
    englishAt: row.english_at,
    englishAttempts: row.english_attempts ?? 0,
    russianLevel: row.russian_level,
    russianAt: row.russian_at,
    russianAttempts: row.russian_attempts ?? 0,
    finalPercent: num(row.final_percent),
    finalGradingStatus: row.final_grading_status,
    finalAt: row.final_at,
    lastActiveAt: row.last_active_at,
    ungradedWriting: row.ungraded_writing ?? 0,
    openGrants: row.open_grants ?? 0,
  }
}

export async function fetchEmployeeOverview(): Promise<EmployeeOverview[]> {
  const { data, error } = await supabase.from('employee_overview').select('*').order('full_name', { ascending: true })
  if (error) throw error
  return (data as OverviewRow[]).map(mapOverview)
}

// ─── Employee detail ─────────────────────────────────────────────────────────

export async function fetchProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase.from('profiles').select(PROFILE_COLUMNS).eq('id', userId).maybeSingle()
  if (error) throw error
  return data ? mapProfile(data as ProfileRow) : null
}

export async function fetchEmployeeModules(userId: string): Promise<ModuleProgressRow[]> {
  const { data, error } = await supabase
    .from('module_progress')
    .select('module_slug, completed_at, check_score, check_total')
    .eq('user_id', userId)
    .order('completed_at', { ascending: true })
  if (error) throw error
  return (data as ModuleProgressDbRow[]).map(mapModuleProgress)
}

export async function fetchEmployeeAttempts(userId: string): Promise<TestAttempt[]> {
  const { data, error } = await supabase
    .from('test_attempts')
    .select(ATTEMPT_COLUMNS)
    .eq('user_id', userId)
    .order('finished_at', { ascending: false })
  if (error) throw error
  return (data as TestAttemptRow[]).map(mapAttempt)
}

export async function fetchEmployeeActivity(userId: string, limit = 100): Promise<ActivityRow[]> {
  const { data, error } = await supabase
    .from('activity_log')
    .select('id, event, meta, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return (data as ActivityDbRow[]).map(mapActivity)
}

export async function resetEmployeeModules(userId: string): Promise<void> {
  const { error } = await supabase.from('module_progress').delete().eq('user_id', userId)
  if (error) throw error
}

// ─── Grading ─────────────────────────────────────────────────────────────────

export interface WritingRubric {
  /** 0–1 each: task completed, guest-appropriate tone, grammar, level-appropriate vocabulary. */
  task: number
  tone: number
  grammar: number
  vocabulary: number
}

export function rubricToScore(r: WritingRubric): number {
  const sum = r.task + r.tone + r.grammar + r.vocabulary
  return Math.max(0, Math.min(5, Math.round(sum * 1.25)))
}

export async function gradeWriting(
  attemptId: string,
  input: { score: number; comment: string | null; rubric: WritingRubric | null },
): Promise<TestAttempt> {
  const { data, error } = await supabase
    .from('test_attempts')
    .update({ writing_score: input.score, writing_comment: input.comment, writing_rubric: input.rubric })
    .eq('id', attemptId)
    .select(ATTEMPT_COLUMNS)
    .single()
  if (error) throw error
  return mapAttempt(data as TestAttemptRow)
}

// ─── Retake grants ───────────────────────────────────────────────────────────

export async function fetchGrants(userId: string): Promise<TestGrant[]> {
  const { data, error } = await supabase
    .from('test_grants')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data as GrantDbRow[]).map(mapGrant)
}

export async function grantRetake(userId: string, kind: 'english' | 'russian', grantedBy: string): Promise<TestGrant> {
  const { data, error } = await supabase
    .from('test_grants')
    .insert({ user_id: userId, kind, granted_by: grantedBy })
    .select('*')
    .single()
  if (error) throw error
  return mapGrant(data as GrantDbRow)
}

export async function revokeGrant(grantId: string): Promise<void> {
  const { error } = await supabase.from('test_grants').delete().eq('id', grantId)
  if (error) throw error
}

// ─── Question statistics ─────────────────────────────────────────────────────

export interface QuestionStat {
  kind: 'knowledge' | 'english' | 'russian'
  questionId: string
  answered: number
  pctCorrect: number
}

export async function fetchQuestionStats(): Promise<QuestionStat[]> {
  const { data, error } = await supabase.from('question_stats').select('*')
  if (error) throw error
  return (data as { kind: QuestionStat['kind']; question_id: string; answered: number; pct_correct: number | string }[]).map(
    (r) => ({ kind: r.kind, questionId: r.question_id, answered: r.answered, pctCorrect: Number(r.pct_correct) }),
  )
}

// ─── Accounts (Edge Function) ────────────────────────────────────────────────

export type AdminUsersAction = 'create' | 'reset_password' | 'set_active' | 'delete'

export type AdminUsersError =
  | 'invalid_login'
  | 'weak_password'
  | 'invalid_name'
  | 'login_taken'
  | 'last_admin'
  | 'cannot_change_self'
  | 'cannot_delete_self'
  | 'forbidden'
  | 'unauthorized'
  | 'network'
  | 'unknown'

export class AdminUsersFailure extends Error {
  code: AdminUsersError
  constructor(code: AdminUsersError, message?: string) {
    super(message ?? code)
    this.code = code
  }
}

const KNOWN_CODES: AdminUsersError[] = [
  'invalid_login',
  'weak_password',
  'invalid_name',
  'login_taken',
  'last_admin',
  'cannot_change_self',
  'cannot_delete_self',
  'forbidden',
  'unauthorized',
]

export interface CreateAccountInput {
  login: string
  password: string
  fullName: string
  position?: string
  role: UserRole
}

async function callAdminUsers<T>(body: Record<string, unknown>): Promise<T> {
  const { data, error } = await supabase.functions.invoke('admin-users', { body })
  if (error) {
    // supabase-js wraps non-2xx responses; try to read the JSON error code from the response
    const ctx = (error as { context?: Response }).context
    if (ctx && typeof ctx.json === 'function') {
      try {
        const payload = (await ctx.json()) as { error?: string }
        const code = KNOWN_CODES.find((c) => c === payload.error)
        throw new AdminUsersFailure(code ?? 'unknown', payload.error)
      } catch (e) {
        if (e instanceof AdminUsersFailure) throw e
      }
    }
    throw new AdminUsersFailure('network', error.message)
  }
  const payload = data as { error?: string } & T
  if (payload && typeof payload === 'object' && 'error' in payload && payload.error) {
    const code = KNOWN_CODES.find((c) => c === payload.error)
    throw new AdminUsersFailure(code ?? 'unknown', payload.error)
  }
  return payload
}

export async function createAccount(input: CreateAccountInput): Promise<Profile> {
  const res = await callAdminUsers<{ profile: ProfileRow }>({
    action: 'create',
    login: input.login.trim().toLowerCase(),
    password: input.password,
    full_name: input.fullName.trim(),
    position: input.position?.trim() || undefined,
    role: input.role,
  })
  return mapProfile(res.profile)
}

export async function resetPassword(userId: string, password: string): Promise<void> {
  await callAdminUsers<{ ok: true }>({ action: 'reset_password', user_id: userId, password })
}

export async function setAccountActive(userId: string, isActive: boolean): Promise<void> {
  await callAdminUsers<{ ok: true }>({ action: 'set_active', user_id: userId, is_active: isActive })
}

export async function deleteAccount(userId: string): Promise<void> {
  await callAdminUsers<{ ok: true }>({ action: 'delete', user_id: userId })
}

export async function updateProfile(
  userId: string,
  patch: { fullName?: string; position?: string | null; role?: UserRole },
): Promise<Profile> {
  const row: Record<string, unknown> = {}
  if (patch.fullName !== undefined) row.full_name = patch.fullName
  if (patch.position !== undefined) row.position = patch.position
  if (patch.role !== undefined) row.role = patch.role
  const { data, error } = await supabase.from('profiles').update(row).eq('id', userId).select(PROFILE_COLUMNS).single()
  if (error) throw error
  return mapProfile(data as ProfileRow)
}
