<template>
  <the-navigation></the-navigation>
  <main>
    <router-view v-slot="slotProps">
      <transition name="fade-component" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/Navigation/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Texturina&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: 'Texturina', serif;
  background-image: url('./assets/GLEART_background1.jpg');
  height: 100vh;
  width: 100vw;
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  /* background-repeat: no-repeat; */
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