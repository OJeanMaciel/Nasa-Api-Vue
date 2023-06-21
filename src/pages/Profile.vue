<template>
    <div class="profile-container">
      <h2>Perfil de Usuário</h2>
      
      <div class="profile-form">
        <div class="profile-photo">
            <img src="../../src/assets/astronauta2.png" alt="Foto de Perfil" />
        </div>
        
        <label for="email">E-mail:</label>
        <input type="text" id="email" v-model="email">
        
        <label for="password">Nova Senha:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <a-button class="button" type="primary">Confirmar</a-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    }
  };
  </script>
  
  <style scoped>
  .profile-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: #fff;
    margin-top: 100px;
    background-color: #131212;
  }
  
  .profile-container h2 {
    text-align: center;
  }
  
  .profile-form {
    margin-top: 20px;
  }
  
  .profile-form label {
    display: block;
    margin-bottom: 5px;
    margin-top: 20px;
  }
  
  .profile-form input[type="text"],
  .profile-form input[type="password"] {
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  
  .profile-form .profile-photo {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .profile-form .profile-photo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #ccc;
    object-fit: cover;
  }
  
  .button{
    margin-top: 20px;
  }

  </style>
  