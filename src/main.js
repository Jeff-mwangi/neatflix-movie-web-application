import { createApp } from 'vue'
import App from './App.vue'
import VueClazyLoad from 'vue-clazy-load';
import router from './router'
import './assets/movies.css'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



const app = createApp(App);
app.use(router);
app.use(VueClazyLoad);
app.mount('#app')

