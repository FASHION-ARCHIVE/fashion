import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IncompView from '@/views/IncompView.vue'
import ShowinfoView from '@/views/ShowinfoView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: IncompView
  },
  {
    path: '/showinfo',
    name: 'showinfo',
    component: ShowinfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
