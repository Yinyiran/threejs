import { createRouter, createWebHistory } from 'vue-router'
import ThreeDemo from '../views/ThreeDemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ThreeDemo
    },

  ]
})

export default router
