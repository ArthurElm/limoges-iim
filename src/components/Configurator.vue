<template>
  <div class="canvas">
    <h1 class="text-7xl text-secondary text-center pt-80">LIMOGES</h1>
    <button @click="changeTexture('/assets/textures/Tarelka-test.png')">
      Décoration
    </button>
    <br />
    <button @click="changeTexture('/assets/textures/Tarelka-lineFace.png')">
      Line Face
    </button>
    <br />
    <button @click="changeTexture('/assets/textures/Tarelka-ZIK.png')">
      Basique
    </button>
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const canvasRef = ref(null); // Référence au canvas

let mainObject; // Variable pour référencer l'objet principal
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);

const camera = new THREE.PerspectiveCamera(
  5,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let renderer;
let controls;
let currentTextureIndex = 0;
const textureLoader = new THREE.TextureLoader();

// Fonction pour changer la texture
const changeTexture = (textures) => {
  if (mainObject) {
    const textureUrl = textures;
    textureLoader.load(textureUrl, function (newTexture) {
      mainObject.traverse(function (child) {
        if (child.isMesh) {
          child.material.map = newTexture;
          child.material.needsUpdate = true;
        }
      });
      currentTextureIndex = (currentTextureIndex + 1) % textures.length;
    });
  }
};

onMounted(() => {
  // Assurez-vous que canvasRef est monté
  if (canvasRef.value) {
    initThreeJS(); // Initialisation de Three.js
  }
});

const initThreeJS = () => {
  // rotate obj
  let isDragging = false;
  let previousMousePosition = {
    x: 0,
    y: 0,
  };

  const onMouseDown = (e) => {
    isDragging = true;
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      const deltaMove = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y,
      };

      if (mainObject) {
        const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            toRadians(deltaMove.y * 1), // ajustez le facteur 1 si nécessaire
            toRadians(deltaMove.x * 1), // ajustez le facteur 1 si nécessaire
            0,
            "XYZ"
          )
        );

        mainObject.quaternion.multiplyQuaternions(
          deltaRotationQuaternion,
          mainObject.quaternion
        );
      }
    }

    previousMousePosition = {
      x: e.offsetX,
      y: e.offsetY,
    };
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  // Convertir degrés en radians
  const toRadians = (angle) => {
    return angle * (Math.PI / 180);
  };

  // Ajouter des écouteurs d'événements pour la souris
  canvasRef.value.addEventListener("mousedown", onMouseDown, false);
  canvasRef.value.addEventListener("mouseup", onMouseUp, false);
  canvasRef.value.addEventListener("mousemove", onMouseMove, false);

  // Création du projecteur
  const spotLight = new THREE.SpotLight(0xffffff); // Couleur blanche

  //position de la caméra
  camera.position.z = 5;
  camera.position.y = 5;
  camera.position.x = 5;
  camera.lookAt(new THREE.Vector3(0, 0, 0)); // Make the camera look at the point of origin

  // Création du rendu
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasRef.value,
  });
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
  const devicePixelRatio = window.devicePixelRatio || 1; // To handle high pixel density displays

  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  renderer.setPixelRatio(devicePixelRatio);

  document.body.appendChild(renderer.domElement);

  const render = function () {
    requestAnimationFrame(render);
    controls.update();
    //   console.log(controls);
    renderer.render(scene, camera);
  };
  // Activation des ombres dans le rendu
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Type d'ombre pour des bords plus doux

  // Création du loader pour les textures
  const textureLoader = new THREE.TextureLoader();

  // Création du loader pour les objets .obj
  const objLoader = new OBJLoader();

  // Chargement de l'objet .obj
  objLoader.load(
    "/Tarelka.obj", // Assurez-vous que ce chemin est correct
    function (object) {
      object.traverse(function (child) {
        if (child.isMesh) {
          // Sauvegarde de la référence de l'objet mesh pour une utilisation ultérieure
          mainObject = object;
          spotLight.target = mainObject; // Oriente le projecteur vers l'objet principal
          // Chargement et application de la texture

          textureLoader.load(
            "/assets/textures/Tarelka-test.png",
            function (texture) {
              const material = new THREE.MeshStandardMaterial({
                map: texture,
                roughness: 0.5, // Ajustez selon besoin
                metalness: 0.5, // Ajustez selon besoin
              });
              material.needsUpdate = true;
              object.traverse(function (child) {
                if (child.isMesh) {
                  child.material = material;
                }
              });
            }
          );
        }
      });
      scene.add(mainObject);
    }
  );

  const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Couleur blanche, intensité à 0.5
  scene.add(ambientLight);
  // Ajout du projecteur à la scène
  scene.add(spotLight);
  // Start rendering the scene
  render();
};

const render = function () {
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
};
</script>
