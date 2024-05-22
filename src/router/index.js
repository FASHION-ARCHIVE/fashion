
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
import leehansolView from '@/views/teams/OAK/members/1/leehansolView.vue'
import yunseonmiView from '@/views/teams/OAK/members/2/yunseonmiView.vue'
import xiesiqiView from '@/views/teams/OAK/members/3/xiesiqiView.vue'
import zhanghanView from '@/views/teams/OAK/members/4/zhanghanView.vue'
import huangzinuoView from '@/views/teams/OAK/members/5/huangzinuoView.vue'
import sonyeajinView from '@/views/teams/OAK/members/6/sonyeajinView.vue'
import jungyeonsooView from '@/views/teams/OAK/members/7/jungyeonsooView.vue'
import limdohaView from '@/views/teams/OAK/members/8/limdohaView.vue'
import panmingyuView from '@/views/teams/OAK/members/9/panmingyuView.vue'
import songzhaodiView from '@/views/teams/OAK/members/10/songzhaodiView.vue'
import jixuexinView from '@/views/teams/OAK/members/11/jixuexinView.vue'

import ANACHRONIAView from '@/views/teams/ANACHRONIA/ANACHRONIAView.vue'
import kimgyubinView from '@/views/teams/ANACHRONIA/memebers/1/kimgyubinView.vue'
import kwonnawonView from '@/views/teams/ANACHRONIA/memebers/2/kwonnawonView.vue'
import parkhyevinView from '@/views/teams/ANACHRONIA/memebers/3/parkhyevinView.vue'
import elinaView from '@/views/teams/ANACHRONIA/memebers/4/elinaView.vue'
import jinsonghanyiView from '@/views/teams/ANACHRONIA/memebers/5/jinsonghanyiView.vue'
import liuhaihongView from '@/views/teams/ANACHRONIA/memebers/6/liuhaihongView.vue'
import ningyiyiView from '@/views/teams/ANACHRONIA/memebers/7/ningyiyiView.vue'
import nilinView from '@/views/teams/ANACHRONIA/memebers/8/nilinView.vue'
import zhangxueyingView from '@/views/teams/ANACHRONIA/memebers/9/zhangxueyingView.vue'

import LoftView from '@/views/teams/Loft/LoftView.vue'
import wangchewonView from '@/views/teams/Loft/members/1/wangchewonView.vue'
import yoominahView from '@/views/teams/Loft/members/2/yoominahView.vue'
import kimhajinView from '@/views/teams/Loft/members/3/kimhajinView.vue'
import parkyebinView from '@/views/teams/Loft/members/4/parkyebinView.vue'
import sunweiwanView from '@/views/teams/Loft/members/5/sunweiwanView.vue'
import seeyihyunView from '@/views/teams/Loft/members/6/seeyihyunView.vue'
import yangjieunView from '@/views/teams/Loft/members/7/yangjieunView.vue'
import yinlanView from '@/views/teams/Loft/members/8/yinlanView.vue'
import jangyeajinView from '@/views/teams/Loft/members/9/jangyeajinView.vue'
import jungsomgyulView from '@/views/teams/Loft/members/10/jungsomgyulView.vue'

import bugreportView from '@/views/teams/bugreport/bugreportView.vue'
import bugreportLookbookView from '@/views/teams/bugreport/bugreportLookbookView.vue'
import protophobiaLookbookView from '@/views/teams/protophobia/protophobiaLookbookView.vue'
import LoftLookbookView from '@/views/teams/Loft/LoftLookbookView.vue'
import OAKLookbookView from '@/views/teams/OAK/OAKLookbookView.vue'
import DejavuLookbookView from '@/views/teams/Dejavu/DejavuLookbookView.vue'
import ANACHRONIALookbookView from '@/views/teams/ANACHRONIA/ANACHRONIALookbookView.vue'

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

import DejavuView from '@/views/teams/Dejavu/DejavuView.vue'

import leesujinView from '@/views/teams/Dejavu/members/1/leesujinView.vue'
import chosoojinView from '@/views/teams/Dejavu/members/2/chosoojinView.vue'
import leelokyinView from '@/views/teams/Dejavu/members/3/leelokyinView.vue'
import inouerinView from '@/views/teams/Dejavu/members/4/inouerinView.vue'
import yimsoyoonView from '@/views/teams/Dejavu/members/5/yimsoyoonView.vue'
import leechaeonView from '@/views/teams/Dejavu/members/6/leechaeonView.vue'

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
    path: '/secret/runway',
    name: 'runway',
    component: RunwayView
  },
  {
    path: '/showinfo',
    name: 'showinfo',
    component: ShowinfoView
  },
  {
    path: '/secret/behind',
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
    path: '/protophobia/lookbook',
    name: 'protophobia-lookbook',
    component: protophobiaLookbookView
  },

  {
    path:'/OAK',
    name: 'OAK',
    component: OAKView
  },
  {
    path:'/OAK/lee-hansol',
    name: 'lee-hansol',
    component: leehansolView
  },
  {
    path:'/OAK/yunseonmi',
    name: 'yunseonmi',
    component: yunseonmiView
  },
  {
    path:'/OAK/xiesiqi',
    name: 'xiesiqi',
    component: xiesiqiView
  },
  {
    path:'/OAK/zhanghan',
    name: 'zhanghan',
    component: zhanghanView
  },
  {
    path:'/OAK/huangzinuo',
    name: 'huangzinuo',
    component: huangzinuoView
  },
  {
    path:'/OAK/sonyeajin',
    name: 'sonyeajin',
    component: sonyeajinView
  },
  {
    path:'/OAK/jungyeonsoo',
    name: 'jungyeonsoo',
    component: jungyeonsooView
  },
  {
    path:'/OAK/limdoha',
    name: 'limdoha',
    component: limdohaView
  },
  {
    path:'/OAK/panmingyu',
    name: 'panmingyu',
    component: panmingyuView
  },
  {
    path:'/OAK/songzhaodi',
    name: 'songzhaodi',
    component: songzhaodiView
  },
  {
    path:'/OAK/jixuexin',
    name: 'jixuexin',
    component: jixuexinView
  },
  {
    path: '/OAK/lookbook',
    name: 'OAK-lookbook',
    component: OAKLookbookView
  },  

  {
    path:'/ANACHRONIA',
    name: 'ANACHRONIA',
    component: ANACHRONIAView
  },
  {
    path:'/ANACHRONIA/kimgyubin',
    name: 'kimgyubin',
    component: kimgyubinView
  },
  {
    path:'/ANACHRONIA/kwonnawon',
    name: 'kwonawon',
    component: kwonnawonView
  },
  {
    path:'/ANACHRONIA/parkhyevin',
    name: 'parkhyevin',
    component: parkhyevinView
  },
  {
    path:'/ANACHRONIA/elina',
    name: 'elina',
    component: elinaView
  },
  {
    path:'/ANACHRONIA/jinsonghanyi',
    name: 'jinsonghanyi',
    component: jinsonghanyiView
  },
  {
    path:'/ANACHRONIA/liuhaihong',
    name: 'liuhaihong',
    component: liuhaihongView
  },
  {
    path:'/ANACHRONIA/ningyiyi',
    name: 'ningyiyi',
    component: ningyiyiView
  },
  {
    path:'/ANACHRONIA/nilin',
    name: 'nilin',
    component: nilinView
  },
  {
    path:'/ANACHRONIA/zhangxueying',
    name: 'zhangxueying',
    component: zhangxueyingView
  },
  {
    path: '/ANACHRONIA/lookbook',
    name: 'ANACHRONIA-lookbook',
    component: ANACHRONIALookbookView
  },

  {
    path:'/Loft',
    name: 'Loft',
    component: LoftView
  },
  {
    path:'/Loft/wangchewon',
    name: 'wangchewon',
    component: wangchewonView
  },
  {
    path:'/Loft/yoominah',
    name: 'yoominah',
    component: yoominahView
  },
  {
    path:'/Loft/kimhajin',
    name: 'kimhajin',
    component: kimhajinView
  },
  {
    path:'/Loft/parkyebin',
    name: 'parkyebin',
    component: parkyebinView
  },
  {
    path:'/Loft/sunweiwan',
    name: 'sunweiwan',
    component: sunweiwanView
  },
  {
    path:'/Loft/seeyihyun',
    name: 'seeyihyun',
    component: seeyihyunView
  },
  {
    path:'/Loft/yangjieun',
    name: 'yangjieun',
    component: yangjieunView
  },
  {
    path:'/Loft/yinlan',
    name: 'yinlan',
    component: yinlanView
  },
  {
    path:'/Loft/jangyeajin',
    name: 'jangyeajin',
    component: jangyeajinView
  },
  {
    path:'/Loft/jungsomgyul',
    name: 'jungsomgyul',
    component: jungsomgyulView
  },
  {
    path: '/Loft/lookbook',
    name: 'Loft-lookbook',
    component: LoftLookbookView
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
    path:'/Dejavu',
    name: 'Dejavu',
    component: DejavuView
  },
  {
    path:'/Dejavu/leesujin',
    name: 'leesujin',
    component: leesujinView
  },
  {
    path:'/Dejavu/chosoojin',
    name: 'chosoojin',
    component: chosoojinView
  },
  {
    path:'/Dejavu/leeokyin',
    name: 'leeokyin',
    component: leelokyinView
  },
  {
    path:'/Dejavu/inoue-rin',
    name: 'inoue-rin',
    component: inouerinView
  },
  {
    path:'/Dejavu/yimsoyoon',
    name: 'yimsoyoon',
    component: yimsoyoonView
  },
  {
    path:'/Dejavu/leechaeon',
    name: 'leechaeon',
    component: leechaeonView
  },
  {
    path: '/Dejavu/lookbook',
    name: 'Dejavu-lookbook',
    component: DejavuLookbookView
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
