<template>
    <div>
        <div class="centered-container">
            <div class="content">
                <h1 class="load-text">Limoges</h1>
            </div>
        </div>

        <div class="loading-bar"></div>

        <div class="pyro">
            <div class="before"></div>
            <div class="after"></div>
        </div>

        <!-- Centered Limoges map behind text -->
        <div class="centered-container limoges-map-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="452" height="531" viewBox="0 0 452 531" fill="none">
                <path d="M248.877 456.829L219.066 433.455L193.321 432.94L167.704 406.073L105.038 396.78L90.7421 375.396L99.0952 337.262L24.2173 237.02L38.2049 201.04L3 184.59L9.93806 173.624L47.8959 179.682L81.6857 161.284L128.323 204.532L154.308 248.973L235.361 288.11L281.106 262.908L305.985 232.343L306.122 181.372L323.069 146.122L321.216 120.396L338.205 100.84L321.148 39.5891L335.024 3L417.037 6.83568L422.466 31.8577L449 57.7293L425.407 113.771L436.891 149.365L425.682 155.123L414.301 203.983L420.45 240.572L412.423 274.656L425.562 295.816L350.109 362.542L392.998 407.729L400.305 444.884L385.614 493.032L374.628 499.193L343.557 483.799L342.382 509.138L329.732 526L323.026 502.643L310.968 501.416L288.438 489.471L277.126 442.07L265.163 437.668L248.877 456.829Z" stroke="#00368D" stroke-width="4"/>
            </svg>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');

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
    font-family: 'Bungee Inline', cursive;
    color: #00368D;
    z-index: 2;
}

.content h1 {
    font-size: 8em;
    -webkit-text-stroke: 2px #00368D;
}

.load-text {
    position: relative;
    display: inline-block;
    font-size: 2em;
    background: linear-gradient(to right, #00368D 50%, transparent 50%);
    background-size: 200% 100%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: loadtext 1.5s infinite;
}

.loading-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: #00368D;

    animation: loadingAnimation 1.5s infinite;
}

@keyframes loadtext {
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
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

/* Feux d'artifices */
.pyro > .before, .pyro > .after {
  position: absolute;
  top: 0%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: -120px -218.66667px #9BCEEE, 248px -16.66667px #9BCEEE, 190px 16.33333px #9BCEEE, -113px -308.66667px #9BCEEE, -109px -287.66667px #9BCEEE, -50px -313.66667px #9BCEEE, 226px -31.66667px #9BCEEE, 180px -351.66667px #9BCEEE, -12px -338.66667px #9BCEEE, 220px -388.66667px #9BCEEE, -69px -27.66667px #9BCEEE, -111px -339.66667px #9BCEEE, 155px -237.66667px #9BCEEE, -152px -380.66667px #9BCEEE, -50px -37.66667px #9BCEEE, -95px -175.66667px #9BCEEE, -88px 10.33333px #9BCEEE, 112px -309.66667px #9BCEEE, 69px -415.66667px #9BCEEE, 168px -100.66667px #9BCEEE, -244px 24.33333px #9BCEEE, 97px -325.66667px #9BCEEE, -211px -182.66667px #9BCEEE, 236px -126.66667px #9BCEEE, 140px -196.66667px #9BCEEE, 125px -175.66667px #9BCEEE, 118px -381.66667px #9BCEEE, 144px -111.66667px #9BCEEE, 36px -78.66667px #9BCEEE, -63px -196.66667px #9BCEEE, -218px -227.66667px #9BCEEE, -134px -377.66667px #9BCEEE, -36px -412.66667px #9BCEEE, 209px -106.66667px #9BCEEE, 91px -278.66667px #9BCEEE, -22px -191.66667px #9BCEEE, 139px -392.66667px #9BCEEE, 56px -2.66667px #9BCEEE, -156px -276.66667px #9BCEEE, -163px -233.66667px #9BCEEE, -238px -346.66667px #9BCEEE, 62px -363.66667px #9BCEEE, 244px -170.66667px #9BCEEE, 224px -142.66667px #9BCEEE, 141px -208.66667px #9BCEEE, 211px -285.66667px #9BCEEE, 181px -128.66667px #9BCEEE, 90px -123.66667px #9BCEEE, 189px 70.33333px #9BCEEE, -18px -383.66667px #9BCEEE, 100px -6.66667px #9BCEEE;
  -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards; }

.pyro > .after {
  -moz-animation-delay: 1.25s, 1.25s, 1.25s;
  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
  -o-animation-delay: 1.25s, 1.25s, 1.25s;
  -ms-animation-delay: 1.25s, 1.25s, 1.25s;
  animation-delay: 1.25s, 1.25s, 1.25s;
  -moz-animation-duration: 1.25s, 1.25s, 6.25s;
  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
  -o-animation-duration: 1.25s, 1.25s, 6.25s;
  -ms-animation-duration: 1.25s, 1.25s, 6.25s;
  animation-duration: 1.25s, 1.25s, 6.25s; }

@-webkit-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-moz-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-o-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-ms-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-webkit-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-moz-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-o-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-ms-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }

</style>
