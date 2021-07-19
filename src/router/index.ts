import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
//引入在axios暴露出的clearPending函数
import {clearPending} from "@/utils/request"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue'),
        children: [
            {
                path: '',
                name: 'SystemHome',
                component: () => import(/* webpackChunkName: "SystemHome" */ '../views/systemHome.vue')
            },
            {
                path: 'set',
                name: 'Set',
                component: () => import(/* webpackChunkName: "Set" */ '../views/set/index.vue'),
                redirect: {
                    name: 'SiteSet'
                },
                children: [
                    {
                        path: 'siteSet',
                        name: 'SiteSet',
                        component: () => import(/* webpackChunkName: "SiteSet" */ '../views/set/siteSet.vue')
                    },
                    {
                        path: 'businessSet',
                        name: 'BusinessSet',
                        component: () => import(/* webpackChunkName: "BusinessSet" */ '../views/set/businessSet.vue')
                    },
                ]
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '../views/login.vue')
    },
    {
        path: "/404",
        name: "404",
        component: () => import(/* webpackChunkName: "404" */ '../views/errorPage/404.vue')
    },
    {path: "/:pathMatch(.*)*", redirect: "/404"}
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
