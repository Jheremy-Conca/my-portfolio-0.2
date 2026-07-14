<template>
  <div class="base-card" :class="{ hoverable }" :style="{ background: bg }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  bg: {
    type: String,
    default: 'rgba(117, 82, 161, 0.534)'
  },
  hoverable: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.base-card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.base-card.hoverable {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.base-card.hoverable:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}
</style>