<template>
  <div class="discord-container" :class="statusClass">
    <div class="discord-content">
      <Icon icon="mdi:discord" class="discord-icon" />

      <h3 class="discord-title">Discord</h3>

      <p class="discord-status-text">
        <template v-if="presence === null">
          Cargando estado...
        </template>
        <template v-else>
          {{ presenceMessage }}
        </template>
      </p>

      <span class="status-indicator"></span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useDiscord } from '../composables/useDiscord'

const {
  presence,
  fetchDiscordStatus,
  presenceMessage,
  statusClass
} = useDiscord()

onMounted(() => {
  fetchDiscordStatus()
  setInterval(fetchDiscordStatus, 30000)
})
</script>

<style scoped>
.discord-container {
  width: 320px;
  height: 320px;
  border-radius: 20px;
  background: linear-gradient(135deg, #5865f2, #404eed);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.discord-container:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.55);
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
  font-size: 64px;
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

/* Indicador visual */
.status-indicator {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-top: 10px;
  background-color: #43b581;
}

/* Estados dinámicos */
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

/* Responsive */
@media (max-width: 768px) {
  .discord-container {
    width: 90%;
    height: auto;
    min-height: 260px;
  }

  .discord-icon {
    font-size: 54px;
  }
}
</style>
