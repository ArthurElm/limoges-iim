<script setup>
import { ref } from "vue"

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="ladiv">
    <h1 class="text-7xl text-secondary text-center pt-80">LIMOGES</h1>
  </div>
</template>

<style scoped></style>
