<template>
  <BaseCard
    bg="rgba(38, 61, 122, 0.774)"
    class="discord-card"
    :class="statusClass"
  >
    <div class="discord-content">
      <Icon icon="mdi:discord" class="discord-icon" />
      <h3 class="discord-title">{{ t.discordTitle }}</h3>
      <p class="discord-status-text">
        <template v-if="presence === null">{{ t.discordLoading }}</template>
        <template v-else>{{ presenceMessage }}</template>
      </p>
      <span class="status-indicator"></span>
    </div>
  </BaseCard>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useDiscord } from '../../composables/useDiscord'
import { useLocale } from '../../composables/useLocale'

const { presence, fetchDiscordStatus, statusClass } = useDiscord()
const { t } = useLocale()

const presenceMessage = computed(() => {
  switch (presence.value) {
    case 'online':
      return t.value.discordOnline
    case 'idle':
      return t.value.discordIdle
    case 'dnd':
      return t.value.discordDnd
    case 'offline':
      return t.value.discordOffline
    default:
      return t.value.discordUnknown
  }
})

let intervalId
onMounted(() => {
  fetchDiscordStatus()
  intervalId = setInterval(fetchDiscordStatus, 30000)
})
onUnmounted(() => clearInterval(intervalId))
</script>

<style scoped>
.discord-card {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 👇 Agregamos el fondo directamente aquí */
  background-color: rgba(38, 61, 122, 0.774);
  border-radius: 12px; /* Opcional: para que tenga bordes redondeados bonitos */
}

.discord-content {
  text-align: center;
  padding: 24px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.discord-icon {
  font-size: clamp(48px, 6vw, 64px);
}

.discord-title {
  font-size: 22px;
  font-weight: 600;
  margin: 0;
}

.discord-status-text {
  font-size: 15px;
  opacity: 0.9;
  max-width: 240px;
}

.status-indicator {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-top: 10px;
  background-color: #43b581;
}

.online .status-indicator {
  background-color: #43b581;
}
.idle .status-indicator {
  background-color: #faa61a;
}
.dnd .status-indicator {
  background-color: #f04747;
}
.offline .status-indicator {
  background-color: #747f8d;
}
</style>
