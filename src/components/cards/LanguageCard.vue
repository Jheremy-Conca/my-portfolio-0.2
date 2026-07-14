<template>
  <button
    class="lang-card"
    :class="{ 'lang-card--en': locale === 'en' }"
    @click="toggleLang"
    :aria-label="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
  >
    <span class="lang-card__flag">{{ locale === 'es' ? '🇵🇪' : '🇺🇸' }}</span>
    <span class="lang-card__text">
      <span class="lang-card__current">{{ locale === 'es' ? 'ES' : 'EN' }}</span>
      <span class="lang-card__hint">
        {{ locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish' }}
      </span>
    </span>
  </button>
</template>

<script setup>
import { useLocale } from '../../composables/useLocale';

const { locale, toggleLang } = useLocale();
</script>

<style scoped>
.lang-card {
  width: 100%;
  height: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 1.1rem;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  background: linear-gradient(135deg, #6d28d9 0%, #312e81 100%);
  color: #fff;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.lang-card:hover {
  transform: translateY(-3px);
  filter: brightness(1.1);
}

.lang-card--en {
  background: linear-gradient(135deg, #1d4ed8 0%, #0f172a 100%);
}

.lang-card__flag {
  font-size: 1.8rem;
  line-height: 1;
}

.lang-card__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
}

.lang-card__current {
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.lang-card__hint {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>