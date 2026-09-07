<script setup>
import { useTheme } from './composables/useTheme'
import ControlsBar from './components/ControlsBar.vue'

// Aplica el color de fondo guardado en cuanto arranca la app,
// con independencia de la ruta.
useTheme()
</script>

<template>
  <ControlsBar />
  <router-view />
</template>
