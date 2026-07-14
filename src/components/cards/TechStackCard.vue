<template>
  <BaseCard bg="#5f3e2f" class="tech-card" role="list" aria-label="Tecnologías">
    <Icon
      v-for="tech in techIcons"
      :key="tech.icon"
      :icon="tech.icon"
      :title="tech.title"
      role="listitem"
    />
  </BaseCard>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'
import { techIcons } from '../../constants/techIcons.js'
</script>

<style scoped>
.tech-card {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-auto-rows: 50px;
  justify-items: center;
  align-items: center;
  gap: 12px;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tech-card::-webkit-scrollbar {
  display: none;
}

.tech-card :deep(svg) {
  width: 36px;
  height: 36px;
  color: white;
  transition: transform 0.2s ease;
}

.tech-card :deep(svg:hover) {
  transform: scale(1.2);
}
</style>