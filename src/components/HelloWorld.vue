<script setup>

import Configurator from "./Configurator.vue";
import { ref } from "vue";

defineProps({
  msg: String,
});
const arr = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/259155/THREE_crate1.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/259155/THREE_crate2.jpg",
];
const count = ref(0);
</script>

<template>

</template>

<style scoped></style>
