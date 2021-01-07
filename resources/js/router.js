import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import * as auth from './services/auth_service';

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
        ],
        beforeEnter(to, from, next){
            if(!auth.isLoggedIn()){
                next('/login');
            }else{
                next();
            }
        }
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
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
