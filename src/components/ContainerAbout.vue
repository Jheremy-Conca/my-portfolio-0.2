<template>
  <div class="card">
    <div class="text-container">
      <h2>{{ titulo }}</h2>
      <p v-html="descripcion"></p>
    </div>

    <div class="image-container">
      <img :src="senkuImg" alt="Senku" />
    </div>
  </div>
</template>


<script>
import senkuImg from '../assets/senku.png'

export default {
  name: "CardAbout",
  props: {
    titulo: String,
    descripcion: String
  },
  data() {
    return { senkuImg }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 1028px;
  border-radius: 25px;
  background-color: rgba(117, 82, 161, 0.534);

  display: flex;
  gap: 20px;
  padding: 30px;
  box-sizing: border-box;
}

/* TEXTO */
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

/* IMAGEN */
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

/* =======================
   RESPONSIVE
======================= */

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    text-align: center;
  }

  .image-container img {
    max-width: 80%;
  }
}
</style>
