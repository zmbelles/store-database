import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/LoginPage.vue';
import About from './components/AboutPage.vue';
import Contact from './components/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
