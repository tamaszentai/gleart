<template>
  <section>
    <h2>DIGITAL ART</h2>
    <gallery-grid>
      <div
        class="gallery-panel"
        v-for="(image, index) in getImages"
        :key="image.id"
      >
        <img :src="image.url" @click="openImage(image.url, index)" />
        <div class="container">{{ image.title }}</div>
      </div>
    </gallery-grid>
    <transition name="fade-gallery" mode="out-in">
      <div v-if="isLightboxActive" class="lightbox" @click="closeImage">
        <!-- <button @click="prevImage" class="previous">back</button> -->
        <img
          :src="showImage || showNextImage"
          class="openedImage"
          @click="closeImage"
        />
        <p></p>
        <!-- <button @click="nextImage" class="next">forward</button> -->
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "lightbox.active",
      isLightboxActive: false,
      tempImageUrl: "",
      tempIndex: null,
    };
  },
  created() {
    this.loadImages();
  },
  methods: {
    async loadImages() {
      await this.$store.dispatch("digitalArt/loadImages");
    },
    openImage(url, index) {
      this.isLightboxActive = true;
      this.tempImageUrl = url;
      this.tempIndex = index;
    },
    closeImage() {
      this.isLightboxActive = false;
    },
    // prevImage() {
    //   if (this.tempIndex > 0) {
    //     this.tempIndex -= 1;
    //   }
    // },
    // nextImage() {
    //   if (
    //     this.$store.getters["digitalArt/getImages"].length - 1 >
    //     this.tempIndex
    //   ) {
    //     this.tempIndex += 1;
    //   }
    // },
  },
  computed: {
    getImages() {
      return this.$store.getters["digitalArt/getImages"];
    },
    openedImageUrl() {
      return this.tempImageUrl;
    },
    showImage() {
      return this.$store.getters["digitalArt/getImages"][this.tempIndex].url;
    },
  },
};
</script>

<style scoped>
section {
  color: whitesmoke;
}

h2 {
  text-align: center;
}

.gallery-panel img {
  display:block;
  margin:auto;
  width: 80%;
  height: 22vw;
  object-fit: cover;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  cursor: pointer;
}

.container {
  display:block;
  margin:auto;
  background-color: rgba(255, 255, 255, 0.2);
  width: 80%;
  text-align: center;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
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
  color: red;
  font-size: 5rem;
}

.openedImage {
  height: 95vh;
}

.fade-gallery-enter-from,
.fade-gallery-leave-to {
  opacity: 0;
}

.fade-gallery-enter-active {
  transition: opacity 0.2s ease-out;
}

.fade-gallery-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-gallery-enter-to,
.fade-gallery-leave-from {
  opacity: 1;
}

.previous,
.next {
  z-index: 1100;
}

.previous:hover,
.next:hover {
  color: orange;
}
</style>