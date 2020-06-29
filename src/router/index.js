import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'What is Matt Lieber',
  component: Home,
  meta: {
    title: 'What is Matt Lieber?',
  }
}, ]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router