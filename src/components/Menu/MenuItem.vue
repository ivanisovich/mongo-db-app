<script setup>

const Props = defineProps({
  itemInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>

  <article class="item">
    <img class="item__image" :src="Props.itemInfo.photo" alt="" />
    <div class="item__text">
      <h3 class="item__title">{{Props.itemInfo.name}}</h3>
      <p class="item__description">{{Props.itemInfo.description}}</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.item {
  background: white;
  border-radius: 16px;
  max-width: 160px;
}

.item__image {
  width: 100%;
  border-radius: 16px;
  height: 130px;
}

.item__text {
  padding: 12px;
}

.item__title {
  color: #2f2d2c;
  font-size: 16px;
}

.item__description {
  color: #9b9b9b;
  font-size: 12px;
}
</style>
