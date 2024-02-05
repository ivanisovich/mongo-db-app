<script setup>
import {ref} from "vue"
import MenuList from "@/components/Menu/MenuList.vue";
import NewItemPopup from "@/components/Menu/NewItemPopup.vue"
import { useUserStore } from "../store/app";


const showPopup = ref(false)
const userStore = useUserStore();

</script>

<template>

  <div class="header">
    <h1 class="header__title">Coffe app</h1>
    <v-btn v-if="userStore.userInfo.role === 'admin'" @click="showPopup = !showPopup">+</v-btn>
  </div>
  <MenuList />
  <NewItemPopup v-if="showPopup === true"/>
</template>

<style lang="scss" scoped>
@use "../styles/settings";
.header__title {
  color: white;
  font-weight: 500;
}

.header {
  background: #0f9565;
  height: 50px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  @include settings.container;
}
</style>
