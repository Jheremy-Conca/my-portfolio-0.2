<template>
  <BaseCard bg="linear-gradient(135deg, #2080a0, #0a3040)" class="weather-card">
    <div class="weather-content">
      <div class="main-info">
        <div class="icon">{{ weatherIcon }}</div>
        <div class="temperature">{{ temperature }}°C</div>
      </div>

      <div class="details">
        <div class="condition">{{ weatherLabel }}</div>
        <div class="time">{{ localTime }}</div>
        <div class="location">Lima, Carabayllo, Perú</div>
      </div>

      <div class="state-image">
        <img :src="stateImage" @error="useFallback" />
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '../ui/BaseCard.vue'
import { useWeatherChat } from '../../composables/useWeatherChat.js'
import { computed } from 'vue';
import { useLocale } from '../../composables/useLocale';

const { t } = useLocale();

const {
  temperature,
  weatherCondition,
  localTime,
  weatherIcon,
  stateImage,
  useFallback
} = useWeatherChat()

// Traduce la condición climática según la temperatura actual
const weatherLabel = computed(() => {
  if (temperature.value >= 25) return t.value.weatherWarm;
  if (temperature.value <= 15) return t.value.weatherCold;
  return t.value.weatherMild;
});
</script>

<style scoped>
.weather-card {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  color: white;
}

.weather-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
}

.main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: clamp(32px, 5vw, 60px);
  margin-bottom: 10px;
}

.temperature {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  flex: 1 1 auto;
  text-align: left;
}

.condition {
  font-size: clamp(16px, 1.8vw, 20px);
  font-weight: 600;
}

.time,
.location {
  font-size: clamp(12px, 1.2vw, 16px);
  opacity: 0.85;
}

.state-image img {
  width: clamp(100px, 12vw, 160px);
  height: clamp(100px, 12vw, 160px);
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

@media (max-width: 640px) {
  .weather-content {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  .details {
    text-align: center;
  }
}
</style>