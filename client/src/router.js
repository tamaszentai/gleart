import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Pages/Home.vue";
import AboutMe from "./components/Pages/AboutMe.vue";
import Gallery from "./components/Pages/Gallery.vue";
import Contact from "./components/Pages/Contact.vue";
import Admin from "./components/Pages/Admin.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/about", component: AboutMe },
    { path: "/gallery", component: Gallery },
    { path: "/contact", component: Contact },
    { path: "/admin", component: Admin },
  ],
  linkActiveClass: "active",
});

export default router;
