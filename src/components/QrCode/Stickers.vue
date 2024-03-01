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
  <div class="stickers-wrapper">
    <div class="stickers">
      <div
        v-for="(item, index) in stickersArray"
        :key="index"
        class="stickers__item"
      >
        <img
          v-if="index < props.stickers"
          src="../../assets/coffe-sticker.svg"
          alt=""
        />
        <img v-else src="../../assets/coffe-sticker-empty.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stickers-wrapper{
  background: white;
  padding: 30px;
    
  border-radius: 12px;
  margin: 0 auto;
  margin-top: -40px;
  width: fit-content;
}

.stickers {
  display: flex;
  width: fit-content;
 

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }
}
</style>
