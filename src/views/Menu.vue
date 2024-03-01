<script setup>
import { ref, onMounted } from "vue";
import MenuList from "@/components/Menu/MenuList.vue";
import NewItemPopup from "@/components/Menu/NewItemPopup.vue";
import { useUserStore } from "../store/app";
import MenuService from "../axios/MenuServices";
import Header from "@/components/Common/Header.vue";

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
  <v-col
    v-if="userStore.userInfo.role === 'admin'"
    @click="showPopup = !showPopup"
    cols="auto"
    class="add-button"
  >
    <v-btn
      density="compact"
      :icon="showPopup ? 'mdi-minus' : 'mdi-plus'"
    ></v-btn>
  </v-col>

  <Header title="Menu" />

  <img class="promo" src="../assets/menu-bg.png" alt="" />

  <MenuList :menu-items="MenuItems" />
  <NewItemPopup @close-popup="closePopup" v-if="showPopup === true" />
</template>

<style lang="scss" scoped>
.add-button {
  position: absolute;
  right: 0px;
}

.promo {
  border-radius: 16px;
  margin: 0 auto;
  display: block;
  margin-top: -40px;
  margin-bottom: 20px;
}
</style>
