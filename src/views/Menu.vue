<script setup>
import { ref, onMounted } from "vue";
import MenuList from "@/components/Menu/MenuList.vue";
import NewItemPopup from "@/components/Menu/NewItemPopup.vue";
import { useUserStore } from "../store/app";
import MenuService from "../axios/MenuServices";

const showPopup = ref(false);
const userStore = useUserStore();
const MenuItems = ref([]);

onMounted(async () => {
  const storedMenuItems = localStorage.getItem("menuItems");
  if (storedMenuItems) {
    MenuItems.value = JSON.parse(storedMenuItems);
  } else {
    let response = await MenuService.getItems();
    if (response.length > 0) {
      MenuItems.value = response;
      localStorage.setItem("menuItems", JSON.stringify(response));
    }
  }
});

const closePopup = () => {
  showPopup.value = false;
};
</script>

<template>
  <div class="header">
    <h1 class="header__title">Coffe app</h1>
    <v-col  v-if="userStore.userInfo.role === 'admin'"
      @click="showPopup = !showPopup" cols="auto">
      <v-btn density="compact" :icon="showPopup? 'mdi-minus':'mdi-plus'"></v-btn>
    </v-col>
  </div>
  <MenuList :menu-items="MenuItems" />
  <NewItemPopup @close-popup="closePopup" v-if="showPopup === true" />
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include settings.container;
}
</style>
