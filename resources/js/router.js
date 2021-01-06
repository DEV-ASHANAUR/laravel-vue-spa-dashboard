import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
Vue.use(Router);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '',
                name: 'dashboard',
                // component: Dashboard
                component: () => import('./views/Dashboard.vue'),
            },
            {
                path: 'category',
                name: 'categories',
                component: () => import('./views/Categories.vue'),
            },
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/Authentication/Register'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/Authentication/Login'),
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./views/Authentication/ResetPassword'),
    }


];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
