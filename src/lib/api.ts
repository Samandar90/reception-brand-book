import { apiDelete, apiGet, apiPost, apiPut, ApiError, request } from '@/lib/http'
import type { ActivityEvent, ModuleProgressRow, NewAttemptInput, Profile, TestAttempt, TestGrant } from '@/types'

// ─── Current user ────────────────────────────────────────────────────────────

export async function fetchMyProfile(): Promise<Profile | null> {
  try {
    const { user } = await apiGet<{ user: Profile }>('/auth/me', { silent401: true })
    return user
  } catch (e) {
    if (e instanceof ApiError && e.status === 401) return null
    throw e
  }
}

// ─── Progress (the signed-in employee) ───────────────────────────────────────

export async function fetchModuleProgress(_userId: string): Promise<ModuleProgressRow[]> {
  return apiGet<ModuleProgressRow[]>('/me/modules')
}

/** Marks a module complete (with the "check yourself" result when it was passed through the mini-quiz). */
export async function insertModuleProgress(
  _userId: string,
  slug: string,
  check?: { score: number; total: number },
): Promise<void> {
  await apiPut(`/me/modules/${encodeURIComponent(slug)}`, {
    checkScore: check?.score ?? null,
    checkTotal: check?.total ?? null,
  })
}

export async function deleteModuleProgress(_userId: string, slug?: string): Promise<void> {
  await apiDelete(slug ? `/me/modules/${encodeURIComponent(slug)}` : '/me/modules')
}

// ─── Test attempts ───────────────────────────────────────────────────────────

export async function fetchAttempts(_userId: string): Promise<TestAttempt[]> {
  return apiGet<TestAttempt[]>('/me/attempts')
}

/** Saves a finished test. Throws ApiError with code 'retake_not_allowed' when a language retake has no grant. */
export async function insertAttempt(_userId: string, input: NewAttemptInput): Promise<TestAttempt> {
  return apiPost<TestAttempt>('/me/attempts', input)
}

// ─── Retake grants ───────────────────────────────────────────────────────────

/** Unused, unexpired retake grants of the signed-in employee. */
export async function fetchOpenGrants(_userId: string): Promise<TestGrant[]> {
  return apiGet<TestGrant[]>('/me/grants')
}

// ─── Activity ────────────────────────────────────────────────────────────────

export function logActivity(_userId: string, event: ActivityEvent, meta: Record<string, unknown> = {}): void {
  apiPost('/me/activity', { event, meta }).catch((e) => console.warn('activity log failed', e))
}

/** Same as logActivity but survives page unload (pagehide): uses a keepalive request with the session cookie. */
export function logActivityKeepalive(_userId: string, event: ActivityEvent, meta: Record<string, unknown> = {}): void {
  request('POST', '/me/activity', { event, meta }, { keepalive: true }).catch(() => undefined)
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
  if (e instanceof ApiError) return e.code
  if (e && typeof e === 'object' && 'message' in e && typeof (e as { message: unknown }).message === 'string') {
    return (e as { message: string }).message
  }
  return String(e)
}
