import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../view/HomeView.vue'
import LoginView from '../view/auth/login.vue'
import belajar from '../view/materi/belajar.vue'
import cek from '../view/cek/cek.vue'

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
        path: 'login/adminpanel',
        component: LoginView,
        },
        {
        path: 'belajar/:materi',
        component: belajar,
        },
                {
        path: 'cek',
        component: cek,
        },
      ]
    }
  ],
})

export default router
