import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', name: '->login', redirect: '/login'},
    {path: '/login', name: '->login', component: () => import('../views/login.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router