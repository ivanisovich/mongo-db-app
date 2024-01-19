<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "../store/app";
import UserService from "../axios/UserServices";

const registerData = ref({
  email: "",
  password: "",
});

const loginData = ref({
  email: "",
  password: "",
});

const visible = ref(false)

const userStore = useUserStore();
</script>

<template>
  <div>
    <form @submit.prevent="UserService.register(registerData)">
      <input type="text" v-model="registerData.email" placeholder="Email" />
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

    <div>
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="0"
        max-width="448"
        rounded="lg"
      >
        <v-img
          class="mx-auto my-6"
          max-width="228"
          src="../assets/logo.png"
        ></v-img>
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password

          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will
            be temporarily locked for three hours. If you must login now, you
            can also click "Forgot login password?" below to reset the login
            password.
          </v-card-text>
        </v-card>

        <v-btn class="login-button" block size="large" variant="tonal">
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style></style>