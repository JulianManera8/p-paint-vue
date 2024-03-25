import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiHamburgerMenu, RiMailSendLine, BiInstagram, BiWhatsapp, FaChevronLeft, FaChevronRight, IoSearchSharp, MdCloseOutlined } from "oh-vue-icons/icons";


//agregarle a esta funcion el icono q queramos agg
addIcons(GiHamburgerMenu, RiMailSendLine, BiInstagram, BiWhatsapp, FaChevronLeft, FaChevronRight, IoSearchSharp, MdCloseOutlined);

const pinia = createPinia();

const app = createApp(App)
app.use(router)
app.use(pinia)
app.component('v-icon', OhVueIcon)
app.mount('#app')
