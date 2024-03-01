<script setup>
import { ref } from "vue";
import { useUserStore } from "../../store/app";
const userStore = useUserStore();

const currentPage = ref(0);
</script>

<template>
  <v-app-bar flat>
    <v-layout class="overflow-visible" style="height: 56px">
      <v-bottom-navigation
        :elevation="0"
        v-model="currentPage"
        active
        color="primary"
      >
        <router-link class="link" to="/menu">
          <v-btn @click="currentPage = 0">
            <v-icon>mdi-coffee</v-icon>
          </v-btn>
        </router-link>

        <router-link
          v-if="userStore.userInfo.role === 'admin'"
          class="link"
          to="/scan"
        >
          <v-btn @click="currentPage = 1">
            <v-icon>mdi-qrcode-scan</v-icon>
          </v-btn>
        </router-link>

        <router-link class="link" to="/profile">
          <v-btn @click="currentPage = 2">
            <v-icon>mdi-qrcode</v-icon>
          </v-btn>
        </router-link>
      </v-bottom-navigation>
    </v-layout>
  </v-app-bar>
</template>

<style lang="scss">
.link {
  color: unset;
}

.v-toolbar {
  bottom: 0px !important;
  top: unset !important;
}
</style>
