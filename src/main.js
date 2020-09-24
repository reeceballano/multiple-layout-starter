import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Default from './layouts/Default.vue'
import NoSidebar from './layouts/NoSidebar.vue'

const app = createApp(App);

app.component('default-layout', Default)
app.component('no-sidebar-layout', NoSidebar)
app.use(store)
app.use(router)
app.mount('#app');
