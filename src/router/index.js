
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IncompView from '@/views/IncompView.vue'
import ShowinfoView from '@/views/ShowinfoView.vue'
import TeamListView from '@/views/TeamListView.vue'
import bugreportView from '@/views/teams/bugreport/bugreportView.vue'
import JeongJayYeong from '@/views/secret/JeongJayYeongView.vue'

import TeamBrochureView from '@/views/TeamBrochureView.vue'
import BehindView from '@/views/BehindView.vue'
import RunwayView from '@/views/RunwayView.vue'
import bugreportLookbookView from '@/views/teams/bugreport/bugreportLookbookView.vue'

import ByunSangYoon from '@/views/teams/bugreport/members/ByunSangYoonView.vue'
import ChoiJeeYoung from '@/views/teams/bugreport/members/ChoiJeeYoungView.vue'
import KimSangEun from '@/views/teams/bugreport/members/KimSangEunView.vue'
import LeeJuYoung from '@/views/teams/bugreport/members/LeeJuYoungView.vue'
import LeeJiHyun from '@/views/teams/bugreport/members/LeeJiHyunView.vue'
import KangSoWon from '@/views/teams/bugreport/members/KangSoWonView.vue'

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
  },
  {
    path:'/team-list',
    name: 'team-list',
    component: TeamListView
  },
  {
    path: '/runway',
    name: 'runway',
    component: RunwayView
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
    path:'/bugreport/choi-jeeyoung',
    name: 'ChoiJeeYoung',
    component: ChoiJeeYoung
  },
  {
    path:'/bugreport/kim-sangeun',
    name: 'kim-sangeun',
    component: KimSangEun
  },
  {
    path:'/bugreport/lee-juyoung',
    name: 'lee-huyoung',
    component: LeeJuYoung
  },
  {
    path:'/bugreport/lee-jihyun',
    name: 'lee-jihyun',
    component: LeeJiHyun
  },
  {
    path:'/bugreport/kang-sowon',
    name: 'kang-sowon',
    component: KangSoWon
  },  
  {
    path: '/team-brochuer',
    name: 'team-brochuer',
    component: TeamBrochureView
  },
  {
    path: '/behind',
    name: 'behind',
    component: BehindView
  },
  {
    path: '/bugreport/lookbook',
    name: 'bugreport-lookbook',
    component: bugreportLookbookView
  },
  {
    path:'/secret/jeong-jayyeong',
    name: 'JeongJayYeong',
    component: JeongJayYeong
  },
]

const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior() { 
    return { top: 0 }
    },
})

export default router
