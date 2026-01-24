<template>
  <div class="weather-card">
    <div :class="backgroundClass" class="weather-container">
      <div class="weather-content">
        <!-- Icono y temperatura -->
        <div class="main-info">
          <div class="icon">{{ weatherIcon }}</div>
          <div class="temperature">{{ temperature }}°C</div>
        </div>

        <!-- Condición, hora y ubicación -->
        <div class="details">
          <div class="condition">{{ weatherCondition }}</div>
          <div class="time">{{ localTime }}</div>
          <div class="location">Lima, Carabayllo, Perú</div>
        </div>

        <!-- Imagen del estado -->
        <div class="state-image">
          <img :src="stateImage" @error="useFallback" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherChat } from '../composables/useWeatherChat.js'

const {
  temperature,
  weatherCondition,
  localTime,
  weatherIcon,
  backgroundClass,
  stateImage,
  useFallback
} = useWeatherChat()
</script>

<style scoped>
.weather-card {
  width: 680px;
  height: 320px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  background: linear-gradient(135deg, #2080a0, #0a3040);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.weather-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
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

/* Icono + Temperatura */
.main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: 60px;
  margin-bottom: 10px;
}

.temperature {
  font-size: 48px;
  font-weight: 700;
}

/* Detalles: condición, hora, ubicación */
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  flex: 1 1 auto;
  text-align: left;
}

.condition {
  font-size: 20px;
  font-weight: 600;
}

.time,
.location {
  font-size: 16px;
  opacity: 0.85;
}

/* Imagen del estado */
.state-image img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

/* Responsive */
@media (max-width: 1024px) {
  .weather-card {
    width: 90%;
    height: auto;
  }

  .icon {
    font-size: 50px;
  }

  .temperature {
    font-size: 40px;
  }

  .condition {
    font-size: 18px;
  }

  .time,
  .location {
    font-size: 14px;
  }

  .state-image img {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 768px) {
  .weather-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  }

  .details {
    text-align: center;
  }

  .icon {
    font-size: 40px;
  }

  .temperature {
    font-size: 36px;
  }

  .state-image img {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .icon {
    font-size: 32px;
  }

  .temperature {
    font-size: 28px;
  }

  .condition {
    font-size: 16px;
  }

  .time,
  .location {
    font-size: 12px;
  }

  .state-image img {
    width: 100px;
    height: 100px;
  }
}
</style>
