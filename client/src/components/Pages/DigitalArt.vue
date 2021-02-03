<template>
  <content>
    <gallery-grid>
      <div class="galleryCard" v-for="(image, index) in getImages" :key="image.id">
        <img :src="image.url" @click="openImage(image.url, index)"/>{{ image.title }}
      </div>
    </gallery-grid>
    <div v-if="isLightboxActive" class="lightbox" @click="closeImage">
      <img :src="openedImageUrl" class="openedImage">
    </div>
  </content>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'lightbox.active',
      isLightboxActive: false,
      tempImageUrl: '',
    }
  },
  methods: {
    openImage(url, index) {
      this.isLightboxActive = true;
      this.tempImageUrl = url;
      console.log(index);
    },
    closeImage() {
      this.isLightboxActive = false;
    }
  },
  computed: {
    getImages() {
      return this.$store.getters["digitalArt/getImages"];
    },
    openedImageUrl() {
      return this.tempImageUrl;
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
  cursor: pointer;
}

.lightbox {
  position: fixed;
  display: flex;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
}

.openedImage {
  height: 75vh;
}
</style>