import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import VueLazyLoad from 'vue3-lazyload'
//importar algun icono asi
//import { GiMushroomCloud } from "oh-vue-icons/icons";
//agregarle a esta funcion el icono q queramos agg
addIcons();


const app = createApp(App)
app.use(router)
app.use(VueLazyLoad)
app.component('v-icon', OhVueIcon)
app.mount('#app')
