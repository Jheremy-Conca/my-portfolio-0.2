<template>
  <div class="side-container">
    <!-- Instagram Card -->
    <div class="container-es instagram-card">
      <div class="top-right-icon">
        <a href="https://www.instagram.com/jheremyxv/" target="_blank" rel="noopener">
          <Icon icon="mdi:open-in-new" color="#cccccc" width="20" />
        </a>
      </div>
      <a href="https://www.instagram.com/jheremyxv/" target="_blank" rel="noopener">
        <Icon icon="mdi:instagram" color="white" width="100" height="100" />
      </a>
    </div>

    <!-- Switch Card -->
    <div class="container-es switch-card">
      <label class="switch">
        <input type="checkbox" v-model="isDarkMode" @change="toggleBackground" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const isDarkMode = ref(false)

const toggleBackground = () => {
  document.body.style.background = isDarkMode.value
    ? "linear-gradient(to bottom, #1d0b27, #1d0b27)"
    : "linear-gradient(to bottom, #0a030f, #0a030f)"
}

onMounted(() => {
  document.body.style.background = "linear-gradient(to bottom, #0a030f, #0a030f)"
})
</script>

<style scoped>
.side-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

/* Contenedor general de cards */
.container-es {
  position: relative;
  width: 332px;
  height: 332px;
  background-color: rgba(117, 82, 161, 0.534);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
}

/* Icono superior derecho */
.top-right-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}

/* Switch dentro de la card */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #beaec9;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  content: "";
  position: absolute;
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: rgba(149, 64, 175, 0.938);
}

input:checked + .slider:before {
  transform: translateX(26px);
}


</style>
