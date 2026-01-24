<template>
  <!-- ░░░░░ FILA 1: PRESENTACIÓN ░░░░░ -->
  <div class="top-row-container">
    <div class="top-row-wrapper">
      <ContainerAbout
        titulo="👋 Hola, soy Jheremy Conca"
        descripcion="Tengo experiencia en <b>Vue.js</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Node.js</b>, <b>Express</b>, <b>Spring Boot Java</b> y <b>MySQL</b>. Me encanta aprender cosas nuevas, experimentar con tecnologías modernas y siempre doy lo mejor de mí en mi trabajo."
      />

      <div class="side-cards">
        <SwitchCard />
      </div>
    </div>
  </div>

  <!-- ░░░░░ FILA 2: YEARS / LINKEDIN / PROJECTS ░░░░░ -->
  <div class="container-years-wrapper">
    <ContainerYears class="fixed-card" />
    <ContainerIn class="fixed-card" />
    <ContainerProjects class="projects-card" />
  </div>

  <!-- ░░░░░ FILA 3: GITHUB / STACK / EMAIL ░░░░░ -->
  <div class="container-bottom-cards">
    <ContainerGithub class="bottom-github" />
    <TechIconsCard class="bottom-card" />
    <ContainerEmail class="bottom-card" />
  </div>

  <!-- ░░░░░ FILA 4: CLIMA / X / DISCORD ░░░░░ -->
  <div class="container-social-row">
    <WeatherCard class="weather-wide" />
    <ContainerX class="social-card" />
    <ContainerDiscord class="social-card" />
  </div>
<div class="container-social-row">
  <ContainerSpotify class="weather-wide" />
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

import ContainerAbout from '../components/ContainerAbout.vue'
import ContainerYears from '../components/ContainerYears.vue'
import ContainerIn from '../components/ContainerIn.vue'
import ContainerProjects from '../components/ContainerProjects.vue'
import SwitchCard from '../components/ContainerSwitchAndIG.vue'
import ContainerGithub from '../components/ContainerGithub.vue'
import TechIconsCard from '../components/ContainerTechIcons.vue'
import ContainerEmail from '../components/ContainerEmail.vue'
import WeatherCard from '../components/ContainerWeather.vue'
import ContainerX from '../components/ContainerX.vue'
import ContainerDiscord from '../components/ContainerDiscord.vue'
import ContainerSpotify from '../components/ContainerSpotify.vue'

const isDarkMode = ref(false)

onMounted(() => {
  document.body.style.background =
    'linear-gradient(to bottom, #0a030f, #0a030f)'
})
</script>

<style scoped>
/* ░░░░░ FILA 1 ░░░░░ */
.top-row-container {
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-top: 10px;
}

.top-row-wrapper {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  flex-wrap: wrap; /* se adapta en pantallas pequeñas */
  justify-content: center;
}

.side-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ░░░░░ FILA 2 ░░░░░ */
.container-years-wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
  flex-wrap: wrap;
  padding: 0 10px;
}

.fixed-card {
  width: clamp(250px, 25%, 320px);
  height: clamp(250px, 25vw, 320px);
}

.projects-card {
  width: clamp(400px, 50%, 680px);
  height: clamp(250px, 25vw, 320px);
}

/* ░░░░░ FILA 3 ░░░░░ */
.container-bottom-cards {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  margin-top: 20px;
  padding: 0 10px;
  flex-wrap: wrap;
}
.bottom-github,
.bottom-card {
  width: clamp(250px, 30%, 440px);  /* mismo rango para todos */
  height: clamp(250px, 25vw, 320px);
}


/* ░░░░░ FILA 4 (SOCIAL) ░░░░░ */
.container-social-row {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  margin: 20px 0;
  padding: 0 10px;
  flex-wrap: wrap;
}

.weather-wide {
  width: clamp(400px, 50%, 680px);
  height: clamp(250px, 25vw, 320px);
}

.social-card {
  width: clamp(250px, 25%, 320px);
  height: clamp(250px, 25vw, 320px);
}

/* =======================
   RESPONSIVE FINO
======================= */
@media (max-width: 768px) {
  .top-row-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .side-cards {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .container-years-wrapper,
  .container-bottom-cards,
  .container-social-row {
    flex-direction: column;
    align-items: center;
  }

  .fixed-card,
  .projects-card,
  .bottom-card,
  .weather-wide,
  .social-card,
   .spotify-card {
    width: 90%;
    height: auto;
    min-height: 200px;  /* altura mínima para que no desaparezca */

  }
}

</style>