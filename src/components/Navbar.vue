<script setup>
  import logo from '../assets/logo.png';
  import { UserOutlined } from '@ant-design/icons-vue';

</script>

<template>
  <nav class="navbar">
    <img :src="logo" alt="logo" />
    <div>
      <ul class="list">
        <li>
          <router-link class="item" to="/">Marte</router-link>
        </li>
        <li>
          <router-link class="item" to="/system">Aeronaves</router-link>
        </li>
        <li>
          <router-link class="item" to="/about">Sobre</router-link>
        </li>
        <li>
          <router-link class="item" to="/login">
            <user-outlined />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #131212;
  padding: 1em;
  border-bottom: 5px solid #15418c;
}

img {
  width: 82px;
  height: 82px;
}

.min-height {
    min-height: calc(100vh - 200px);
}

.start {
    justify-content: flex-start;
}

.column {
    flex-direction: column;
    justify-content: flex-start;
}

.list {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
}

.item {
  margin-right: 1em;
  color: #fff;
  text-decoration: none;
}

.item:hover {
  cursor: pointer;
  color: #ffbb33;
}
</style>
