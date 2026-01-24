<template>
  <div class="container-projects">
    <h1>Proyectos y pruebas</h1>
    <p>Aquí podrás encontrar algunos de mis proyectos, pruebas o experimentos.</p>
    <router-link to="/projects" class="icon-projects-top-right" aria-label="Ir a proyectos">
      <Icon icon="mdi:arrow-right" width="32" height="32" color="#D3D3D3" />
    </router-link>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped>
.container-projects {
  width: 680px;
  height: 320px;
  background: linear-gradient(rgba(59, 37, 80, 0.7),
          rgba(63, 32, 92, 0.7)),
      url('https://media.baamboozle.com/uploads/images/1249040/be8c486e-ae96-4d06-abb7-55f3d94b2b7e.gif') no-repeat center center/cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 20px 20px 30px; /* 15px top, 15px left, 20px right & bottom */
  border-radius: 20px;
  position: relative;
  box-sizing: border-box;
  text-align: left;
}

.container-projects h1 {
  margin: 0 0 10px 0; /* margen inferior de 10px, cero top y left */
}

.container-projects p {
  font-size: 20px;
  max-width: 400px;
  margin: 0; /* elimina márgenes por defecto */
}


.icon-projects-top-right {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .container-projects {
    width: 90%;
    max-width: 100%;
    height: auto;
    text-align: center;
    align-items: center;
  }

  .container-projects p {
    max-width: 100%;
  }
}
</style>
