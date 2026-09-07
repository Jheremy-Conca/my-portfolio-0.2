<template>
  <BaseCard class="ig-card">
    <a
      href="https://www.instagram.com/jheremyxv/"
      target="_blank"
      rel="noopener noreferrer"
      class="ig-card__open"
      aria-label="Abrir Instagram (nueva pestaña)"
    >
      <Icon icon="mdi:open-in-new" color="#cccccc" width="20" />
    </a>
    <a
      href="https://www.instagram.com/jheremyxv/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram de Jheremy"
    >
      <Icon icon="mdi:instagram" color="white" width="80" height="80" />
    </a>
  </BaseCard>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'
</script>

<style scoped>
.ig-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.ig-card__open {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}
</style>
