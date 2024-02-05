<script setup>
import QrCode from "../components/QrCode/QrCode"
import { useUserStore } from '../store/app';

const userStore = useUserStore()
</script>

<template>
{{userStore.userInfo}}
    <span>{{userStore.userInfo.email}}</span>
    <QrCode :qrCode="userStore.userInfo.qrCode" />

</template>
