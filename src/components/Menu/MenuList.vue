<script setup>
import MenuItem from "./MenuItem.vue";

const props = defineProps({
  menuItems: Array
});

</script>

<template>
   <div class="sceleton" v-if="menuItems.length <= 0">
      <v-skeleton-loader width="150px" type="card"></v-skeleton-loader>
      <v-skeleton-loader width="150px" type="card"></v-skeleton-loader>
      <v-skeleton-loader width="150px" type="card"></v-skeleton-loader>
      <v-skeleton-loader width="150px" type="card"></v-skeleton-loader>
    </div>
  <div class="list">
    <MenuItem v-for="(item, index) in menuItems" :key="index" :itemInfo="item" />
  </div>
</template>

<style scoped>
    .list{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }

    .sceleton{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
</style>
