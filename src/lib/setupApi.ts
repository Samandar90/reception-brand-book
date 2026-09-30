import { apiGet, apiPost, ApiError } from '@/lib/http'

/** Public: whether an administrator account already exists (first-launch setup needed or not). */
export async function fetchSetupStatus(): Promise<{ hasAdmin: boolean }> {
  return apiGet<{ hasAdmin: boolean }>('/setup/status', { silent401: true })
}

export type BootstrapResult = { ok: true } | { ok: false; error: string }

/** Creates the very first administrator. Requires the SETUP_KEY configured on the server. */
export async function bootstrapAdmin(input: {
  key: string
  login: string
  password: string
  fullName: string
}): Promise<BootstrapResult> {
  try {
    await apiPost('/setup/bootstrap', input)
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e instanceof ApiError ? e.code : 'network' }
  }
}
