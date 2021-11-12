import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Intake from '../views/Intake.vue';

import Referrals from '../views/Referrals.vue';
import About from '@/views/About.vue'

var routes = [ //creating routes based on each .vue file for each page
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/intake',
    name: 'Intake',
    component: Intake
  },
  {
    path: '/referrals',
    name: 'Referrals',
    component: Referrals,
  },
  
  {
    path: '/ListIndividuals',
    name: 'ListIndividuals',
    component: () => import('../components/ListIndividuals') //importing the List Individuals component
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
 
];

const router = createRouter({
  mode: 'hash',
  history: createWebHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
})

export default router
