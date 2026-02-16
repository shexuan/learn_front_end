// 引入createApp用于创建永远
import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
