<template>
  <div>
    <div class="centered-container">
      <div class="content">
        <h1 class="load-text">Limoges</h1>
      </div>
    </div>

    <div class="loading-bar"></div>

    <!-- Centered Limoges map behind text -->
    <div class="centered-container limoges-map-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="452"
        height="531"
        viewBox="0 0 452 531"
        fill="none"
      >
        <path
          d="M248.877 456.829L219.066 433.455L193.321 432.94L167.704 406.073L105.038 396.78L90.7421 375.396L99.0952 337.262L24.2173 237.02L38.2049 201.04L3 184.59L9.93806 173.624L47.8959 179.682L81.6857 161.284L128.323 204.532L154.308 248.973L235.361 288.11L281.106 262.908L305.985 232.343L306.122 181.372L323.069 146.122L321.216 120.396L338.205 100.84L321.148 39.5891L335.024 3L417.037 6.83568L422.466 31.8577L449 57.7293L425.407 113.771L436.891 149.365L425.682 155.123L414.301 203.983L420.45 240.572L412.423 274.656L425.562 295.816L350.109 362.542L392.998 407.729L400.305 444.884L385.614 493.032L374.628 499.193L343.557 483.799L342.382 509.138L329.732 526L323.026 502.643L310.968 501.416L288.438 489.471L277.126 442.07L265.163 437.668L248.877 456.829Z"
          stroke="#00368D"
          stroke-width="6"
          stroke-dasharray="2000"
          stroke-dashoffset="2000"
        />
      </svg>
    </div>

    <figure class="swing">
        <img src="https://www.destination-limoges.com/app/uploads/2022/04/porcelaine.jpg" width="300px">
    </figure>  

    <figure class="swing2">
        <img src="https://www.hotel-ventes-giraudeau-tours.fr/wp-content/uploads/sites/9225/2017/02/354-1-e1594652365992.jpg" width="300px">
    </figure>  

  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Inline&display=swap");



/* Texte */
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  position: relative;
  overflow: hidden;
  font-family: "Bungee Inline", sans-serif;
  color: #00368d;
  z-index: 2;
}

.content h1 {
  font-size: 8em;
  -webkit-text-stroke: 2px #00368d;
}

.load-text {
  position: relative;
  display: inline-block;
  font-size: 2em;
  background: linear-gradient(to right, #00368d 50%, transparent 50%);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: loadtext 2s infinite;
}

.loading-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #00368d;

  animation: loadingAnimation 2s infinite;
}

@keyframes loadtext {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 100%;
  }
}

@keyframes loadingAnimation {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

/* Limoges map */

.limoges-map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1; /* Adjust the z-index to position it behind your text */
}

@keyframes fillStrokeAnimation {
  to {
    stroke-dashoffset: 0;
  }
}

.limoges-map-container path {
  animation: fillStrokeAnimation 2s ease forwards;
}

/* Swing IMG */
.swing {
    position: absolute;
    top: 120px;
    left: 60px;
    animation: swing ease-in-out 1s infinite alternate;
    transform-origin: center -20px;
    float:left;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
}
.swing img {
    border: 5px solid #f8f8f8;
    display: block;
}
.swing:after{
    content: '';
    position: absolute;  
    width: 20px; height: 20px;  
    border: 1px solid #999;
    top: 0; left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
}
/* nail */
.swing:before{
    content: '';
    position: absolute;
    width: 5px; height: 5px;
    top: -14px;left: 54%;
    z-index: 5;
    border-radius: 50% 50%;
    background: #000;
}
 
@keyframes swing {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
}

/* Swing 2 */
.swing2 {
    position: absolute;
    bottom: 100px;
    right: 120px;
    animation: swing ease-in-out 1s infinite alternate;
    transform-origin: center -20px;
    float:left;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
}
.swing2 img {
    border: 5px solid #f8f8f8;
    display: block;
}
.swing2:after{
    content: '';
    position: absolute;  
    width: 20px; height: 20px;  
    border: 1px solid #999;
    top: 0; left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
}
/* nail */
.swing2:before{
    content: '';
    position: absolute;
    width: 5px; height: 5px;
    top: -14px;left: 54%;
    z-index: 5;
    border-radius: 50% 50%;
    background: #000;
}
 
@keyframes swing {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
}
</style>
