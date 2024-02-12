<script setup>
import { ref, computed, onMounted } from "vue";
import MenuItem from "./MenuItem.vue";

const props = defineProps({
  menuItems: Array,
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
// Использование console.log вне функции или хука жизненного цикла может не отрабатывать ожидаемо из-за реактивности
// Рассмотрите возможность проверки внутри onMounted или watchEffect для отладки
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
      <v-chip icon="mdi-blinds" @click="blinds"> Close blinds </v-chip>
      <v-chip icon="mdi-blinds" @click="blinds"> Close blinds </v-chip>
    </div>

    <div
      class="category"
      v-for="(items, category) in groupedData"
      :key="category"
    >
      <h2 class="category__title">{{ category }}</h2>

      <div class="category__inner">
        <MenuItem v-for="item in items" :key="item._id" :itemInfo="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.menu {
  padding-left: 20px;
  padding-right: 20px;
}

.filter {
  padding-bottom: 20px;
  padding-top: 20px;
}

.category {
  margin-bottom: 20px;

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
