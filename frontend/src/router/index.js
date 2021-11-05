import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Intake from '../views/Intake.vue';

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
    path: '/createevent',
    name: 'createevent',
    component: () => import('../components/CreateEvent')
  },
  {
    path: '/createindividual',
    name: 'createindividual',
    component: () => import('../components/CreateIndividual')
  },
  {
    path: '/viewevent',
    name: 'viewevent',
    component: () => import('../components/ListEvents')
  },
  {
    path: '/viewindividual',
    name: 'viewindividual',
    component: () => import('../components/ListIndividuals')
  },
  {
    path: '/editevent/:id',
    name: 'edit-event',
    component: () => import('../components/EditEvent')
  },
  {
    path: '/editindividual/:id',
    name: 'edit-individual',
    component: () => import('../components/EditIndividual')
  },
  {
    path: '/summarybyevent/',
    name: 'summary',
    component: () => import('../components/SummaryEvent')
  },
  {
    path: '/summarybyzip/',
    name: 'summarybyzip',
    component: () => import('../components/ServiceZip')
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