import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const Student = () => import(/* webpackChunkName: "student" */ '@/views/Student.vue');
const Admin = () => import(/* webpackChunkName: "admin" */ '@/views/Admin.vue');

const router = createRouter({
    history: createWebHistory((process.env as Record<string, string>).BASE_URL),
    linkActiveClass: '',
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/student',
            name: 'Student',
            component: Student,
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
        },
    ],
});

export default router;
