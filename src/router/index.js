import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import FourOhFour from '../views/404.vue';
import Auth from '../views/Auth.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Auth,
    props: { action: 'login' },
  },
  {
    path: '/register',
    name: 'register',
    component: Auth,
    props: { action: 'register' },
  },
  {
    path: '*',
    name: '404',
    component: FourOhFour,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
