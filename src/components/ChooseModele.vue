<template>
  <div class="slider-container">
    <h1>Bienvenue dans l'atelier de porcelaine virtuel de Limoges !</h1>
    <p>Commencez par choisir l'objet de poterie que vous souhaitez créer.</p>
    <Splide :options="splideOptions" @moved="updateModelPath">
      <SplideSlide>
        <img
          src="../assets/slider/texture3.jpg"
          width="auto"
          height="auto"
          alt="Objet de poterie 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img src="../assets/slider/texture2.jpg" alt="Objet de poterie 2" />
      </SplideSlide>
      <!-- Ajoutez autant de SplideSlide que nécessaire pour vos images -->
    </Splide>
    <MainButton :buttonState="3" @click="sendPath(currentModelPath)"
      >Ajouter au panier</MainButton
    >
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref } from "vue";
import MainButton from "./MainButton.vue";
import "@splidejs/vue-splide/css";

const emit = defineEmits(["send-modele"]);

const splideOptions = ref({
  type: "fade",
  rewind: true,
  pagination: false,
  arrows: true,
  // Ajoutez d'autres options selon vos besoins
});

const modelPaths = ["/Tarelka.obj", "/mug.obj"]; // Chemins de vos modèles
const currentModelPath = ref(modelPaths[0]); // Chemin du modèle actuel

const updateModelPath = (splide) => {
  console.log(splide);
  const currentIndex = splide.index; // Obtenez l'index de la slide actuelle
  currentModelPath.value = modelPaths[currentIndex]; // Mettez à jour le chemin du modèle
};

const sendPath = (path) => {
  // use a fonction in the parent component with the ref
  emit("send-modele", path);
};
</script>

<style scoped>
img {
  display: block;
  margin: auto;
  width: 15%;
}

.splide__arrow {
  background-color: #0000ff;
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
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}

.slider-container h1 {
  font-size: 24px;
  margin-bottom: 16px;
}

.slider-container p {
  margin-bottom: 24px;
}

.splide__arrow {
  background-color: #0000ff;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.choose-button {
  margin-top: 20px;
  background-color: #0000ff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
}
</style>
