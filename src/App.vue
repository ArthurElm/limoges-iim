<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import LogoLimoges from './components/LogoLimoges.vue'
import MainButton from './components/MainButton.vue'
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
      <!-- 3D object -->
      <div class=" h-[65vh] bg-white">
      </div>
      <div class=" pt-8 w-4/6 m-auto flex justify-center">
        <MainButton svgFileName="capture" :buttonState="2">Capturer</MainButton>
        <MainButton svgFileName="check" :buttonState="2" class="mx-4">Valider</MainButton>
        <MainButton svgFileName="shop" :buttonState="2">Ajouter au panier</MainButton>
      </div>
    </div>
  </div>
  <!--<HelloWorld msg="Vite + Vue" /> -->

</template>

<style scoped>
</style>
