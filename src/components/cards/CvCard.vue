<template>
  <a class="cv-card" :href="cvPath" download :aria-label="t.cvAria">
    <span class="cv-card__icon">📄</span>
    <span class="cv-card__text">
      <span class="cv-card__title">{{ t.cvTitle }}</span>
      <span class="cv-card__hint">{{ t.cvHint }}</span>
    </span>
    <span class="cv-card__arrow">↓</span>
  </a>
</template>

<script setup>
import { useLocale } from '../../composables/useLocale'

defineProps({
  cvPath: {
    type: String,
    default: '/cv-jheremy-conca.pdf',
  },
})

const { t } = useLocale()
</script>

<style scoped>
.cv-card {
  width: 100%;
  height: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  text-decoration: none;
  background: linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%);
  color: #fff;
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
}

.cv-card:hover {
  transform: translateY(-3px);
  filter: brightness(1.1);
}

.cv-card__icon {
  font-size: 1.8rem;
  line-height: 1;
}

.cv-card__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  flex: 1;
}

.cv-card__title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.cv-card__hint {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.75);
}

.cv-card__arrow {
  font-size: 1.2rem;
  opacity: 0.8;
}
</style>
