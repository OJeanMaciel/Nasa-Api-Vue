<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './Routes';

const router = createRouter({
  history: createWebHistory(),
  routes
});
</script>

<template>
  <div>
    <Navbar />
    <div class="space"></div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>
</style>