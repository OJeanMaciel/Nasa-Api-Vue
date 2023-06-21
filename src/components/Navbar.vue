<script setup>
import logo from '../assets/logo.png';
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';


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
          <router-link class="item" to="/profile">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                <img class="userProfile" src="../../src/assets/astronauta2.png" alt="astronauta" />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
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

.icon {
  background-color: #15418c;
  font-size: 25px;
  border: 2px solid #ccc;
  border-radius: 50%;
  z-index: 1;
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

.userProfile {
  width: 65px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
</style>
