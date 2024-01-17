<template>
  <v-app-bar flat>
    <v-layout class="overflow-visible" style="height: 56px">
      <v-bottom-navigation
        :elevation="0"
        v-model="currentPage"
        active
        color="primary"
      >
        <router-link class="link" to="/">
          <v-btn @click="currentPage = 0">
            <v-icon>mdi-history</v-icon>
          </v-btn>
        </router-link>

        <router-link class="link" to="/profile">
          <v-btn @click="currentPage = 1">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </router-link>

        <router-link class="link" to="/qrcode">
          <v-btn @click="currentPage = 2">
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </router-link>
      </v-bottom-navigation>
    </v-layout>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const currentPage = ref(0);
</script>

<style lang="scss">
.link {
  color: unset;
}

.v-toolbar {
  bottom: 0px !important;
  top: unset !important;
}
</style>
