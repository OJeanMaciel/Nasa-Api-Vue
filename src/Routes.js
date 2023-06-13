import Home from './pages/Home.vue';
import System from './pages/System.vue';
import About from './pages/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/system',
    name: 'System',
    component: System
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

export default routes;