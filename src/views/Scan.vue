<script setup>
import { ref, onMounted } from "vue";
import { Html5QrcodeScanner } from "html5-qrcode";
import AdminServices from "../axios/AdminServices";

const scannedContent = ref("");

function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code matched = ${decodedText}`, decodedResult);
  scannedContent.value = decodedText;
  AdminServices.scanQr({email: decodedText})
}

function onScanFailure(error) {
  console.warn(`Code scan error = ${error}`);
}

onMounted(() => {
  const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    false
  );
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
});

</script>

<template>
  <div id="reader" style="width: 600px;"></div>
  <div>Scanned Content: {{ scannedContent }}</div>
</template>

<style scoped>
.qr-scanner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
