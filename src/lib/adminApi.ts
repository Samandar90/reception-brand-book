import { apiDelete, apiGet, apiPatch, apiPost, ApiError } from '@/lib/http'
import type {
  ActivityRow,
  EmployeeOverview,
  ModuleProgressRow,
  Profile,
  TestAttempt,
  TestGrant,
  UserRole,
  WritingRubricScores,
} from '@/types'

// ─── Overview & employee card ────────────────────────────────────────────────

export async function fetchEmployeeOverview(): Promise<EmployeeOverview[]> {
  return apiGet<EmployeeOverview[]>('/admin/overview')
}

export async function fetchProfile(userId: string): Promise<Profile | null> {
  try {
    return await apiGet<Profile>(`/admin/users/${userId}`)
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) return null
    throw e
  }
}

export async function fetchEmployeeModules(userId: string): Promise<ModuleProgressRow[]> {
  return apiGet<ModuleProgressRow[]>(`/admin/users/${userId}/modules`)
}

export async function fetchEmployeeAttempts(userId: string): Promise<TestAttempt[]> {
  return apiGet<TestAttempt[]>(`/admin/users/${userId}/attempts`)
}

export async function fetchEmployeeActivity(userId: string, limit = 100): Promise<ActivityRow[]> {
  return apiGet<ActivityRow[]>(`/admin/users/${userId}/activity?limit=${limit}`)
}

export async function resetEmployeeModules(userId: string): Promise<void> {
  await apiDelete(`/admin/users/${userId}/modules`)
}

// ─── Grading ─────────────────────────────────────────────────────────────────

/** 0–1 each: task completed, guest-appropriate tone, grammar, level-appropriate vocabulary. */
export type WritingRubric = WritingRubricScores

export function rubricToScore(r: WritingRubric): number {
  const sum = r.task + r.tone + r.grammar + r.vocabulary
  return Math.max(0, Math.min(5, Math.round(sum * 1.25)))
}

export async function gradeWriting(
  attemptId: string,
  input: { score: number; comment: string | null; rubric: WritingRubric | null },
): Promise<TestAttempt> {
  return apiPatch<TestAttempt>(`/admin/attempts/${attemptId}/grade`, input)
}

// ─── Retake grants ───────────────────────────────────────────────────────────

export async function fetchGrants(userId: string): Promise<TestGrant[]> {
  return apiGet<TestGrant[]>(`/admin/users/${userId}/grants`)
}

export async function grantRetake(userId: string, kind: 'english' | 'russian', _grantedBy: string): Promise<TestGrant> {
  return apiPost<TestGrant>('/admin/grants', { userId, kind })
}

export async function revokeGrant(grantId: string): Promise<void> {
  await apiDelete(`/admin/grants/${grantId}`)
}

// ─── Question statistics ─────────────────────────────────────────────────────

export interface QuestionStat {
  kind: 'knowledge' | 'english' | 'russian'
  questionId: string
  answered: number
  pctCorrect: number
}

export async function fetchQuestionStats(): Promise<QuestionStat[]> {
  return apiGet<QuestionStat[]>('/admin/question-stats')
}

// ─── Accounts ────────────────────────────────────────────────────────────────

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

async function accountCall<T>(run: () => Promise<T>): Promise<T> {
  try {
    return await run()
  } catch (e) {
    if (e instanceof ApiError) {
      if (e.code === 'network') throw new AdminUsersFailure('network', e.message)
      throw new AdminUsersFailure(KNOWN_CODES.find((c) => c === e.code) ?? 'unknown', e.code)
    }
    throw new AdminUsersFailure('unknown', String(e))
  }
}

export interface CreateAccountInput {
  login: string
  password: string
  fullName: string
  position?: string
  role: UserRole
}

export async function createAccount(input: CreateAccountInput): Promise<Profile> {
  const res = await accountCall(() =>
    apiPost<{ profile: Profile }>('/admin/accounts', {
      login: input.login.trim().toLowerCase(),
      password: input.password,
      fullName: input.fullName.trim(),
      position: input.position?.trim() || null,
      role: input.role,
    }),
  )
  return res.profile
}

export async function resetPassword(userId: string, password: string): Promise<void> {
  await accountCall(() => apiPost(`/admin/accounts/${userId}/password`, { password }))
}

export async function setAccountActive(userId: string, isActive: boolean): Promise<void> {
  await accountCall(() => apiPost(`/admin/accounts/${userId}/active`, { isActive }))
}

export async function deleteAccount(userId: string): Promise<void> {
  await accountCall(() => apiDelete(`/admin/accounts/${userId}`))
}

export async function updateProfile(
  userId: string,
  patch: { fullName?: string; position?: string | null; role?: UserRole },
): Promise<Profile> {
  return accountCall(() => apiPatch<Profile>(`/admin/accounts/${userId}`, patch))
}
