<template>
  <BaseCard bg="black" class="x-card">
    <a href="https://x.com/jheremyxv" target="_blank" aria-label="Ir a X / Twitter" class="x-link">
      <Icon icon="mdi:open-in-new" />
    </a>

    <div class="x-logo"></div>
  </BaseCard>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'
</script>

<style scoped>
.x-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.x-logo {
  width: 40%;
  max-width: 120px;
  aspect-ratio: 1 / 1;
  background: url('/x.png') center / contain no-repeat;
}

.x-link {
  position: absolute;
  top: 16px;
  right: 16px;
  color: white;
  font-size: 22px;
  opacity: 0.8;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.x-link:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>