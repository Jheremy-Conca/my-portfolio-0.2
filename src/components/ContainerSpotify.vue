<template>
  <div
    v-if="track"
    class="spotify-container"
    :style="{ backgroundImage: `url(${track.album.images[0].url})` }"
  >
    <!-- Icono Spotify -->
    <Icon icon="mdi:spotify" class="spotify-icon" />

    <!-- Overlay -->
    <div class="overlay">
      <div class="track-info">
        <p class="recent-text"><strong>Escuchando recientemente</strong></p>
        <h2 class="track-name">{{ track.name }}</h2>
        <p class="track-artists">{{ artistNames }}</p>

        <!-- Icono animado -->
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
  </div>

  <!-- Loading -->
  <div v-else class="spotify-container loading">
    <div class="loader">Cargando última canción escuchada...</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useSpotify } from '../composables/useSpotify'

const { track, fetchTrack, artistNames } = useSpotify()

onMounted(() => {
  fetchTrack()
})
</script>

<style scoped>
.spotify-container {
  width: 680px;
  height: 320px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

/* Overlay oscuro */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.35)
  );
  display: flex;
  align-items: flex-end;
  padding: 24px;
}

/* Info */
.track-info {
  color: #fff;
}

.recent-text {
  font-size: 14px;
  opacity: 0.85;
  margin-bottom: 6px;
}

.track-name {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.track-artists {
  font-size: 16px;
  opacity: 0.85;
}

/* Spotify icon */
.spotify-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 32px;
  color: #1db954;
}

/* Play animation */
.play-icon {
  margin-top: 14px;
  width: 80px;
  opacity: 0.9;
}

/* Loading */
.loading {
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  color: #aaa;
  font-size: 14px;
}


</style>
