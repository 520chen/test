import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path:'/',
    redirect:'/search'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children:[
      {
        path:'/search',
        name:'Search',
        component:()=> import(/* webpackChunkName: "search" */ '../views/pages/search.vue')
      },
      {
        path:'/classify',
        name:'Classify',
        component:()=> import(/* webpackChunkName: "classify" */ '../views/pages/classify.vue')
      },
      {
        path:'/cart',
        name:'Cart',
        component:()=> import(/* webpackChunkName: "cart" */ '../views/pages/cart.vue')
      },
      {
        path:'/user',
        name:'User',
        component:()=> import(/* webpackChunkName: "user" */ '../views/pages/user.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
