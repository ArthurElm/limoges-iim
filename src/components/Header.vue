<template>
  <div class="container landing">
    <h1>la Porcelaine</h1>
    <h2>Découvrez</h2>
    <h2>de</h2>
    <h1>Limoges</h1>
    <img
      src="https://www.hotel-ventes-giraudeau-tours.fr/wp-content/uploads/sites/9225/2017/02/354-1-e1594652365992.jpg"
      alt=" "
      width="400px"
    />
    <img
      src="https://www.destination-limoges.com/app/uploads/2022/04/porcelaine.jpg"
      alt=" "
      width="400px"
    />
    <p>
      Au cœur du Limousin, une région au riche patrimoine artistique, s'épanouit
      l'art exceptionnel de la porcelaine de Limoges. Célèbre dans le monde
      entier pour sa qualité inégalée et son élégance intemporelle, la poterie
      en porcelaine de Limoges incarne l'alliance parfaite entre tradition et
      modernité.
    </p>
    <img
      src="https://res.cloudinary.com/lastminute-contenthub/s--XygVAslo--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Europe/France/Limoges/shutterstock_1831952194"
      alt=" "
      width="400px"
    />
    <img
      src="https://www.jaimemonpatrimoine.fr/images/FO_Gallery/vignetteporcelaine-de-limoges_1617892907.jpg"
      alt=" "
      width="400px"
    />
    <img
      src="https://media.istockphoto.com/id/1339005647/fr/photo/champ-de-juillet-et-gare-avec-sa-belle-tour-dhorloge-%C3%A0-limoges-france.jpg?s=612x612&w=0&k=20&c=3oHJz17vkEDgPs_XVdfb0NLNwPOmv5FBHmbzZn5M8l8="
      alt=" "
      width="400px"
    />
    <img
      src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/22/8e/d3/cathedrale-pont-saint.jpg"
      alt=" "
      width="400px"
    />
  </div>
</template>

<style lang="scss">
// Magic parallax mixins

$parallax-perspective: 1 !default;
$parallax-element: ".container" !default;

@mixin parallax-init(
  $perspective: $parallax-perspective,
  $element: $parallax-element
) {
  @if $element == "body" {
    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  }
  #{$element} {
    overflow-y: auto;
    perspective: $perspective * 1px;
    transform-style: preserve-3d;
    &,
    * {
      transform-style: preserve-3d;
    }
  }
}

@mixin parallax($distance: 0, $perspective: $parallax-perspective) {
  transform: translateZ($distance * $perspective * 1px)
    scale(abs($distance - 1));
  z-index: $distance * 1000;
}

$primary: #00368d;

@include parallax-init;

.container {
  height: 1100px;
  :nth-child(1) {
    @include parallax(-0.4);
    top: 250px;
    left: 100px;
  }
  :nth-child(2) {
    @include parallax(0.2);
    top: 260px;
    left: 400px;
  }
  :nth-child(3) {
    @include parallax(0.3);
    top: 475px;
    left: 500px;
  }
  :nth-child(4) {
    @include parallax(0.1);
    top: 575px;
    left: 400px;
  }
  :nth-child(5) {
    @include parallax(-2);
    top: 2000px;
    left: 2000px;
  }
  :nth-child(6) {
    @include parallax(0.4);
    top: 600px;
    left: 300px;
  }
  :nth-child(7) {
    @include parallax(-1);
    top: 450px;
    left: 1000px;
  }
  :nth-child(8) {
    @include parallax(-0.4);
    top: 0px;
    left: 1300px;
  }
  :nth-child(9) {
    @include parallax(0.4);
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
.container::-webkit-scrollbar {
  width: 0; // Hide the scrollbar
}

h1,
h2 {
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
  @include parallax(0.2);
}

p {
  font-size: 1em !important;
  color: #00368d;
}
</style>