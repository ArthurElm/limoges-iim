<template>
  <div class="canvas flex">
    <canvas ref="canvasRef" class="canvasContainer" />
    <Slider class="slider" @send-path="changeTexture" />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

import Slider from "./SliderV.vue";

const props = defineProps({
  modele: String,
});

const modele = ref(props.modele);
const canvasRef = ref(null); // Reference to the canvas element
let mainObject; // Variable pour for reference to the main object
let renderer;
let controls;
let currentTextureIndex = 0;
const scene = new THREE.Scene();
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // White color with full intensity
// Create a spot light
const spotLight = new THREE.SpotLight(0xffffff); // Couleur blanche
const camera = new THREE.PerspectiveCamera(
  5,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const textureLoader = new THREE.TextureLoader();

onMounted(() => {
  if (canvasRef.value) {
    initThreeJS(); // Threejs init
  }
});

watch(
  () => props.modele,
  (newModele, oldModele) => {
    modele.value = newModele;
    scene.remove(mainObject);
    scene.remove(ambientLight);
    scene.remove(spotLight);
    initThreeJS();
  }
);

// Function for changing the texture
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
            toRadians(deltaMove.y * 1),
            toRadians(deltaMove.x * 1),
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

  // Conver degrees to radians
  const toRadians = (angle) => {
    return angle * (Math.PI / 180);
  };

  // add eventlisteners for mouse events
  canvasRef.value.addEventListener("mousedown", onMouseDown, false);
  canvasRef.value.addEventListener("mouseup", onMouseUp, false);
  canvasRef.value.addEventListener("mousemove", onMouseMove, false);

  // camera position
  camera.position.z = 3;
  camera.position.y = 3;
  camera.position.x = 3;
  camera.lookAt(new THREE.Vector3(0, 0, 0)); // Make the camera look at the point of origin

  // Create renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasRef.value,
    alpha: true,
  });
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
  const devicePixelRatio = window.devicePixelRatio || 1; // To handle high pixel density displays
  renderer.setClearColor(0x000000, 0); // the default

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(devicePixelRatio);

  const render = function () {
    requestAnimationFrame(render);
    controls.update();

    renderer.render(scene, camera);
  };
  // Activate shadows in the renderer
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Type d'ombre pour des bords plus doux

  // Create loader for texttures
  const textureLoader = new THREE.TextureLoader();

  // Create loader for obj
  const objLoader = new OBJLoader();

  // object chargement
  objLoader.load(modele.value, function (object) {
    mainObject = object;
    object.traverse(function (child) {
      if (child.isMesh) {
        // Save reference to the main object

        textureLoader.load("/assets/textures/texture2.png", function (texture) {
          const material = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0,
            metalness: 0,
          });
          material.needsUpdate = true;
          object.traverse(function (child) {
            if (child.isMesh) {
              child.material = material;
            }
          });
        });
      }
    });
    spotLight.target = mainObject; // Rotate the spot light to the main object
    scene.add(mainObject);
  });

  scene.add(ambientLight);
  // Add the spot light to the scene
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

<style scoped>
.canvas {
  margin-top: -10%;
  margin-left: -4%;
}
.slider {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.canvas {
  position: relative; /* ou 'absolute' */
}
</style>
