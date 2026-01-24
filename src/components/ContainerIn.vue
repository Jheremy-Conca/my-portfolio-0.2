<template>
  <div class="container-in fixed-card">
    <h1>in</h1>
    <a href="https://www.linkedin.com/in/jheremy-william-conca-51aab7344/" 
       target="_blank" 
       rel="noopener noreferrer"
       aria-label="Abrir LinkedIn de Jheremy" 
       class="icon-top-right">
      <Icon icon="mdi:open-in-new" width="24" height="24" color="#D3D3D3" />
    </a>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.container-in {
  background-color: rgba(38, 61, 122, 0.774);
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  font-size: 50px;
}

.fixed-card {
  width: 320px;
  height: 320px;
}

.container-in h1 {
  font-size: 100px;
  margin: 0;
}

.icon-top-right {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
