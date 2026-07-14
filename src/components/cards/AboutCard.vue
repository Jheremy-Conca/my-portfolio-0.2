<template>
  <BaseCard class="about-card">
    <div class="text-container">
      <h2>{{ titulo }}</h2>
      <p v-html="descripcion"></p>
    </div>

    <div class="image-container">
      <img :src="senkuImg" alt="Senku" />
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '../ui/BaseCard.vue'
import senkuImg from '../../assets/images/senku.png'

defineProps({
  titulo: String,
  descripcion: String
})
</script>

<style scoped>
.about-card {
  display: flex;
  gap: 20px;
  padding: 30px;
}

.text-container {
  flex: 1;
  font-size: clamp(16px, 2vw, 22px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-container h2 {
  margin-bottom: 10px;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    text-align: center;
  }
  .image-container img {
    max-width: 80%;
  }
}
</style>