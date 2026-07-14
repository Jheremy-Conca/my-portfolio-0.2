<template>
  <BaseCard
    bg="linear-gradient(rgba(59, 37, 80, 0.7), rgba(63, 32, 92, 0.7)),
        url('https://media.baamboozle.com/uploads/images/1249040/be8c486e-ae96-4d06-abb7-55f3d94b2b7e.gif') no-repeat center center/cover"
    class="projects-card"
  >
    <h1>{{ t.projectsTitle }}</h1>
    <p>{{ t.projectsDesc }}</p>
    <router-link to="/projects" class="icon-projects-top-right" aria-label="Ir a proyectos">
      <Icon icon="mdi:arrow-right" width="32" height="32" color="#D3D3D3" />
    </router-link>
  </BaseCard>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'
import { useLocale } from '../../composables/useLocale';
const { t } = useLocale();
</script>

<style scoped>
.projects-card {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 20px 20px 30px;
  text-align: left;
}

.projects-card h1 {
  margin: 0 0 10px 0;
}

.projects-card p {
  font-size: clamp(16px, 1.8vw, 20px);
  max-width: 400px;
  margin: 0;
}

.icon-projects-top-right {
  position: absolute;
  top: 10px;
  right: 10px;
}

@media (max-width: 768px) {
  .projects-card {
    text-align: center;
    align-items: center;
  }
  .projects-card p {
    max-width: 100%;
  }
}
</style>