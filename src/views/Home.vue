<template>
  <!-- ░░░░░ BENTO GRID ÚNICO (12 columnas) ░░░░░ -->
  <div class="bento-grid">

    <!-- FILA 1: About (8) + Switch/IG apilados (4) -->
    <AboutCard
      class="card-about"
      :titulo="t.greeting + ' Jheremy Conca'"
      :descripcion="t.bio"
    />
    <div class="card-side">
      <SwitchIgCard />
    </div>

    <!-- FILA 2: Years (3) + LinkedIn (3) + Projects (6) -->
    <YearsCard class="card-years" />
    <LinkedinCard class="card-in" />
    <ProjectsCard class="card-projects" />

    <!-- FILA 3: Github (4) + Stack (4) + Email (4) -->
    <GithubCard class="card-github" />
    <TechStackCard class="card-tech" />
    <EmailCard class="card-email" />

    <!-- FILA 4: Weather (6) + X (3) + Discord (3) -->
    <WeatherCard class="card-weather" />
    <XCard class="card-x" />
    <DiscordCard class="card-discord" />

    <!-- FILA 5: Spotify (4) + Idioma (4) + CV (4) -->
    <LanguageCard class="card-lang" />
    <CvCard class="card-cv" />
    <SpotifyCard class="card-spotify" />


  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import AboutCard from '../components/cards/AboutCard.vue'
import SwitchIgCard from '../components/cards/SwitchIgCard.vue'
import YearsCard from '../components/cards/YearsCard.vue'
import LinkedinCard from '../components/cards/LinkedinCard.vue'
import ProjectsCard from '../components/cards/ProjectsCard.vue'
import GithubCard from '../components/cards/GithubCard.vue'
import TechStackCard from '../components/cards/TechStackCard.vue'
import EmailCard from '../components/cards/EmailCard.vue'
import WeatherCard from '../components/cards/WeatherCard.vue'
import XCard from '../components/cards/XCard.vue'
import DiscordCard from '../components/cards/DiscordCard.vue'
import SpotifyCard from '../components/cards/SpotifyCard.vue'
import LanguageCard from '../components/cards/LanguageCard.vue'
import CvCard from '../components/cards/CvCard.vue'

import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

onMounted(() => {
  document.body.style.background = 'linear-gradient(to bottom, #0a030f, #0a030f)'
})
</script>

<style scoped>
/* ============================================
   BENTO GRID — base de 12 columnas compartida
   ============================================ */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(220px, 320px);
  gap: 20px;
  max-width: 1200px;
  margin: 10px auto 40px;
  padding: 0 20px;
}

.bento-grid > * {
  min-width: 0;
}

/* ░░░░░ FILA 1 ░░░░░ */
.card-about {
  grid-column: span 8;
}

.card-side {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
}

/* ░░░░░ FILA 2 ░░░░░ */
.card-years {
  grid-column: span 3;
}
.card-in {
  grid-column: span 3;
}
.card-projects {
  grid-column: span 6;
}

/* ░░░░░ FILA 3 ░░░░░ */
.card-github,
.card-tech,
.card-email {
  grid-column: span 4;
}

/* ░░░░░ FILA 4 ░░░░░ */
.card-weather {
  grid-column: span 6;
}
.card-x,
.card-discord {
  grid-column: span 3;
}

/* ░░░░░ FILA 5 ░░░░░ */

.card-lang,
.card-cv {
  grid-column: span 3;
}
.card-spotify{
  grid-column: span 6;

}

/* =======================
   RESPONSIVE
======================= */
@media (max-width: 992px) {
  .bento-grid {
    grid-template-columns: repeat(6, 1fr);
  }

  .card-about    { grid-column: span 6; }
  .card-side     { grid-column: span 6; flex-direction: row; }

  .card-years    { grid-column: span 3; }
  .card-in       { grid-column: span 3; }
  .card-projects { grid-column: span 6; }

  .card-github,
  .card-tech,
  .card-email    { grid-column: span 2; }

  .card-weather  { grid-column: span 6; }
  .card-x,
  .card-discord  { grid-column: span 3; }

  .card-lang     { grid-column: span 3; }
  .card-cv       { grid-column: span 3; }
  .card-spotify  { grid-column: span 6; }

}

@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(200px, auto);
  }

  .bento-grid > * {
    grid-column: 1 / -1 !important;
  }

  .card-side {
    flex-direction: row;
  }
}
</style>