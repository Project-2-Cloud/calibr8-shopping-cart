import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../Login.vue'
import Products from '../views/Products.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/loginwithtoken', name: 'loginwithtoken', component: Login },
  { path: '/Products', name: 'Products', component: Products },
  { path: '/checkout', name: 'checkout', component: Checkout }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

