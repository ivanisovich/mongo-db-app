<script setup>
import QrCode from "../components/QrCode/QrCode";
import { useUserStore } from "../store/app";
import Stickers from "../components/QrCode/Stickers.vue"
import Header from "@/components/Common/Header.vue";

const userStore = useUserStore();
</script>

<template>
  <Header title="Rewards"></Header>
  <Stickers :stickers="userStore.userInfo.stickers"/>
  <QrCode :qrCode="userStore.userInfo.qrCode" />
</template>
