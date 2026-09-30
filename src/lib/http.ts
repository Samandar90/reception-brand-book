/** Error returned by the academy API: `code` is a stable machine-readable reason ('network' when offline). */
export class ApiError extends Error {
  status: number
  code: string
  constructor(status: number, code: string, message?: string) {
    super(message ?? code)
    this.status = status
    this.code = code
  }
}

/** Fired when the server says the session is gone (expired, signed out elsewhere, account disabled). */
export const UNAUTHORIZED_EVENT = 'academy:unauthorized'

const API_BASE = '/api'

export async function request<T>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string,
  body?: unknown,
  options: { keepalive?: boolean; silent401?: boolean } = {},
): Promise<T> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method,
      credentials: 'same-origin',
      keepalive: options.keepalive,
      headers: {
        // Required by the server on every state-changing request (blocks cross-site form posts).
        'x-academy': '1',
        ...(body === undefined ? {} : { 'Content-Type': 'application/json' }),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
  } catch (e) {
    throw new ApiError(0, 'network', e instanceof Error ? e.message : String(e))
  }

  let payload: unknown = null
  const text = await res.text()
  if (text) {
    try {
      payload = JSON.parse(text)
    } catch {
      payload = null
    }
  }

  if (!res.ok) {
    const code =
      payload && typeof payload === 'object' && 'error' in payload && typeof (payload as { error: unknown }).error === 'string'
        ? (payload as { error: string }).error
        : res.status >= 500
          ? 'server_error'
          : 'http_' + res.status
    if (res.status === 401 && !options.silent401) window.dispatchEvent(new Event(UNAUTHORIZED_EVENT))
    throw new ApiError(res.status, code)
  }
  return payload as T
}

export const apiGet = <T>(path: string, opts?: { silent401?: boolean }) => request<T>('GET', path, undefined, opts)
export const apiPost = <T>(path: string, body?: unknown) => request<T>('POST', path, body ?? {})
export const apiPut = <T>(path: string, body?: unknown) => request<T>('PUT', path, body ?? {})
export const apiPatch = <T>(path: string, body?: unknown) => request<T>('PATCH', path, body ?? {})
export const apiDelete = <T>(path: string) => request<T>('DELETE', path)
