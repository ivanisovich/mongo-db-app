<script setup>
import MenuItem from "./MenuItem.vue";

const menuList = [
  {
    name: "Cappuccino",
    description: "with chocolate",
    category: "Cappuccino",
    image: "/src/assets/coffee1.png"
  },
  {
    name: "Cappuccino",
    description: "with oat milk",
    category: "Cappuccino",
    image: "/src/assets/coffee2.png"
  },
  {
    name: "Cappuccino",
    description: "regular",
    category: "Cappuccino",
    image: "/src/assets/coffee3.png"
  },
  {
    name: "Cappuccino",
    description: "with coconut milk",
    category: "Cappuccino",
    image: "/src/assets/coffee4.png"
  }
];
</script>

<template>
  <div class="list">
    <MenuItem v-for="(item, index) in menuList" :key="index" :itemInfo="item" />
  </div>
</template>

<style scoped>
    .list{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }
</style>
