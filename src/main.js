import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js"; // <- importamos router

createApp(App)
  .use(router) // <- registramos el router
  .mount("#app");
