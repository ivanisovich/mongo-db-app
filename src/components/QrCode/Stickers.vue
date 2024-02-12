<script setup>
const stickersArray = [0, 1, 2, 3, 4, 5];

const props = defineProps({
  stickers: {
    type: Number,
    default: () => 0,
  },
});
</script>

<template>
  <div class="stickers">
    <div
      v-for="(item, index) in stickersArray"
      :key="index"
      class="stickers__item"
    >
      <v-icon size="x-large" v-if="index < props.stickers"
        >mdi-checkbox-marked-outline</v-icon
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.stickers {
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 130px;
  gap: 1px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid black;
  }
}
</style>
