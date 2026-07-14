<template>
  <div class="switch-ig-wrapper">
    <BaseCard class="ig-card">
      <div class="top-right-icon">
        <a href="https://www.instagram.com/jheremyxv/" target="_blank" rel="noopener">
          <Icon icon="mdi:open-in-new" color="#cccccc" width="20" />
        </a>
      </div>
      <a href="https://www.instagram.com/jheremyxv/" target="_blank" rel="noopener">
        <Icon icon="mdi:instagram" color="white" width="80" height="80" />
      </a>
    </BaseCard>

    <BaseCard class="switch-card">
      <label class="switch">
        <input type="checkbox" v-model="isDarkMode" @change="toggleBackground" />
        <span class="slider"></span>
      </label>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import BaseCard from '../ui/BaseCard.vue'

const isDarkMode = ref(false)

const toggleBackground = () => {
  document.body.style.background = isDarkMode.value
    ? 'linear-gradient(to bottom, #1d0b27, #1d0b27)'
    : 'linear-gradient(to bottom, #0a030f, #0a030f)'
}

onMounted(() => {
  document.body.style.background = 'linear-gradient(to bottom, #0a030f, #0a030f)'
})
</script>

<style scoped>
.switch-ig-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ig-card,
.switch-card {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.top-right-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}

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
  inset: 0;
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