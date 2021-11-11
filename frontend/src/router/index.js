import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Intake from '../views/Intake.vue';
import Referrals from '../views/Referrals.vue';

var routes = [
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
    path: '/createindividual',
    name: 'createindividual',
    component: () => import('../components/CreateIndividual')
  },
  {
    path: '/ListIndividuals',
    name: 'ListIndividuals',
    component: () => import('../components/ListIndividuals')
  },
  {
    path: '/viewindividual',
    name: 'viewindividual',
    component: () => import('../components/ListIndividuals')
  },
  {
    path: '/editindividual/:id',
    name: 'edit-individual',
    component: () => import('../components/EditIndividual')
  },
  {
    path: '/atthisevent/',
    name: 'atthisevent',
    component: () => import('../components/IndividualAtEvent')
  }
];

const router = createRouter({
  mode: 'hash',
  history: createWebHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
})

export default router