import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import before from './beforeEach'

sessionStorage.setItem('token', '')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Livro', params: { name: 'Livro' } },
    children: [
      {
        path: '/livro',
        name: 'Livro',
        component: () => import('../views/pages/Livro/list/Livro.vue')
      },
      {
        path: '/formlivro',
        name: 'FormLivro',
        component: () => import('../views/pages/Livro/form/Livro.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../security/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(before)

export default router
