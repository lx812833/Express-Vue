import Vue from 'vue'
import Router from 'vue-router'
// nprogress 页面加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ './views/Index.vue'),
      children: [
        {
          path: "/index",
          name: 'home',
          component: () => import(/* webpackChunkName: "index" */ './views/home/Home.vue'),
        },
        {
          path: "/home",
          name: "home",
          component: () => import(/* webpackChunkName: "index" */ './views/home/Home.vue'),
        },
        {
          path: "/userInfo",
          name: "userInfo",
          component: () => import(/* webpackChunkName: "index" */ './views/userInfo/UserInfo.vue'),
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/register/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login/Login.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "error" */ './views/error/404.vue')
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.TOKEN ? true : false;
  if (to.path === "/login" || to.path === "/register") {
    next()
  } else {
    isLogin ? next() : next("/login")
  }
  NProgress.start()
})

router.afterEach(route => {
  NProgress.done()
})

export default router;