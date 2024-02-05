<script setup>
const props = defineProps({
  qrCode: {
    type: String,
    default: () => (""),
  },
});

</script>

<template>
  <img :src="props.qrCode" alt="" />
</template>
