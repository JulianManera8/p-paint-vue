import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/InicioView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/figura',
    name: 'figura',
    component: () => import(/* webpackChunksName: "figura" */'../views/FiguraView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
