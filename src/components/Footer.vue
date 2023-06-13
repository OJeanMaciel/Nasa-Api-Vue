<script setup>
import { LinkedinOutlined, FacebookOutlined, InstagramOutlined  } from '@ant-design/icons-vue';
</script>

<template>
  <div class="containerFooter">
    <div>
      <a class="icons" href="https://github.com/OJeanMaciel" target="_blank">
        <LinkedinOutlined />
      </a>
      <a class="icons" href="https://www.facebook.com/jean.kevin.18/" target="_blank">
        <FacebookOutlined />
      </a>
      <a class="icons" href="https://www.instagram.com/jean.maciel_/" target="_blank">
        <InstagramOutlined />
      </a>
    </div>
  </div>
</template>

<style scoped>
.containerFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #131212;
  padding: 10px;
  text-align: center;
  border-top: 5px solid #15418c;
}
p {
  color: white;
}
.icons {
  color: white;
  font-size: 30px;
  margin: 15px;
}

.icons:hover {
  cursor: pointer;
  color: #FFBB33;
}
</style>
