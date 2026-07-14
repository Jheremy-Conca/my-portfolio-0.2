<template>
  <!-- Loading -->
  <BaseCard v-if="isLoading" bg="#121212" class="spotify-card state-card">
    <div class="loader-content">
      <Icon icon="mdi:spotify" class="spotify-icon spin" />
      <div class="loader">Cargando última canción escuchada...</div>
    </div>
  </BaseCard>

  <!-- Con track -->
  <BaseCard
    v-else-if="track"
    :bg="`url(${albumImage}) center / cover no-repeat`"
    class="spotify-card"
  >
    <Icon icon="mdi:spotify" class="spotify-icon" />

    <div class="overlay">
      <div class="track-info">
        <p class="recent-text">
          <strong>{{ isNowPlaying ? 'Escuchando ahora' : 'Escuchando recientemente' }}</strong>
        </p>
        <h2 class="track-name">{{ trackName }}</h2>
        <p class="track-artists">{{ artistNames }}</p>

        <div class="play-icon" title="Reproduciendo">
          <svg viewBox="0 0 110 60" fill="#fff">
            <polygon points="5,20 5,40 25,30" />
            <g stroke="#fff" stroke-width="3" stroke-linecap="round">
              <line v-for="x in 9" :key="x" :x1="22 + x * 8" y1="24" :x2="22 + x * 8" y2="36" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </BaseCard>

  <!-- Offline -->
  <BaseCard v-else bg="#121212" class="spotify-card state-card">
    <Icon icon="mdi:spotify" class="spotify-icon static" />
    <div class="offline-content">
      <p class="offline-title">Actualmente desconectado</p>
      <p class="offline-subtitle">No hay reproducciones recientes. ¡Regresa más tarde! 😴</p>
    </div>
  </BaseCard>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'
import { useLastfm } from '../../composables/useLastfm'

const { track, fetchTrack, startPolling, artistNames, trackName, albumImage, isNowPlaying } = useLastfm()
const isLoading = ref(true)

onMounted(async () => {
  await fetchTrack()
  isLoading.value = false
  startPolling()
})
</script>

<style scoped>
.spotify-card {
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
  display: flex;
  align-items: flex-end;
  padding: 24px;
}

.track-info {
  color: #fff;
}

.recent-text {
  font-size: 14px;
  opacity: 0.85;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.track-name {
  font-size: clamp(18px, 2.2vw, 24px);
  font-weight: 700;
  margin: 0 0 4px 0;
}

.track-artists {
  font-size: 16px;
  opacity: 0.75;
  margin: 0;
}

.spotify-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 32px;
  color: #1db954;
  z-index: 2;
}

.spotify-icon.spin {
  position: static;
  font-size: 40px;
  margin-bottom: 12px;
  animation: spin 2s linear infinite;
}

.play-icon {
  margin-top: 14px;
  width: 80px;
  opacity: 0.9;
}

.state-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #282828;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader {
  color: #aaa;
  font-size: 14px;
  font-weight: 500;
}

.offline-content {
  color: #fff;
  padding: 0 20px;
}

.offline-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.offline-subtitle {
  font-size: 14px;
  color: #aaa;
  margin: 0;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>