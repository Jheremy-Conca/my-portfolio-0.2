<template>
  <div class="container-box container-email">
    <a href="mailto:concajheremy@gmail.com" class="email-link" aria-label="Enviar email a Jheremy">
      <Icon icon="mdi:open-in-new" class="email-icon" />
    </a>
    <Icon icon="mdi:email-outline" />
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped lang="scss">
/* Base card */
.container-box {
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
}

/* Email Card */
.container-email {
  width: 320px;       /* ancho fijo */
  height: 320px;      /* alto fijo */
  background: #0a947d;
  padding: 20px;
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.container-email .email-link {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  cursor: pointer;
}

.container-email .email-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.container-email svg:not(.email-icon) {
  width: 90px;
  height: 90px;
  color: white;
  margin-top: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .container-email {
    width: 100%;
    height: auto;
    min-height: 260px;
    padding: 20px;
  }

  .container-email svg:not(.email-icon) {
    width: 60px;
    height: 60px;
  }

  .email-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
