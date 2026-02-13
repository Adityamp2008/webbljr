import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../view/HomeView.vue'
import KeduaView from '../view/dua.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      children : [
        {
          path : '',
          component : HomeView,
        },
        {
        path: 'kedua',
        component: KeduaView,
        },
      ]
    }
  ],
})

export default router
