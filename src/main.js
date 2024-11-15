import { createApp } from 'vue'
import '/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from './router'
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
