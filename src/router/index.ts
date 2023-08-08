import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'rotate-box'
    },
    {
      path: '/rotate-box',
      name: 'rotate-box',
      component: () => import('@/views/rotate-box.vue'),
      meta: { title: '3D旋转盒子' }
    },
    {
      path: '/line',
      name: 'line',
      component: () => import('@/views/line.vue'),
      meta: { title: '线' }
    }
  ]
})

export default router
