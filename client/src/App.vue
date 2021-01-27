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

html {
  font-family: 'Texturina', serif;
}


</style>