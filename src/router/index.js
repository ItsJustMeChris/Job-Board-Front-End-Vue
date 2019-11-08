import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Companies from '../views/Companies.vue';
import Jobs from '../views/Jobs.vue';
import Resumes from '../views/Resumes.vue';
import Pricing from '../views/Pricing.vue';
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
    path: '/companies',
    name: 'companies',
    component: Companies,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
    props: { isCreating: false },
  },
  {
    path: '/jobs/new',
    name: 'jobsnew',
    component: Jobs,
    props: { isCreating: true },
  },
  {
    path: '/resumes',
    name: 'resumes',
    component: Resumes,
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing,
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
