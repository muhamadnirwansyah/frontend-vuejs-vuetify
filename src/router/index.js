import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Questions from "@/pages/Questions.vue";

const routes = [
    { 
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/questions',
        name: 'Questions',
        component: Questions,
        meta: { requiresAuth: true}
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true},
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//guard
router.beforeEach((to,from,next) => {
    const isAuthenticated = localStorage.getItem('auth');
    if (to.meta.requiresAuth && !isAuthenticated){
        next('/login');
    }else{
        next()
    }
});

export default router;