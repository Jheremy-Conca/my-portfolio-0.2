import { createRouter, createWebHistory } from "vue-router";
// Antes

// Después (relativa)
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";

const routes = [
  { path: "/", component: Home }, // Ruta principal
  { path: "/projects", component: Projects }, // Ruta de Projects.vue
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
