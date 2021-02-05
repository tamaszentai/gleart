<template>
  <main>
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="fade-component" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <the-footer></the-footer>
  </main>
</template>

<script>
import TheHeader from "./components/Navigation/TheHeader";
import TheFooter from "./components/Footer/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  methods: {
    toggleHeader() {
      this.isGalleryClicked = true;
    },
  },
  computed: {
    hidingGalleryNav() {
      return this.$route.path === '/digitalart' || this.$route.path === '/traditionalart' ? false : '';
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Texturina&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: "Texturina", serif;
  background-image: url("./assets/GLEART_background1.jpg");
  position: relative;
  background-size: cover;
  background-attachment: fixed;
}

.fade-component-enter-from,
.fade-component-leave-to {
  opacity: 0;
}

.fade-component-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-component-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-component-enter-to,
.fade-component-leave-from {
  opacity: 1;
}
</style>