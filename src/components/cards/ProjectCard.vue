<template>
  <article class="project-card" :style="{ '--accent': accentColor }">
    <div class="project-card__image-wrap">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="project-card__image"
        loading="lazy"
      />
      <div v-else class="project-card__image-fallback">
        <span>{{ title.charAt(0) }}</span>
      </div>
      <div class="project-card__overlay">
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__btn"
          @click.stop
        >
          Ver demo
        </a>

        <!-- Múltiples repos (frontend/backend, etc.) -->
        <a
          v-for="repo in normalizedRepos"
          :key="repo.url"
          :href="repo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__btn project-card__btn--outline"
          @click.stop
        >
          <Icon icon="simple-icons:github" class="project-card__btn-icon" />
          {{ repo.label }}
        </a>
      </div>
    </div>

    <div class="project-card__body">
      <h3 class="project-card__title">{{ title }}</h3>
      <p class="project-card__desc">{{ description }}</p>

      <div class="project-card__stack">
        <span
          v-for="tech in stack"
          :key="tech"
          class="project-card__badge"
        >
          {{ tech }}
        </span>
      </div>
    </div>
    
  </article>
</template>

<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  demoUrl: { type: String, default: '' },
  // Compatibilidad con proyectos de un solo repo
  repoUrl: { type: String, default: '' },
  // Nuevo: soporte para múltiples repos, ej:
  // repos: [{ label: 'Frontend', url: '...' }, { label: 'Backend', url: '...' }]
  repos: { type: Array, default: () => [] },
  stack: { type: Array, default: () => [] },
  accentColor: { type: String, default: '#7c5cff' },
});

const normalizedRepos = computed(() => {
  if (props.repos.length > 0) return props.repos;
  if (props.repoUrl) return [{ label: 'Código', url: props.repoUrl }];
  return [];
});
</script>

<style scoped>
.project-card {
  --accent: #7c5cff;
  background: #141018;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 12px 30px -12px var(--accent);
}

.project-card__image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: linear-gradient(135deg, var(--accent) 0%, #0d0b12 100%);
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.project-card:hover .project-card__image {
  transform: scale(1.06);
}

.project-card__image-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.85);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0.6rem;
  background: rgba(10, 8, 14, 0.55);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  background: var(--accent);
  color: #0a080e;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.project-card__btn-icon {
  font-size: 1rem;
}

.project-card__btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.project-card__btn--outline {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.project-card__body {
  padding: 1rem 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  flex: 1;
}

.project-card__title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
}

.project-card__desc {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.65);
  max-height: calc(1.4em * 4); /* ~4 líneas visibles antes de hacer scroll */
  overflow-y: auto;
  padding-right: 8px;
}

.project-card__desc::-webkit-scrollbar {
  width: 4px;
}

.project-card__desc::-webkit-scrollbar-track {
  background: transparent;
}

.project-card__desc::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 999px;
}

.project-card__desc::-webkit-scrollbar-thumb:hover {
  background: var(--accent);
}
.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 0.4rem;
}

.project-card__badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
</style>