// src/composables/useDiscord.js
import { ref, computed } from 'vue'

export function useDiscord(discordId = '761025313412218921') {
  const presence = ref(null)

  const fetchDiscordStatus = async () => {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`)
      const data = await res.json()
      presence.value = data.data.discord_status
    } catch (e) {
      presence.value = 'offline'
    }
  }

const presenceMessage = computed(() => {
  switch (presence.value) {
    case 'online': return 'En línea'
    case 'idle': return 'Ausente'
    case 'dnd': return 'No molestar'
    case 'offline': return 'Desconectado'
    default: return 'Desconocido'
  }
})


  const statusClass = computed(() => presence.value || 'offline')

  return {
    presence,
    fetchDiscordStatus,
    presenceMessage,
    statusClass,
  }
}
