// admin-users — account management for Hotel Academy.
// Deployed with verify_jwt = false: this function validates the caller's JWT itself
// and requires the caller's profile to be an active admin (except `bootstrap`).
//
// Actions (POST JSON body):
//   { action: 'status' }                                                → { hasAdmin } (public)
//   { action: 'bootstrap', key, login, password, full_name }            → first admin (only while no admin exists)
//   { action: 'create', login, password, full_name, position?, role? }  → new account
//   { action: 'reset_password', user_id, password }
//   { action: 'set_active', user_id, is_active }                        → also bans/unbans the auth user
//   { action: 'delete', user_id }
//
// Secrets: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (injected). Bootstrap key: ADMIN_BOOTSTRAP_KEY secret,
// or the row app_config('bootstrap_key') when the secret is not set.

import { createClient, type SupabaseClient } from 'npm:@supabase/supabase-js@2'

const EMAIL_DOMAIN = 'academy.local'
const LOGIN_RE = /^[a-z0-9._-]{3,32}$/
const MIN_PASSWORD = 6

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })
}

function fail(message: string, status = 400): Response {
  return json({ error: message }, status)
}

function timingSafeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder()
  const x = enc.encode(a)
  const y = enc.encode(b)
  if (x.length !== y.length) return false
  let diff = 0
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i]
  return diff === 0
}

async function isLastActiveAdmin(admin: SupabaseClient, userId: string): Promise<boolean> {
  const { data: target } = await admin.from('profiles').select('role, is_active').eq('id', userId).maybeSingle()
  if (!target || target.role !== 'admin' || !target.is_active) return false
  const { count } = await admin
    .from('profiles')
    .select('id', { count: 'exact', head: true })
    .eq('role', 'admin')
    .eq('is_active', true)
  return (count ?? 0) <= 1
}

function loginToEmail(login: string): string {
  return `${login}@${EMAIL_DOMAIN}`
}

interface Body {
  action?: string
  key?: string
  login?: string
  password?: string
  full_name?: string
  position?: string
  role?: string
  user_id?: string
  is_active?: boolean
}

function serviceClient(): SupabaseClient {
  const url = Deno.env.get('SUPABASE_URL')
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!url || !key) throw new Error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set')
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
}

async function createAccount(
  admin: SupabaseClient,
  input: { login: string; password: string; full_name: string; position?: string; role: 'admin' | 'employee'; created_by?: string },
): Promise<Response> {
  const login = input.login.trim().toLowerCase()
  if (!LOGIN_RE.test(login)) return fail('invalid_login')
  if (typeof input.password !== 'string' || input.password.length < MIN_PASSWORD) return fail('weak_password')
  const fullName = (input.full_name ?? '').trim()
  if (!fullName || fullName.length > 120) return fail('invalid_name')

  const { data: existing } = await admin.from('profiles').select('id').eq('login', login).maybeSingle()
  if (existing) return fail('login_taken', 409)

  const { data, error } = await admin.auth.admin.createUser({
    email: loginToEmail(login),
    password: input.password,
    email_confirm: true,
    user_metadata: { full_name: fullName, position: input.position?.trim() || null },
    app_metadata: { login, role: input.role, created_by: input.created_by ?? null },
  })
  if (error || !data.user) return fail(error?.message ?? 'create_failed', 500)

  // GoTrue writes app_metadata after the auth.users INSERT that fires handle_new_user(),
  // so set the authoritative fields here with the service role.
  const { data: profile, error: profileError } = await admin
    .from('profiles')
    .upsert(
      {
        id: data.user.id,
        login,
        full_name: fullName,
        role: input.role,
        position: input.position?.trim() || null,
        created_by: input.created_by ?? null,
      },
      { onConflict: 'id' },
    )
    .select('id, login, full_name, role, position, is_active, created_at')
    .single()
  if (profileError || !profile) {
    await admin.auth.admin.deleteUser(data.user.id).catch(() => undefined)
    return fail(profileError?.message ?? 'profile_missing', 500)
  }
  return json({ profile })
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS })
  if (req.method !== 'POST') return fail('method_not_allowed', 405)

  let body: Body
  try {
    body = (await req.json()) as Body
  } catch {
    return fail('invalid_json')
  }

  let admin: SupabaseClient
  try {
    admin = serviceClient()
  } catch (e) {
    return fail((e as Error).message, 500)
  }

  // ── status: public — tells the login page whether first-launch setup is still needed ──
  if (body.action === 'status') {
    const { count, error } = await admin.from('profiles').select('id', { count: 'exact', head: true }).eq('role', 'admin')
    if (error) return fail(error.message, 500)
    return json({ hasAdmin: (count ?? 0) > 0 })
  }

  // ── bootstrap: create the very first admin, guarded by a secret ──
  if (body.action === 'bootstrap') {
    // The key comes from the function secret, or from app_config (service-role only) when no secret is set.
    let secret = Deno.env.get('ADMIN_BOOTSTRAP_KEY') ?? ''
    if (!secret) {
      const { data: cfg } = await admin.from('app_config').select('value').eq('key', 'bootstrap_key').maybeSingle()
      secret = (cfg?.value as string | undefined) ?? ''
    }
    if (!secret || !body.key || !timingSafeEqual(body.key, secret)) return fail('forbidden', 403)
    const { count } = await admin.from('profiles').select('id', { count: 'exact', head: true }).eq('role', 'admin')
    if ((count ?? 0) > 0) return fail('admin_exists', 409)
    return createAccount(admin, {
      login: body.login ?? '',
      password: body.password ?? '',
      full_name: body.full_name ?? '',
      role: 'admin',
    })
  }

  // ── every other action requires an active admin caller ──
  const auth = req.headers.get('Authorization') ?? ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  if (!token) return fail('unauthorized', 401)

  const { data: userData, error: userError } = await admin.auth.getUser(token)
  if (userError || !userData.user) return fail('unauthorized', 401)
  const callerId = userData.user.id

  const { data: caller } = await admin
    .from('profiles')
    .select('role, is_active')
    .eq('id', callerId)
    .maybeSingle()
  if (!caller || caller.role !== 'admin' || !caller.is_active) return fail('forbidden', 403)

  switch (body.action) {
    case 'create': {
      return createAccount(admin, {
        login: body.login ?? '',
        password: body.password ?? '',
        full_name: body.full_name ?? '',
        position: body.position,
        role: body.role === 'admin' ? 'admin' : 'employee',
        created_by: callerId,
      })
    }

    case 'reset_password': {
      if (!body.user_id) return fail('user_id_required')
      if (typeof body.password !== 'string' || body.password.length < MIN_PASSWORD) return fail('weak_password')
      const { error } = await admin.auth.admin.updateUserById(body.user_id, { password: body.password })
      if (error) return fail(error.message, 500)
      return json({ ok: true })
    }

    case 'set_active': {
      if (!body.user_id) return fail('user_id_required')
      if (body.user_id === callerId) return fail('cannot_change_self')
      const active = body.is_active === true
      if (!active && (await isLastActiveAdmin(admin, body.user_id))) return fail('last_admin')
      const { error: banError } = await admin.auth.admin.updateUserById(body.user_id, {
        ban_duration: active ? 'none' : '876000h',
      })
      if (banError) return fail(banError.message, 500)
      const { error } = await admin.from('profiles').update({ is_active: active }).eq('id', body.user_id)
      if (error) return fail(error.message, 500)
      if (!active) {
        const { error: revokeError } = await admin.rpc('revoke_user_sessions', { p_user_id: body.user_id })
        if (revokeError) console.warn('revoke_user_sessions failed', revokeError.message)
      }
      return json({ ok: true })
    }

    case 'delete': {
      if (!body.user_id) return fail('user_id_required')
      if (body.user_id === callerId) return fail('cannot_delete_self')
      if (await isLastActiveAdmin(admin, body.user_id)) return fail('last_admin')
      const { error } = await admin.auth.admin.deleteUser(body.user_id)
      if (error) return fail(error.message, 500)
      return json({ ok: true })
    }

    default:
      return fail('unknown_action')
  }
})
