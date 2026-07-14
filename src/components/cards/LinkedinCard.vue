<template>
  <BaseCard bg="rgba(38, 61, 122, 0.774)" class="linkedin-card">
    <h1>in</h1>
    <a href="https://www.linkedin.com/in/jheremy-william-conca-51aab7344/" target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn de Jheremy" class="icon-top-right">
      <Icon icon="mdi:open-in-new" width="24" height="24" color="#D3D3D3" />
    </a>
  </BaseCard>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.linkedin-card {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.linkedin-card h1 {
  font-size: clamp(60px, 8vw, 100px);
  margin: 0;
}

.icon-top-right {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>