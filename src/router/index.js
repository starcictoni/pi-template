import Vue from 'vue'
import VueRouter from 'vue-router'
import CharactersView from '../views/CharactersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: 'home',
    component: CharactersView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
