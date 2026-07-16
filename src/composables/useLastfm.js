import { ref, computed, onUnmounted } from 'vue'

export function useLastfm(pollIntervalMs = 15000) {
  const track = ref(null)
  let pollTimer = null

  const fetchTrack = async () => {
    try {
      const res = await fetch('https://api-lastfm.onrender.com/api/last-track')

      // 1. Manejar si el servidor responde bien (Status 200)
      if (res.status === 200) {
        track.value = await res.json()
        return
      }

      if (res.status === 204) {
        console.log('No hay canciones reproducidas recientemente.')
        track.value = null
        return
      }

      // 3. Cualquier otra respuesta de error (401, 500, etc.)
      console.warn(`Error en la API: Código de estado ${res.status}`)
      track.value = null

    } catch (err) {
      console.error('Error de red al obtener el track:', err)
      track.value = null
    }
  }

  // Last.fm devuelve el artista como texto simple, no como array
  const artistNames = computed(() => track.value?.artist || '')

  const trackName = computed(() => track.value?.name || '')

  const albumName = computed(() => track.value?.album || '')

  const albumImage = computed(() => track.value?.image || null)

  const isNowPlaying = computed(() => track.value?.isNowPlaying || false)

  const trackUrl = computed(() => track.value?.url || null)

  // Inicia el refresco automático cada `pollIntervalMs` (por defecto 15s)
  const startPolling = () => {
    if (pollTimer) return // ya está corriendo, evita duplicar timers
    pollTimer = setInterval(fetchTrack, pollIntervalMs)
  }


  const stopPolling = () => {
    if (pollTimer) {
      clearInterval(pollTimer)
      pollTimer = null
    }
  }

  // Corta el polling solo si el composable se usa dentro de un componente
  // (evita error si se llama fuera de setup())
  try {
    onUnmounted(stopPolling)
  } catch {
    // se está usando fuera de un componente Vue, no pasa nada
  }

  return {
    track,
    fetchTrack,
    artistNames,
    trackName,
    albumName,
    albumImage,
    isNowPlaying,
    trackUrl,
    startPolling,
    stopPolling,
  }
}