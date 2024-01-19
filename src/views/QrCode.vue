<script setup>
import QrCode from "../components/QrCode/QrCode"
import { useUserStore } from '../store/app';

const userStore = useUserStore()
</script>

<template>
    <QrCode :qrCode="userStore.userInfo.qrCode" />

</template>
