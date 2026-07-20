<template>
  <div class="not-found">
    <p class="not-found__code">404</p>
    <h1 class="not-found__title">Esta ruta no existe</h1>
    <p class="not-found__desc">
      Parece que seguiste un enlace roto, o escribiste mal la dirección.
    </p>
    <router-link to="/" class="not-found__btn">
      ← Volver al inicio
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #0a080e;
  color: #fff;
  padding: 2rem;
}

.not-found__code {
  font-size: 5.5rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, #7c5cff 0%, #2a1f4d 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.not-found__title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.8rem 0 0.4rem;
}

.not-found__desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  margin: 0 0 1.8rem;
  max-width: 360px;
}

.not-found__btn {
  padding: 0.6rem 1.3rem;
  border-radius: 999px;
  background: #7c5cff;
  color: #0a080e;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.not-found__btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
</style>