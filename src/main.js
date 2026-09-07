import { createApp } from 'vue'
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import './style.css'
import App from './App.vue'
import router from './router/router.js'

createApp(App).use(router).mount('#app')
