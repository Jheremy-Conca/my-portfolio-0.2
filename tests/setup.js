// Setup global para Vitest (entorno jsdom).
import { beforeEach, vi } from 'vitest'

// Silencia las llamadas de red de los composables (clima, Discord, Last.fm)
// para que los tests no dependan de APIs externas.
beforeEach(() => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({}),
    }),
  )
  try {
    localStorage.clear()
  } catch {
    /* sin localStorage */
  }
})
