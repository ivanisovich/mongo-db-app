<script setup>
import QrCode from "../components/QrCode/QrCode";
import { useUserStore } from "../store/app";
import Stickers from "../components/QrCode/Stickers.vue"

const userStore = useUserStore();
</script>

<template>
  <Stickers :stickers="userStore.userInfo.stickers"/>
  <QrCode :qrCode="userStore.userInfo.qrCode" />
</template>
