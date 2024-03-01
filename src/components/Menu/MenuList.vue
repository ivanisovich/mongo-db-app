<script setup>
import { ref, computed, onMounted } from "vue";
import MenuItem from "./MenuItem.vue";

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => ([]),
  },
});

const groupedData = computed(() => {
  const groups = {};
  // Изменено здесь: убрано .value после props.menuItems
  props.menuItems.forEach((item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
  });
  return groups;
});

console.log(groupedData.value);

const blinds = () => {};
</script>

<template>
  <section class="menu">
    <div class="sceleton" v-if="menuItems.length <= 0">
      <v-skeleton-loader width="150px" type="card"></v-skeleton-loader>
      <v-skeleton-loader width="150px" type="card"></v-skeleton-loader>
      <v-skeleton-loader width="150px" type="card"></v-skeleton-loader>
      <v-skeleton-loader width="150px" type="card"></v-skeleton-loader>
    </div>

    <div class="filter">
      <v-chip
        v-for="(items, category) in groupedData"
        :key="category"
        icon="mdi-blinds"
        @click="blinds"
      >
        <a class="filter__item" :href="'#' + category">{{ category }}</a>
      </v-chip>
    </div>

    <div
      class="category"
      v-for="(items, category) in groupedData"
      :key="category"
      :id="category"
    >
      <h2 class="category__title">{{ category }}</h2>

      <div class="category__inner">
        <MenuItem v-for="item in items" :key="item._id" :itemInfo="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/settings";

.filter {
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  gap: 10px;
  position: sticky;
  top: 0px;
  box-sizing: border-box;
  background: white;
  width: 100%;

  @include settings.container;
  &__item {
    text-decoration: none;
    color: black;
  }
}

.category {
  margin-bottom: 20px;
  @include settings.container;

  &__inner {
    display: flex;
    gap: 20px;
  }

  &__title {
    margin-bottom: 20px;
  }
}

.sceleton {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
