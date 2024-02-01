<template>
  <div class="slider-container w-full">
    <h1>
      Bienvenue dans l'atelier de<br />
      porcelaine virtuel de Limoges&nbsp;!
    </h1>
    <p>Commencez par choisir l'objet de poterie que vous souhaitez créer.</p>
    <Splide :options="splideOptions" ref="splideRef">
      <SplideSlide>
        <img
          src="../assets/slider/plate-slider.png"
          width="auto"
          height="auto"
          alt="Objet de poterie 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img src="../assets/slider/mug-slider.png" alt="Objet de poterie 2" />
      </SplideSlide>
      <!-- Ajoutez autant de SplideSlide que nécessaire pour vos images -->
    </Splide>
    <MainButton :buttonState="3" @click="sendPath">Choisir</MainButton>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref, onMounted } from "vue";
import MainButton from "./MainButton.vue";
import "@splidejs/vue-splide/css";

const emit = defineEmits(["send-modele"]);
const splideRef = ref(null); // Référence à l'instance de Splide
const modelPaths = ["/Tarelka.obj", "/mug.obj"]; // Chemins de vos modèles

const splideOptions = ref({
  type: "fade",
  rewind: true,
  pagination: false,
  arrows: true,
  // Ajoutez d'autres options selon vos besoins
});

onMounted(() => {
  let arrow = document.querySelectorAll(".splide__arrow > svg");

  arrow.forEach((e) => {
    e.style.fill = "#0d57ce";
  });
});

const sendPath = () => {
  if (splideRef.value && splideRef.value.splide) {
    const currentIndex = splideRef.value.splide.index;
    const path = modelPaths[currentIndex];
    emit("send-modele", path);
  }
};
</script>

<style scoped lang="scss">
img {
  display: block;
  margin: auto;
  width: 200px;
}

.splide {
  width: 350px;
}

.splide__arrow {
  svg {
    fill: #0d57ce;
  }
}

.splide__arrow {
  cologround-color: #0d57ce;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute; /* Positionnement absolu par rapport à leur conteneur parent positionné */
}

.splide__arrow--prev {
  left: calc(50% - 20px); /* Ajustez cette valeur pour rapprocher la flèche */
  transform: translateX(
    -100%
  ); /* Déplace la flèche vers la gauche basée sur la largeur de l'élément */
}

/* Position des flèches à droite */
.splide__arrow--next {
  right: calc(50% - 20px); /* Ajustez cette valeur pour rapprocher la flèche */
  transform: translateX(
    100%
  ); /* Déplace la flèche vers la droite basée sur la largeur de l'élément */
}

/* Positionnement du conteneur de flèches */
.splide__arrows {
  position: relative; /* Établit un contexte de positionnement pour les flèches absolues */
  width: 100%; /* Assure que le conteneur s'étend sur toute la largeur */
  top: 50%; /* Positionne le conteneur au milieu de la hauteur */
  transform: translateY(-50%); /* Centre verticalement les flèches */
}

.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin: 0 auto;
  padding: 80px 50px;
  background-color: #fff;

  h1 {
    font-size: 32px !important;
    font-weight: bold !important;
  }

  p {
    font-size:1rem !important;
    color: black;
    font-weight: 300;
  }
}

.splide__arrow {
  cologround-color: #0d57ce;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.choose-button {
  margin-top: 20px;
  cologround-color: #0d57ce;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
}
</style>
