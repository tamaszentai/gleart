import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Pages/Home.vue";
import AboutMe from "./components/Pages/AboutMe.vue";
import DigitalArt from "./components/Pages/DigitalArt.vue";
import TraditionalArt from "./components/Pages/TraditionalArt.vue";
import Contact from "./components/Pages/Contact.vue";
import Login from "./components/Pages/Login.vue";
import EditAbout from "./components/Pages/EditAbout.vue";
import EditDigitalArt from "./components/Pages/EditDigitalArt.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/about", component: AboutMe },
    { path: "/digitalart", component: DigitalArt },
    { path: "/traditionalart", component: TraditionalArt },
    { path: "/contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/editabout", component: EditAbout},
    { path: "/editdigitalart", component: EditDigitalArt}
  ],
  linkActiveClass: "active",
});

export default router;
