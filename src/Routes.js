import Home from './pages/Home.vue';
import System from './pages/System.vue';
import Profile from './pages/Profile.vue';
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
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

export default routes;