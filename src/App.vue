<script setup>
import MainButton from './components/MainButton.vue'
import LogoLimoges from './components/logolimoges.vue'

</script>

<template>
  <div class="px-12 py-12">
    <div class="main">
      <div class="flex justify-between items-center mb-8">
        <LogoLimoges />
        <div>
          <MainButton svgFileName="cart" :buttonState="2">Panier</MainButton>
        </div>
      </div>
      <!-- 3D object & patterns -->
      <div class=" h-[65vh] bg-white relative">
        <!-- 3D object & patterns -->
        <!-- patterns -->
        <div class="h-4/5 w-20 bg-highlight absolute right-0 top-1/2 -translate-y-1/2"></div>
      </div>
      <div class=" pt-8 w-4/6 m-auto flex justify-center">
        <MainButton svgFileName="capture" :buttonState="2">Capturer</MainButton>
        <MainButton svgFileName="check" :buttonState="2" class="mx-5">Valider</MainButton>
        <MainButton svgFileName="shop" :buttonState="2">Ajouter au panier</MainButton>
      </div>
    </div>
  </div>
  <!--<HelloWorld msg="Vite + Vue" /> -->

</template>

<style scoped>
</style>
