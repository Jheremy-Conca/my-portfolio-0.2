<template>
  <BaseCard bg="rgb(206, 49, 49)" class="years-card">
    <p class="label">{{ t.age }}</p>
    <h1 class="number">22</h1>
    <p class="label">{{ t.years }}</p>
  </BaseCard>
</template>

<script setup>
import BaseCard from '../ui/BaseCard.vue'
import { useLocale } from '../../composables/useLocale'
const { t } = useLocale()
</script>

<style scoped>
.years-card {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--font-display);
}

.years-card h1 {
  margin: -28px 0 -15px 0;
  font-size: clamp(60px, 8vw, 100px);
}
</style>
