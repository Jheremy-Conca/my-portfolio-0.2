// src/composables/useSpotify.js
import { ref, computed } from 'vue'

export function useSpotify() {
  const track = ref(null)

  const fetchTrack = async () => {
    try {
      const res = await fetch('https://api-spotify-476a.onrender.com/api/last-track')
      if (res.ok) track.value = await res.json()
      else console.warn('No se pudo obtener la canción')
    } catch (err) {
      console.error('Error al obtener track:', err)
    }
  }

  const artistNames = computed(() =>
    track.value ? track.value.artists.map(a => a.name).join(', ') : ''
  )

  return {
    track,
    fetchTrack,
    artistNames,
  }
}
