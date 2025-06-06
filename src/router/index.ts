// router/index.js (create this file if you don't have it)
import { createRouter, createWebHistory } from 'vue-router';
// import HomePage from '../components/views/HomePage.vue'; // Create these dummy components
import AboutPage from '../components/views/AboutPage.vue';
// import ContactPage from '../components/views/ContactPage.vue';
// import ExperiencePage from '../components/views/ExperiencePage.vue';
// import DesignPage from '../components/views/DesignPage.vue';
// import NotFound from '../components/nav/NotFound.vue'; // Create a NotFound component

const routes = [
  { path: '/', name: 'Home', component: AboutPage },
  { path: '/about', name: 'About', component: AboutPage },
//   { path: '/contact', name: 'Contact', component: ContactPage },
//   { path: '/experience', name: 'Experience', component: ExperiencePage},
//   { path: '/design', name: 'Design', component: DesignPage },
//   { path: '/:notFound(.*)', component: NotFound } // Catch-all route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;