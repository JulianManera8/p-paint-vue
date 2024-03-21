import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiHamburgerMenu, RiMailSendLine, BiInstagram, BiWhatsapp } from "oh-vue-icons/icons";

//agregarle a esta funcion el icono q queramos agg
addIcons(GiHamburgerMenu, RiMailSendLine, BiInstagram, BiWhatsapp);

const app = createApp(App)
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
