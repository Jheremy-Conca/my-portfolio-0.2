<template>
  <div class="projects-view">
    <header class="projects-view__header">
      <router-link to="/" class="projects-view__back">
        ← Volver al inicio
      </router-link>
      <h1 class="projects-view__title">Proyectos y pruebas</h1>
      <p class="projects-view__subtitle">
        Aquí encontrarás algunos de mis proyectos y experimentos.
      </p>
    </header>

    <div class="projects-view__filters">
      <button
        class="filter-chip"
        :class="{ 'filter-chip--active': activeFilter === 'all' }"
        @click="activeFilter = 'all'"
      >
        Todos
      </button>
      <button
        v-for="tech in allTechs"
        :key="tech"
        class="filter-chip"
        :class="{ 'filter-chip--active': activeFilter === tech }"
        @click="activeFilter = tech"
      >
        {{ tech }}
      </button>
    </div>

    <transition-group
      name="fade-up"
      tag="div"
      class="projects-view__grid"
    >
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        v-bind="project"
      />
    </transition-group>

    <p v-if="filteredProjects.length === 0" class="projects-view__empty">
      No hay proyectos con esa tecnología todavía.
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProjectCard from '../components/cards/ProjectCard.vue';
import gestionRolesImg from '../assets/projects/gestion-roles/usuarios.png';

const projects = ref([
  {
    title: 'Sistema de Gestión de Roles y Usuarios',
    description: 'Sistema Full Stack para gestión de usuarios, roles y permisos. Incluye autenticación JWT, recuperación de contraseña por email, control de acceso basado en permisos y modo oscuro.',
    image: gestionRolesImg,
    demoUrl: 'https://gestion-roles-jheremydev.netlify.app',
    repoUrl: 'https://github.com/Jheremy-Conca/gestion-roles',
    stack: ['Vue 3', 'Vite', 'Pinia', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    accentColor: '#7c5cff',
  },
]);

const activeFilter = ref('all');

const allTechs = computed(() => {
  const set = new Set();
  projects.value.forEach((p) => p.stack.forEach((t) => set.add(t)));
  return Array.from(set);
});

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value;
  return projects.value.filter((p) => p.stack.includes(activeFilter.value));
});
</script>

<style scoped>
.projects-view {
  min-height: 100vh;
  background: #0a080e;
  color: #fff;
  padding: 2.5rem 1.5rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.projects-view__header {
  margin-bottom: 1.8rem;
}

.projects-view__back {
  display: inline-block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  transition: color 0.2s ease;
}

.projects-view__back:hover {
  color: #fff;
}

.projects-view__title {
  font-size: 1.9rem;
  font-weight: 800;
  margin: 0 0 0.4rem;
}

.projects-view__subtitle {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 0.95rem;
}

.projects-view__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.filter-chip {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.75);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-chip:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.filter-chip--active {
  background: #7c5cff;
  border-color: #7c5cff;
  color: #0a080e;
}

.projects-view__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.2rem;
}

.projects-view__empty {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 3rem;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-up-leave-to {
  opacity: 0;
}
</style>