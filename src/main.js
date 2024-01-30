import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide"; // Assurez-vous d'utiliser la bonne importation

import "./index.css";

const app = createApp(App);

// Utilisez les plugins avant de monter l'application
app.use(VueSplide);

app.mount("#app");
