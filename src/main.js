import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Antd from 'ant-design-vue';

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

// Crie o roteador usando as rotas e o modo de histórico da web
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Crie a instância do aplicativo Vue e adicione o roteador a ela
const app = createApp(App).use(Antd);
app.use(router);

// Monte o aplicativo na div com id "app"
app.mount('#app');