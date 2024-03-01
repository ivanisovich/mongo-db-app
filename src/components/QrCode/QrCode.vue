<script setup>
const props = defineProps({
  qrCode: {
    type: String,
    default: () => "",
  },
});
</script>

<template>
  <img class="qr-code" :src="props.qrCode" alt="" />
</template>

<style >
.qr-code {
  display: block;
  margin: 0 auto;
  margin-top: 40px;
}
</style>