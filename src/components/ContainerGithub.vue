<template>
  <div class="container-box container-github">
    <div class="overlay"></div>

    <div class="github-header">
      <Icon icon="simple-icons:github" class="github-icon" />
      <a
        href="https://github.com/Jheremy-Conca"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir perfil de Github"
      >
        <Icon icon="mdi:open-in-new" class="open-icon" />
      </a>
    </div>

    <div class="container-github-p">
      <h1>Github</h1>
      <span>Mi perfil de Github, donde subo mis proyectos.</span>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped lang="scss">
/* Base card */
.container-box {
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
}

/* GitHub Card */
.container-github {
  background: url('/animation-portfolio-github.gif') no-repeat center / cover;
  flex-direction: column;
  padding: 25px;
  width: 680px;   /* ✅ ancho fijo */
  height: 320px;  /* ✅ alto fijo */
  min-width: unset;
  max-width: unset;

  overflow: hidden;
  align-items: flex-start;
}

/* Overlay oscuro */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.4)
  );
  z-index: 1;
  border-radius: 20px;
}

/* Header */
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

/* Texto inferior */
.container-github-p {
  margin-top: auto;
  z-index: 2;
}

h1 {
  margin: 0;
  font-size: 1.8rem;
}

span {
  font-size: 1rem;
  opacity: 0.85;
}


</style>
