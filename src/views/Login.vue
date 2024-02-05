<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "../store/app";
import UserService from "../axios/UserServices";

const loginData = ref({
  email: "",
  password: "",
});

const visible = ref(false);

const userStore = useUserStore();

onMounted(() => {
  UserService.checkAuthentication();
});

const login = async () => {
  let response = await UserService.login(loginData.value)

  if(response.role){
    router.push({ path: "menu" });
  } else {
    alert(response.message)
  }
};
</script>

<template>
  <div>
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
        <form @submit.prevent="login">
          <div class="text-subtitle-1 text-medium-emphasis">Account</div>

          <v-text-field
            v-model="loginData.email"
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
            v-model="loginData.password"
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
              Warning: After 3 consecutive failed login attempts, you account
              will be temporarily locked for three hours. If you must login now,
              you can also click "Forgot login password?" below to reset the
              login password.
            </v-card-text>
          </v-card>

          <v-btn
            class="login-button"
            block
            size="large"
            variant="tonal"
            type="submit"
          >
            Log In
          </v-btn>

          <v-card-text class="text-center">
            <router-link class="text-blue text-decoration-none" to="/register">
              Register<v-icon icon="mdi-chevron-right"></v-icon>
            </router-link>
          </v-card-text>
        </form>
      </v-card>
    </div>
  </div>
</template>

<style></style>
