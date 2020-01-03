import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/views/home')
const recommend = () => import('@/views/recommend')
const dynamic = () => import('@/views/dynamic')
const mine = () => import('@/views/mine')
const ListDetail = () => import('@/views/list-detail')

import Player from '@/views/player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      meta: {
        keepAlive: true,
        title: '音乐馆'
      }
    },
    {
      path: '/recommend',
      component: recommend,
      meta: {
        keepAlive: true,
        title: '推荐'
      }
    },
    {
      path: '/dynamic',
      component: dynamic,
      meta: {
        keepAlive: true,
        title: '动态'
      }
    },
    {
      path: '/mine',
      component: mine,
      meta: {
        keepAlive: true,
        title: '我的'
      }
    },
    {
      path: '/list-detail/:id',
      component: ListDetail,
      meta: {
        keepAlive: false,
        title: '歌单详情'
      }
    },
    {
      path: '/player',
      component: Player,
      meta: {
        keepAlive: false,
        title: ''
      }
    }
  ]
})
