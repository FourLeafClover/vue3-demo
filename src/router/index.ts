import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from '@/views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import(/* webpackChunkName: "pinia" */ '../views/Pinia/indexView.vue'),
    meta: {
      title: '状态管理-pinia'
    }
  },
  {
    path: '/eventBus',
    name: 'eventBus',
    component: () => import(/* webpackChunkName: "eventBus" */ '../views/EventBusView/indexView.vue'),
    meta: {
      title: 'event-bus'
    }
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import(/* webpackChunkName: "slot" */ '../views/SlotView/indexView.vue'),
    meta: {
      title: '插槽'
    }
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import(/* webpackChunkName: "theme" */ '../views/ThemeView/indexView.vue'),
    meta: {
      title: '主题切换'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
