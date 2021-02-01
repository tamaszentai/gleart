import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Pages/Home.vue";
import AboutMe from "./components/Pages/AboutMe.vue";
import Gallery from "./components/Pages/Gallery.vue";
import Contact from "./components/Pages/Contact.vue";
import Login from "./components/Pages/Login.vue";
import EditAbout from "./components/Pages/EditAbout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/about", component: AboutMe },
    { path: "/gallery", component: Gallery },
    { path: "/contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/editabout", component: EditAbout},
  ],
  linkActiveClass: "active",
});

export default router;
