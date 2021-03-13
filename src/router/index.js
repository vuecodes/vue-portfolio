import { createRouter, createWebHistory } from 'vue-router'
import webMain from '@/components/webMain'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: webMain
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
