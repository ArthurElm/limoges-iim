<script setup>

</script>

<template>
    <section class="landing-screen-container">
        <div class="title-container">
            <h2 class="txt anim-text-flow"><b>PORCELAINE</b> de LIMOGES</h2>
        </div>

        <img class="float-img img-1" src="../assets/img/Ornamental-vase.png" alt="">
        <img class="float-img img-2" src="../assets/img/Teapot.png" alt="">
    </section>
</template>

<style scoped>

.landing-screen-container {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-container h2{
  font-size: 75px;
  color: rgba(255,255,255,.2);
  background-image: url('../assets/img/gradient.png');
/*   background-position: center; */
  background-size: 100%;
  background-repeat: repeat-x;
  -webkit-background-clip: text;
  animation: background-movement 15s linear infinite;
}

.float-img {
    position: absolute;
    transform: rotate(90deg);
    width: 150px;
    img { width: 100%; height: auto; }
}

.img-1 {
    top: 75px;
    left: 200px;
    animation: float 3s ease-in-out infinite;
}

.img-2 {
    bottom: 75px;
    right: 200px;
    animation: float 2.5s ease-in-out infinite;
}


@keyframes para {
  100% {
    background-position: 
      -5000px 20%,
      -800px 95%,
      500px 50%,
      1000px 100%,
      400px 0;
    }
}

@keyframes background-movement {
  0% {
    background-position: left 0px top 0px;
  }
  40% {
    background-position: left 800px top 0px;
  }
}

@keyframes float {
  0% {
/*    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
    transform: translatey(0px);
  }
  50% {
/*    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
    transform: translatey(-10px);
  }
  100% {
/*    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
    transform: translatey(0px);
  }
}
</style>
