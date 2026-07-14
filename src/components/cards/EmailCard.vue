<template>
  <BaseCard bg="#0a947d" class="email-card">
    <a href="mailto:concajheremy@gmail.com" class="email-link" aria-label="Enviar email a Jheremy">
      <Icon icon="mdi:open-in-new" class="email-open-icon" />
    </a>
    <Icon icon="mdi:email-outline" class="email-main-icon" />
  </BaseCard>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'
</script>

<style scoped>
.email-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.email-link {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  cursor: pointer;
}

.email-open-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.email-main-icon {
  width: 90px;
  height: 90px;
  color: white;
  margin-top: 20px;
}
</style>