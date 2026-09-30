import { supabase } from '@/lib/supabase'

/** Public: whether an administrator account already exists (first-launch setup needed or not). */
export async function fetchSetupStatus(): Promise<{ hasAdmin: boolean }> {
  const { data, error } = await supabase.functions.invoke('admin-users', { body: { action: 'status' } })
  if (error) throw error
  return data as { hasAdmin: boolean }
}

export type BootstrapResult = { ok: true } | { ok: false; error: string }

/** Creates the very first administrator. Requires the ADMIN_BOOTSTRAP_KEY secret set on the Edge Function. */
export async function bootstrapAdmin(input: {
  key: string
  login: string
  password: string
  fullName: string
}): Promise<BootstrapResult> {
  const { error } = await supabase.functions.invoke('admin-users', {
    body: { action: 'bootstrap', key: input.key, login: input.login, password: input.password, full_name: input.fullName },
  })
  if (!error) return { ok: true }
  const ctx = (error as { context?: Response }).context
  if (ctx && typeof ctx.json === 'function') {
    try {
      const payload = (await ctx.json()) as { error?: string }
      if (payload.error) return { ok: false, error: payload.error }
    } catch {
      // fall through
    }
  }
  return { ok: false, error: 'network' }
}
