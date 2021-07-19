import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
//引入在axios暴露出的clearPending函数
import { clearPending } from "@/utils/request"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'SystemHome',
        component: () => import(/* webpackChunkName: "SystemHome" */ '../views/SystemHome.vue')
      },
      {
        path: 'navSet',
        name: 'NavSet',
        component: () => import(/* webpackChunkName: "NavSet" */ '../views/NavSet.vue')
      },
      {
        path: 'businessSet',
        name: 'BusinessSet',
        component: () => import(/* webpackChunkName: "BusinessSet" */ '../views/BusinessSet.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //在跳转路由之前，先清除所有的请求
  clearPending()
  next()
})

export default router
