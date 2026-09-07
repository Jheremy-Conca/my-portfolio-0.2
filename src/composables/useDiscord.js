// src/composables/useDiscord.js
import { ref, computed } from 'vue'

export function useDiscord(discordId = '761025313412218921') {
  // presence: null mientras carga, luego 'online' | 'idle' | 'dnd' | 'offline'
  const presence = ref(null)

  const fetchDiscordStatus = async () => {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      presence.value = data.data.discord_status
    } catch (e) {
      console.warn('No se pudo obtener presencia de Discord:', e.message)
      presence.value = 'offline'
    }
  }

  const statusClass = computed(() => presence.value || 'offline')

  return {
    presence,
    fetchDiscordStatus,
    statusClass,
  }
}
