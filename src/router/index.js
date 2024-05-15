
import { createRouter, createWebHistory } from 'vue-router'

import JeongJayYeong from '@/views/secret/JeongJayYeongView.vue'
import IncompView from '@/views/IncompView.vue'

import HomeView from '../views/HomeView.vue'
import TeamListView from '@/views/TeamListView.vue'
import TeamBrochureView from '@/views/TeamBrochureView.vue'
import RunwayView from '@/views/RunwayView.vue'
import ShowinfoView from '@/views/ShowinfoView.vue'
import BehindView from '@/views/BehindView.vue'

import protophobiaView from '@/views/teams/protophobia/protophobiaView.vue'

import ChoiJunWoo from '@/views/teams/protophobia/members/1/ChoiJunWooView.vue'
import KwakDoHoon from '@/views/teams/protophobia/members/2/KwakDoHoonView.vue'
import YunSoHye from '@/views/teams/protophobia/members/3/YunSoHyeView.vue'
import JeongGyeongMo from '@/views/teams/protophobia/members/4/JeongGyeongMoView.vue'
import KimMinSeo from '@/views/teams/protophobia/members/5/KimMinSeoView.vue'
import KimHeeYoung from '@/views/teams/protophobia/members/6/KimHeeYoungView.vue'
import KimJiIn from '@/views/teams/protophobia/members/7/KimJiInView.vue'
import LeeEunJi from '@/views/teams/protophobia/members/8/LeeEunJiView.vue'
import YounDoHee from '@/views/teams/protophobia/members/9/YounDoHeeView.vue'

import OAKView from '@/views/teams/OAK/OAKView.vue'


import bugreportView from '@/views/teams/bugreport/bugreportView.vue'
import bugreportLookbookView from '@/views/teams/bugreport/bugreportLookbookView.vue'

import ByunSangYoon from '@/views/teams/bugreport/members/ByunSangYoonView.vue'
import KangSoWon from '@/views/teams/bugreport/members/KangSoWonView.vue'
import KimSangEun from '@/views/teams/bugreport/members/KimSangEunView.vue'
import ChoiJeeYoung from '@/views/teams/bugreport/members/ChoiJeeYoungView.vue'
import LeeJuYoung from '@/views/teams/bugreport/members/LeeJuYoungView.vue'
import YooHaYoung from '@/views/teams/bugreport/members/YooHaYoungView.vue'
import LeeJiHyun from '@/views/teams/bugreport/members/LeeJiHyunView.vue'
import YuJiMin from '@/views/teams/bugreport/members/YuJiMinView.vue'
import OhSeungMin from '@/views/teams/bugreport/members/OhSeungMinView.vue'
import HaNaGyeong from '@/views/teams/bugreport/members/HaNaGyeongView.vue'

const routes = [
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: IncompView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/team-list',
    name: 'team-list',
    component: TeamListView
  },
  {
    path: '/team-brochuer',
    name: 'team-brochuer',
    component: TeamBrochureView
  },
  {
    path: '/runway',
    name: 'runway',
    component: RunwayView
  },
  {
    path: '/showinfo',
    name: 'showinfo',
    component: ShowinfoView
  },
  {
    path: '/behind',
    name: 'behind',
    component: BehindView
  },

  {
    path: '/protophobia',
    name: 'protophobia',
    component: protophobiaView
  },

  {
    path: '/protophobia/choi-junwoo',
    name: 'choi-junwoo',
    component: ChoiJunWoo
  },
  {
    path: '/protophobia/kwak-dohoon',
    name: 'kwak-dohoon',
    component: KwakDoHoon
  },
  {
    path: '/protophobia/yun-sohye',
    name: 'yun-sohye',
    component: YunSoHye
  },
  {
    path: '/protophobia/jeong-gyeongmo',
    name: 'jeong-gyeongmo',
    component: JeongGyeongMo
  },
  {
    path: '/protophobia/kim-minseo',
    name: 'kim-minseo',
    component: KimMinSeo
  },
  {
    path: '/protophobia/kim-heeyoung',
    name: 'kim-heeyoung',
    component: KimHeeYoung
  },
  {
    path: '/protophobia/kim-jiin',
    name: 'kim-jiin',
    component: KimJiIn
  },
  {
    path: '/protophobia/lee-eunji',
    name: 'lee-eunji',
    component: LeeEunJi
  },
  {
    path: '/protophobia/youn-dohee',
    name: 'youn-dohee',
    component: YounDoHee
  },

  {
    path:'/OAK',
    name: 'OAK',
    component: OAKView
  },

  {
    path:'/bugreport',
    name: 'bugreport',
    component: bugreportView
  },
  {
    path: '/bugreport/lookbook',
    name: 'bugreport-lookbook',
    component: bugreportLookbookView
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
    path:'/bugreport/oh-seungmin',
    name: 'oh-seungmin',
    component: OhSeungMin
  },
  {
    path:'/bugreport/yoo-hayoung',
    name: 'yoo-hayoung',
    component: YooHaYoung
  }, 
  {
    path:'/bugreport/yu-jimin',
    name: 'yu-jimin',
    component: YuJiMin
  }, 
  {
    path:'/bugreport/ha-nagyeong',
    name: 'ha-nagyong',
    component: HaNaGyeong
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
