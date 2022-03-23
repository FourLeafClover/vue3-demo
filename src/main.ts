import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import MessageBox from './components/MessageBox'
import router from './router'
MessageBox.duration = 1200

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(MessageBox).mount('#app')
