<script setup>
import LoadingPage from './components/LoadingPage.vue'
import { ref, onMounted } from 'vue';

const loading = ref(true);

onMounted(() => {
  // Délai de chargement
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<template>
    <LoadingPage msg="Vite + Vue" v-if="loading" />
    <div v-else>
      Test redirection
    </div>
</template>

<style scoped>
</style>
