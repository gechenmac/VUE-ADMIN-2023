import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout'


Vue.use(Router)

export const constantRouterMap = [{
    path: '/login',
    component: () => import('@/pages/login/index'),
    hidden: true
},{
    path: '/Home',
    component: () => import('@/pages/Home/index'),
    name: 'Home',
},
{
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: 'dashboard',
        //   meta: {
        //     title: 'dashboard',
        //     icon: 'dashboard',
        //     noCache: true
        //   }
    }]
},
{
    path: '/demo',
    component: Layout,
    redirect: 'dashboard',
    children: [{
        path: 'demo',
        component: () => import('@/pages/demo/index'),
        name: 'demo',
        //   meta: {
        //     title: 'dashboard',
        //     icon: 'dashboard',
        //     noCache: true
        //   }
    },
    ]
}
]

export default new Router({
    // mode: 'history', // 需要服务支持 require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})