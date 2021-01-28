<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
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
  background-image: url('./assets/GLEART background1.jpg');
}


</style>