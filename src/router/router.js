import { createRouter, createWebHistory } from "vue-router";
// Antes

// Después (relativa)
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import NotFoundView from '../views/NotFoundView.vue';


const routes = [
  { path: "/", component: Home }, // Ruta principal
  { path: "/projects", component: Projects }, // Ruta de Projects.vue
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }, // Ruta 404 (debe ir al final)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;