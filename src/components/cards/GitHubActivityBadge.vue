<template>
  <div class="gh-activity">
    <div class="gh-activity__header">
      <Icon icon="simple-icons:github" class="gh-activity__icon" />
      <span>Actividad reciente</span>
    </div>

    <p v-if="cargando" class="gh-activity__status">Cargando...</p>
    <p v-else-if="error" class="gh-activity__status">
      No se pudo cargar la actividad.
    </p>
    <ul v-else class="gh-activity__list">
      <li v-for="(item, i) in eventos" :key="i" class="gh-activity__item">
        <span class="gh-activity__dot" />
        <span class="gh-activity__text">
          {{ item.texto }}
          <a :href="item.repoUrl" target="_blank" rel="noopener noreferrer">
            {{ item.repo }}
          </a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

// Usuario fijo — cambia esto si tu usuario de GitHub es distinto.
const GITHUB_USER = 'Jheremy-Conca';

const cargando = ref(true);
const error = ref(false);
const eventos = ref([]);

// Traduce el tipo de evento público de GitHub a un texto legible.
const describirEvento = (event) => {
  const repo = event.repo?.name?.split('/')[1] ?? event.repo?.name;
  const repoUrl = `https://github.com/${event.repo?.name}`;

  switch (event.type) {
    case 'PushEvent': {
      const commits = event.payload?.commits?.length ?? 1;
      return { texto: `Subió ${commits} commit${commits > 1 ? 's' : ''} a`, repo, repoUrl };
    }
    case 'CreateEvent':
      return { texto: 'Creó', repo, repoUrl };
    case 'PullRequestEvent':
      return { texto: 'Abrió un pull request en', repo, repoUrl };
    case 'IssuesEvent':
      return { texto: 'Reportó un issue en', repo, repoUrl };
    case 'WatchEvent':
      return { texto: 'Marcó con estrella', repo, repoUrl };
    default:
      return { texto: 'Actividad en', repo, repoUrl };
  }
};

onMounted(async () => {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=5`);
    if (!res.ok) throw new Error('respuesta no ok');
    const data = await res.json();
    eventos.value = data.slice(0, 4).map(describirEvento);
  } catch (e) {
    error.value = true;
  } finally {
    cargando.value = false;
  }
});
</script>

<style scoped>
.gh-activity {
  background: #141018;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: 1rem 1.1rem;
  color: #fff;
  height: 100%;
}

.gh-activity__header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.7rem;
}

.gh-activity__icon {
  font-size: 1.1rem;
}

.gh-activity__status {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  margin: 0;
}

.gh-activity__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.gh-activity__item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.3;
}

.gh-activity__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7c5cff;
  margin-top: 0.35rem;
  flex-shrink: 0;
}

.gh-activity__text a {
  color: #7c5cff;
  text-decoration: none;
  font-weight: 600;
}

.gh-activity__text a:hover {
  text-decoration: underline;
}
</style>