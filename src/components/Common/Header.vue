<script setup>
const props = defineProps({
 title: {
    type: String,
    default: () => (""),
  },
});
</script>

<template>
  <div class="header">
    <h1 class="header__title">{{props.title}}</h1>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/settings";

.header__title {
  color: white;
  font-weight: 500;
  margin-top: 10px;
  font-size: 25px;
  font-weight: 400;
  strong {
    color: black;
  }
}

.header {
  background: #0f9565;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @include settings.container;
}
</style>