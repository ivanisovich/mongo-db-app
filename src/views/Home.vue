<template>
    <div class="header">
      <h1 class="header__title">Coffe app</h1>
    </div>
    <MenuList />
</template>

<script setup>
import MenuList from "@/components/Menu/MenuList.vue";
</script>

<style lang="scss" scoped>
  @use '../styles/settings';
  .header__title{
    color: white;
    font-weight: 500;
  }

  .header{

    background: #0f9565;
    height: 50px;
    @include settings.container
  }
</style>
