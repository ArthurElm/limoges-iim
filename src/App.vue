<script setup>
import MainButton from "./components/MainButton.vue";
import LogoLimoges from "./components/logolimoges.vue";
import Configurator from "./components/Configurator.vue";
import LoadingPage from "./components/LoadingPage.vue";
import ChooseModele from "./components/ChooseModele.vue";
import { ref, onMounted } from "vue";

const loading = ref(true);
const modele = ref("/Tarelka.obj");

onMounted(() => {
  // Délai de chargement
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});

const sendModele = (path) => {
  modele.value = path;
};

document.addEventListener("DOMContentLoaded", () => {
  var path = document.getElementById("line");
  var length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  window.addEventListener("scroll", scrollDraw);

  function scrollDraw() {
    var scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    var draw = length * scrollpercent;
    path.style.strokeDashoffset = length - draw * 1.5;
  }
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1875.26 4588.24"
    class="background-svg w-screen absolute top-2/4"
  >
    <path
      id="line"
      d="m.28,270.69S350.78,34.13,700.78,4.13s1034.47,132.13,970.73,266.57-91.73,342.43-91.73,342.43c0,0,0,13-29,27s-36,17-47,19-16,12-12,13,17.87,9.76,55-34c28-33,25-42,41-59s27-44,27-50,10-24,10-24c0,0,9,16-6,46s-43,60-43,60c0,0,12-26,21-37s31.91-41.46,40-59c6-13,14-17,14-17,0,0,4,24-3,33s-28,36-34,42-30,26-30,26c0,0,26-35,35-42s33-35,36-39,16-14,16-14c0,0-2,31-20,48s-43,37-54,41,35-38,45-46,29-21,36-27,13-6,13-6c0,0-5,26-21,40s-54,34-62,36,28-21,37-25,14-12,18-15,17-11,22-13,17-5,17-5c0,0-2,16-17,25s-17,13-21,15-32,17-52,19,45-27,53-28,14-5,17-7,16-5.19,20-1.59-13,22.59-32,31.59-44,17-57,14,40-13,60-23,26-3,27-1,3,7-9,14-65,25-81,21,57-13,61-14,20-2,27,2-41,20-52,21-25,3-30,0,31-11,36-11,36-3,42,1,0,9-7,11-21,8-25,8-34,3-40-3,22-2,29,0,36,10,36,15-21,6-31,5-33.08.93-48-11c-5-4,65.45,4.15,68,22,1,7-46.36.89-70-12-11-6,68.68,12.35,61.22,28.37-8.22,17.63-69.02-7.21-71.22-20.37-1-6,13,9,23,11s39,17,39,24-16,11-42-4-23-19-23-19c0,0,54.83,17.08,53,39-1,12-51-16-58-27s34,26,33,34-39.43-5.06-47-24c-2-5,32.57,20.01,31.28,26.51s-38.27-.49-69.28-31.51c-9-9,50,18,48,36s-51,22-70,22-26-7-24-19,34-13,45-13,46,5,54,13,12,15,15,17,22,41,22,44,10,30,10,30c0,0-15.87,3.34-28-29-3-8,28,23,34,25s12,16,20,22,32,31,32,41-64-48-66-56,41,32,43,38,20,32,18,38-25-23-31-29-20-12-30-32c-5-10,30,18,38,30s22,38,18,43-34.17-29.93-41-47c-2-5-12-9-21-19s-13-17-13-17c0,0,30,20,41,43s7.86,34.29,1,36c-4,1-19-34-17-45s15.04,45,1,45c-6,0-20-56-19-60s11,13,11,24,3.58,29.47-10,34c-6,2-15-69-14-73s7,22,7,29,1,27-5,33-7,2-7,2c0,0-5-25-5-32s-4-21-5-25-4-16-1-21,17,41,5,58-19,4-19,0-3-68-1-68,12,47-3,59-26,1-25-3,18-50,18-54-2-15,4-18,40,2,44,10-1,6-2,6-5-2-9-2-8,1-11,0-8-9-12-10-7,1-9,1-35.76-2.27-40-15c-1-3,14,5,18,4s9-3,8-6-5-5-7-4-13,4-16,4-12,4-15,5-10,3-11,5,.55-8.78,7-12c2-1-6,0-12,2s-10,6-11,7,0-9,6-12,35-7,43-4-18,4-23,2-12-10-17-12-22-9-30-11-22-15-28-15-16.19,7.81-20,4c-3-3,5-7,6-10s3.11-17.57-8.57-20.89c-7.43-2.11-8.43,11.89-1.43,9.89s3-11,8-15,13-14,21-12-9,29-11,32-30,34-33,35,1-31,2-33,15,2,14,7-13-8-16-11-13-26,1-42,47-30,70-26,16,13,32,10,23-6,22-13c0,0-7,1-7,3s14,1,20-5,10-14,4-16-38.33,3.33-45,10c-4,4,40-13,41-18s-4-13-7-13-34,7-37,18,31-10,29-20-9-14-11-14-28,17-29,24,19-13,21-31-12-15-14-14-23,23-22,36,19.21-34.48-3-44c-7-3-12,35-11,38s6-25-9-40c-3-3-11.77,31.84-5,42,2,3,.16-49.4-19-47-8,1,2,74,24,81,17.52,5.57,28,4,28-6s-23-13-30-11-17,23-6,29,27,8,33,8,31,6,58-4,46-64,16-112-491-207.09-583.5,73.45,171.5,209.55,233.5,376.55-461,358-575,296-404-257-468-114c-132.74,296.59-18,699,41,756s145-74,145-74c21-27,27-65,6-86s-17-52,1-66,47-48,54-65,12-21,12-30-3-36.75-3-45-36-61-76-80-36-15-61-12-8,25-4,28,20,14,19,29-5.08,27.26,2,37c8,11,15,23,23,23s28-3,38-4,33,4,44,8,13,11,9,16-15,15-19,19-24,26-27,29-11,11-16,12-26,1-30,1-16,21-19,24-11,8-13,1,6-13,13-18,10-7,6-14-17-8-17-22c0-5,6-7,7-15s-1-15,2-20,5-7,5-10-1-3,4-4,37-6,48-5,47,7,47,10-9,6-21,8-33,12-42,12-20-3-20-11,21-15,44-15,41,8,40,15-10,9-19,11-28,11-33,9,11-12,18-14,18-7,25-1-14,21-19,26-18,24-32,24,6-25,10-27,10-4,11-4,3,4-9,10-13-2-15-3-2-4-7-2-5,9-13,9-6-7,1-12,9-7,5-9-10,1-14,1-5-7,0-10-2-11-4-13,28-16,29-19-3-6-7-6-9-7-4-10,12-6,12-10-5-6-11-6c0,0-15-1-15-11,0-6,15.87-7.2,35,1,7,3,25.2,8.84,52,41,5,6-27-9-33-16s-13-17-18-22-17-23-9-29,30,0,41,13,22,32,25,40,6.34,16.21,5,18c-3,4-14-8-30-21s-41.23-11.69-50-38c-3-9,12-19,12-26s-11-11-15-12-11-6-15-5-3,9,2,10,16,4,18,10-1,8-3,8-13-1-16,0-4,8,0,10,14,2,20,5,9,39,19,49,45,13,46,12-29-30-43-28,38,30,52,32,19-2,26-19-8,14-14,26c-3,6,2,19,14-1s9-28,9-28c0,0-13,39,5,35s47-9,63-3,18.18,22.48,23.59,24.24,12.41,1.76,12.41-8.24-20-5-17-16,34,5,37,6,12.16-8.13,0-14.1c-10-4.9-11-6.9-9-10.9s10-3,16-2,17,6,20,1-10-13-19-13-24,3-26,15-5,21-25,21-49-12-68-5-21-2-12-8,67-27,88-21,21,36-5,36-39-12-63-8-13,10,5,20,28,8,29,2,2-5,2-9-9-6-12-6-39,5-31-5,99.31,7.27,88,20c-8,9-12-1-21-3s-12,4-12,9,2,12-3,12-5-5-13-5-7,10-2,18,11,9,7,15-8,4-9,7,1,12-2,12-9-12-14-12-5,6-4,9,2,11-2,12-8-2-9-12-6-9-9-9-12,7-14-7,4-5,5,0,2,20-1,24-11.47,7.24-14-13c-2-16,0-51,6-52s20,17,21,25,1,11-2,12-9.08-6.25-12-15c-2-6-13-17-13-24s3-12,15-11,21,7,26,10,37,28,40,42-9,36-19,43-21,9-28,9-9,14-9,20,3.06,12.45-3,13c-11,1-2-29-6-36s-17-8-20-25,2-39,0-52-4-28,10-30,41.61,13,47.3,23,14.7,25,31.7,26,43.7-11,53.85-26,25.15-22,42.15-20,25-11,19-24-52-31-88-29-78,18-90,26-47,38-47,79,4,66-9,84-22,19-31,22-33,9-39,12-14,12-17,26-17,43-2,95c29.91,103.69,455.62,183.15,619-121,159-296,731.33-285.54,808-158s-254,420-764,482-177,357,143,205c127-46,167,91,256,154,40.8,73.89,114,39,98,49s-12,10-17,12-27,8-28,10,5.1,8.21,7,12c2,4,7,11,7,11,0,0,1-9,8-9s19,11,34,11,29-8,31-10-12,3-13,13,9,18,16,20,16.93,2.83,29-2c5-2,13,0,11,1s-21-6-21-21,9.2-31.56,53-52c15-7,33-5,42-16s24.23-33.84,15-80c-1-5-32-1-32,2s8-4,3-10-23-15-27-22-6-16-7-16-5,7-10,12-14,10.45-14,13.23,3,6.77,2,6.77-24-15-29-15-7,9-9,12-19,19-22,22-4,10-2,10,11-15-2-16-23,20-25,24-10,9-12,10-4,4-2,8,4,7,4,11-2,16,0,17,15-9,22-9,15,7,16,8-15-19-16-24-4-25-3-26,31-6,36-8,9-1,9,3-3,14-6,14-13-7-18-6-20,7-10,28,28,16,34,19,16,16,21,15,6-5,1-9-46-31-43-35c.05-.07,3.59-1.17,13,1,10.87,2.51,28.54,8.54,41,12,16.1,4.47,28.64,9.61,25,9-30-5-41-1-54-5-11.82-3.64-17.95-15.99-17-16,3.81-.03,7.61-1.61,8-2,3-3,1-12,5-15s17,6,17,8-18-9-12-17,32-5,34,2-3-18-14-17-15,9-16,9,2-15.23,24-19.61,29,7.61,28,11.61-4,5-4,6,12-9,15,0c1,3-7,5-9,11s-13,30-10,36c1,2,13-11,14-15s3-18,4-22,6-10,3-15-9-4-11-5,6-11,13-10,14,21,10,31-18,31-17,36,8-10,14-12,16.33-11.33,19-22c1-4-10-4-10-4,0,0,7,0,8,19s-1,23-7,26-14,0-18,3-11,15-17,18-36.28,16.16-39,8c-1-3,54-33,58-32s3,24-9,33-16,12-21,11-1-6-5-7-21,2-40-5-36-25-44-24-10,8-10,16,5,9,12,7,9,19,20,21,32,2,44-5,18,1,18,1c0,0-16,1-25,6s-17,12-15,16,16,10,25,9,38-33,46-33,17,15,30,8,4-13,3-18,6-38,24-39,42,14,42,20,2,16-5,19-12-2-14-1-7,28-20,35-57.97,11.03-74-5c-2-2,22.25,11.94,7,31-12,15-18,12-22,28s0,66-2,72,0,20,1,29,2,13,0,12-13-11-18-20,0-30,0-34-4-13-8-19-11-12-16-12-11,19-8,33,18,23,17,27-12-7-27-5-20,2-33,19-12,18-8,21,21,10,32,6,21-31,30-36,21,2,11,8-23,17-20,36,3,29,3,32,9.55,1.3,24-26c9-17,3-38,4-40s17,16,19,21,2,28,4,28,8.44-29.74,46-36c-7,11-9,43-41,47-34,1,7,59-10,120s-338.67,162.38-466,20c-220-246-694-372-889-217"
      style="fill: none; stroke: #ffffff; stroke-miterlimit: 10"
    />
  </svg>
  <LoadingPage
    msg="Vite + Vue"
    v-if="loading"
    :class="{ loadinbgPage: loading }"
  />



    <!-- Landing -->
    <div class="container landing" v-if="!loading">
      
      <h1>la Porcelaine</h1>
      <h2>Découvrez</h2>
      <h2>de</h2>
      <h1>Limoges</h1>
      <img src="https://www.hotel-ventes-giraudeau-tours.fr/wp-content/uploads/sites/9225/2017/02/354-1-e1594652365992.jpg" alt=" " width="400px"/>
      <img src="https://www.destination-limoges.com/app/uploads/2022/04/porcelaine.jpg" alt=" " width="400px"/>
      <p>Au cœur du Limousin, une région au riche patrimoine artistique, s'épanouit l'art exceptionnel de la porcelaine de Limoges. Célèbre dans le monde entier pour sa qualité inégalée et son élégance intemporelle, la poterie en porcelaine de Limoges incarne l'alliance parfaite entre tradition et modernité.</p>
      <img src="https://res.cloudinary.com/lastminute-contenthub/s--XygVAslo--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Europe/France/Limoges/shutterstock_1831952194" alt=" " width="400px"/>
      <img src="https://www.jaimemonpatrimoine.fr/images/FO_Gallery/vignetteporcelaine-de-limoges_1617892907.jpg" alt=" " width="400px"/>
      <img src="https://media.istockphoto.com/id/1339005647/fr/photo/champ-de-juillet-et-gare-avec-sa-belle-tour-dhorloge-%C3%A0-limoges-france.jpg?s=612x612&w=0&k=20&c=3oHJz17vkEDgPs_XVdfb0NLNwPOmv5FBHmbzZn5M8l8=" alt=" " width="400px"/>
      <img src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/22/8e/d3/cathedrale-pont-saint.jpg" alt=" " width="400px"/>
    </div>

  

  <div class="px-12 py-12" v-else>

    <div class="main">
      <div class="flex justify-center items-center">
        <ChooseModele @send-modele="sendModele" />
      </div>
      <div class="flex justify-between items-center mb-8">
        <LogoLimoges />
        <div>
          <MainButton class="cart-button" svgFileName="cart" :buttonState="2"
            >Panier</MainButton
          >
        </div>
      </div>
      <!-- 3D object & patterns -->
      <div class="h-[65vh] relative configurator" style="overflow-y: hidden">
        <!-- 3D object & patterns -->
        <Configurator :modele="modele" />
      </div>
      <div class="actions-buttons pt-8 w-4/6 m-auto flex justify-center">
        <MainButton svgFileName="capture" :buttonState="2">Capturer</MainButton>
        <MainButton svgFileName="check" :buttonState="2" class="mx-5"
          >Valider</MainButton
        >
        <MainButton svgFileName="shop" :buttonState="2"
          >Ajouter au panier</MainButton
        >
      </div>
    </div>
  </div>
</template>
<script>
import Shepherd from "shepherd.js";

export default {
  data() {
    return {
      tour: null,
    };
  },
  methods: {
    startTutorial() {
      const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
          classes: "shepherd-theme-arrows",
          scrollTo: false,
        },
      });
      //step 1
      tour.addStep({
        id: "discover-limoges",
        arrow: true,
        title: "Découvrez Limoges",
        text: "Envie d'en savoir plus sur la magnifique ville de Limoges et son histoire ? Cliquez ici pour découvrir et explorer cette ville captivante.",
        attachTo: {
          element: ".logo-limoges",
          on: "right",
        },
        tetherOptions: {
          target: ".inner",
        },
        buttons: [
          {
            text: "Passer le guide",
            action: tour.cancel,
            classes: "skip-button",
          },
          {
            text: "Suivant",
            action: tour.next,
            classes: "main-button px-8 py-3 ",
          },
        ],
      });
      //step 2
      tour.addStep({
        id: "actions-buttons-step",
        title: "Capturer, enregistrer, acheter",
        text: "Vous pouvez, via ces actions, donner vie à votre création.",
        attachTo: {
          element: ".actions-buttons",
          on: "top",
        },
        buttons: [
          {
            text: "Passer le guide",
            action: tour.cancel,
            classes: "skip-button",
          },
          {
            text: "Suivant",
            action: tour.next,
            classes: "main-button px-8 py-3 ",
          },
        ],
      });

      //step 3
      tour.addStep({
        id: "buy-pottery",
        title: "Acheter",
        text: "Cliquez sur le bouton 'Vers le Panier' pour finaliser votre achat et voir votre poterie prendre forme dans le monde réel.",
        attachTo: {
          element: ".cart-button",
          on: "left",
        },
        buttons: [
          {
            text: "Passer le guide",
            action: tour.cancel,
            classes: "skip-button",
          },
          {
            text: "Suivant",
            action: tour.next,
            classes: "main-button px-8 py-3",
          },
        ],
      });

      //step 4
      tour.addStep({
        id: "choose-pattern",
        title: "Choisir un motif",
        text: "Vous pouvez modifier le motif de votre poterie à votre guise.",
        attachTo: {
          element: ".slider",
          on: "left",
        },
        buttons: [
          {
            text: "C'est parti !",
            action: tour.complete,
            classes: "main-button px-8 py-3",
          },
        ],
      });

      tour.start();
    },
  },
  mounted() {
    setTimeout(() => {
      this.startTutorial();
    }, 2000);
  },
};
</script>
<style scoped>
.loadinbgPage {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: #fff;
  overflow: hidden;
}

.configurator {
  border: 1px solid #0d57ce;
  border-radius: 10px;
}

.background-svg {
  z-index: -1;
}
</style>

<!-- Landing -->

<style lang="scss">
// Magic parallax mixins

$parallax-perspective : 1 !default;
$parallax-element     : "body" !default;
$parallax-ios         : true !default;

@mixin parallax-init(
  $perspective  : $parallax-perspective,
  $element      : $parallax-element,
  $parallax-ios : $parallax-ios
  ) {
  @if $element == "body" {
    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  }
  #{$element} {
    overflow: auto;
    perspective: $perspective * 1px;
    transform-style: preserve-3d;
    // Allows for smooth scrolling but disables parallax effects.
    @if $parallax-ios == false {
      -webkit-overflow-scrolling: touch;
    }
    // Preserve 3D
    &, * {
      transform-style: preserve-3d;
    }
  }
}

@mixin parallax(
  $distance    : 0,
  $perspective : $parallax-perspective
  ) {
  transform:
    translateZ($distance * $perspective * 1px)
    scale(abs($distance - 1))
  ;
  z-index: $distance * 1000;
}

// End of magic parallax mixins
@import url();
$primary: #00368D;

@include parallax-init;

.container {
  height: 3300px;

  :nth-child(1) {
    @include parallax(-.4);
    top: 200px;
    left: 100px;
  }
  :nth-child(2) {
    @include parallax(.2);
    top: 200px;
    left: 400px;
  }
  :nth-child(3) {
    @include parallax(.3);
    top: 400px;
    left: 500px;
  }
  :nth-child(4) {
    @include parallax(.1);
    top: 500px;
    left: 400px;
  }
  :nth-child(5) {
    @include parallax(-2);
    top: 2000px;
    left: 2000px;
  }
  :nth-child(6) {
    @include parallax(.4);
    top: 600px;
    left: 300px;
  }
  :nth-child(7) {
    @include parallax(-1);
    top: 400px;
    left: 1000px;
  }
  :nth-child(8) {
    @include parallax(-.4);
    top: 0px;
    left: 1300px;
  }
  :nth-child(9) {
    @include parallax(.4);
    top: 900px;
    left: 350px;
  }
  :nth-child(10) {
    @include parallax(-1);
    top: 1600px;
    left: 100px;
  }
  :nth-child(11) {
    @include parallax(-1);
    top: 900px;
    left: 1200px;
  }
  padding: 10%;
  max-width: 40em;
  margin: auto;
  > * {
    position: absolute;
  }
}

h1, h2 {
  font-weight: 100;
  margin: 0;
  font-family: "Bungee Inline", sans-serif;
}

h1 {
  font-size: 5em !important;
  color: $primary;
}
h2 {
  font-size: 4em !important;
  @include parallax(.2);
}

p{
  font-size: 1em!important;
  @include parallax(.2);
}

</style>