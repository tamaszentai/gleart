<template>
  <content>
    <ul>
      <li v-for="image in getImages" :key="image.id">{{ image.title }} <img :src=image.url class="galleryCard"></li>
    </ul>
  </content>
</template>

<script>
export default {
  computed: {
    getImages() {
      return this.$store.getters["digitalArt/getImages"];
    },
  },
};
</script>

<style scoped>
.galleryCard {
  width: 10%;
}

content {
  color: whitesmoke;
}
</style>