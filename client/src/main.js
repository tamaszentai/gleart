import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase";
import firebaseinit from './firebaseinit';

import router from "./router.js";
import store from "./components/Store/store.js";

import BaseButton from "./components/UI/BaseButton.vue";
import GalleryGrid from "./components/UI/GalleryGrid.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook)
library.add(faInstagram)
library.add(faTiktok)

const app = createApp(App);

const firebaseConfig = firebaseinit;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon)

app.component("base-button", BaseButton);
app.component("gallery-grid", GalleryGrid);

router.isReady().then(function() {
  app.mount("#app");
});
