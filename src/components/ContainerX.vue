<template>
  <div class="x-container">
    <!-- Icono abrir -->
    <a
      href="https://x.com/jheremyxv"
      target="_blank"
      aria-label="Ir a X / Twitter"
      class="x-link"
    >
      <Icon icon="mdi:open-in-new" />
    </a>

    <!-- Logo X -->
    <div class="x-logo"></div>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.x-container {
  width: 320px;
  height: 320px;
  border-radius: 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.x-container:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.6);
}

/* Logo X */
.x-logo {
  width: 400px;
  height: 400px;
  background: url('/x.png') center / contain no-repeat;
  margin-bottom: 12px;
}

/* Usuario */
.x-text {
  color: white;
  font-size: 16px;
  opacity: 0.85;
}

/* Icono abrir */
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

/* Responsive */

</style>
