<template>
  <Splide
    :options="options"
    aria-label="My Favorite Images"
    class="slider"
    :has-track="false"
  >
    <SplideTrack>
      <SplideSlide>
        <img
          src="../assets/slider/texture2.jpg"
          @click="sendPath('/assets/textures/texture2.png')"
          class="size-20"
          alt="Sample 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="../assets/slider/texture3.jpg"
          class="size-20"
          alt="Sample 2"
          @click="sendPath('/assets/textures/texture3.png')"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="../assets/slider/texture4.jpg"
          class="size-20"
          alt="Sample 1"
          @click="sendPath('/assets/textures/texture4.png')"
        />
      </SplideSlide>
    </SplideTrack>
  </Splide>
</template>

<script setup>
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { defineEmits } from "vue";

const options = {
  direction: "ttb",
  height: "20rem",
  //   type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
  pagination: false,
  arrows: false,
};

const emit = defineEmits(["send-path"]);

const sendPath = (textures) => {
  // use a fonction in the parent component with the ref
  emit("send-path", textures);
};
</script>

<style scoped>
.slider {
  margin: auto -5% auto auto;
}
</style>
