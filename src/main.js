import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss'
import Vue3SmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App).use(Vue3SmoothScroll);

app.mount('#app');