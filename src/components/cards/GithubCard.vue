<template>
  <BaseCard bg="url('/animation-portfolio-github.gif') no-repeat center / cover" class="github-card">
    <div class="overlay"></div>

    <div class="github-header">
      <Icon icon="simple-icons:github" class="github-icon" />
      <a href="https://github.com/Jheremy-Conca" target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil de Github">
        <Icon icon="mdi:open-in-new" class="open-icon" />
      </a>
    </div>

    <div class="github-text">
      <h1>{{ t.githubTitle }}</h1>
      <span>{{ t.githubDesc }}</span>
    </div>
  </BaseCard>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'
import { useLocale } from '../../composables/useLocale';
const { t } = useLocale();
</script>

<style scoped>
.github-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
  color: white;
  font-weight: 600;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

.github-header {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.github-icon {
  width: 36px;
  height: 36px;
}

.open-icon {
  width: 24px;
  height: 24px;
  color: #d3d3d3;
}

.github-text {
  margin-top: auto;
  z-index: 2;
}

.github-text h1 {
  margin: 0;
  font-size: 1.8rem;
}

.github-text span {
  font-size: 1rem;
  opacity: 0.85;
}
</style>