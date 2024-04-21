import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IncompView from '@/views/IncompView.vue'
import TeamListView from '@/views/TeamListView.vue'
import bugreportView from '@/views/teams/bugreport/bugreportView.vue'
import ByunSangYoon from '@/views/teams/bugreport/members/ByunSangYoonView.vue'
import TeamBrochureView from '@/views/TeamBrochureView.vue'

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
    path:'/team-list',
    name: 'team-list',
    component: TeamListView
  },
  {
    path:'/bugreport',
    name: 'bugreport',
    component: bugreportView
  },
  {
    path:'/bugreport/byun-sangyoon',
    name: 'ByunSangyoon',
    component: ByunSangYoon
  },
  {
    path: '/team-brochuer',
    name: 'team-brochuer',
    component: TeamBrochureView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router