<template>
  <div>
    <!-- Форма регистрации -->
    <form @submit.prevent="register">
      <input
        type="text"
        v-model="registerData.username"
        placeholder="Username"
      />
      <input
        type="password"
        v-model="registerData.password"
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>

    <!-- Форма логина -->
    <form @submit.prevent="login">
      <input type="text" v-model="loginData.username" placeholder="Username" />
      <input
        type="password"
        v-model="loginData.password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const registerData = ref({
  username: "",
  password: "",
});

const loginData = ref({
  username: "",
  password: "",
});

const register = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3001/register",
      registerData.value
    );
    console.log(response.data);
    // Обработка ответа регистрации
  } catch (error) {
    console.error(error);
    // Обработка ошибок регистрации
  }
};

const login = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3001/login",
      loginData.value
    );
    console.log(response.data);
    // Обработка ответа логина
    // Возможно, сохранение токена аутентификации
  } catch (error) {
    console.error(error);
    // Обработка ошибок логина
  }
};
</script>
