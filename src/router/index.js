import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  }, 
  {
    path: '/figuras',
    name: 'figuras',
    component: () => import(/* webpackChunkName: "figuras" */ '../views/FigurasView.vue')
  },
  {
    path: '/contacto',
    name: 'ccontacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
