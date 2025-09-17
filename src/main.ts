import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import "@mdi/font/css/materialdesignicons.min.css"
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
const app = createApp(App)

app.use(router);
app.use(MotionPlugin)
app.use(createPinia())

app.mount('#app')
