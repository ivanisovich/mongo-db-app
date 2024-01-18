<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from '../store/app';
import UserService from '../axios/UserServices';

const registerData = ref({
  email: "",
  password: "",
});

const loginData = ref({
  email: "",
  password: "",
});

const userStore = useUserStore();

</script>

<template>

  <div>
    {{ userStore.userInfo }}
    <form @submit.prevent="UserService.register(registerData)">
      <input
        type="text"
        v-model="registerData.email"
        placeholder="Email"
      />
      <input
        type="password"
        v-model="registerData.password"
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>

    <form @submit.prevent="UserService.login(loginData)">
      <input type="text" v-model="loginData.email" placeholder="Email" />
      <input
        type="password"
        v-model="loginData.password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
