<template>
  <content>
    <gallery-grid>
      <div class="galleryCard" v-for="image in getImages" :key="image.id">
        <img :src="image.url" />{{ image.title }}
      </div>
    </gallery-grid>
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
content {
  color: whitesmoke;
}

.galleryCard {
  width: 250px;
  height: 250px;
  text-align: center;
}

.galleryCard img {
  height: 200px;
  width: auto;
  display: block;
  margin: auto;
}
</style>