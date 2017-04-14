import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../../domains/routers'

Vue.use(VueRouter)

const router = new VueRouter({
  routes // short for routes: routes
})

export default router
