import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase";
import firebaseinit from './firebaseinit';

import router from "./router.js";
import store from "./components/Store/store.js";

import BaseButton from "./components/UI/BaseButton.vue";
import GalleryGrid from "./components/UI/GalleryGrid.vue";

const app = createApp(App);

const firebaseConfig = firebaseinit;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

app.use(router);
app.use(store);

app.component("base-button", BaseButton);
app.component("gallery-grid", GalleryGrid);

router.isReady().then(function() {
  app.mount("#app");
});
