<template>
  <section>
    <gallery-grid>
      <div
        class="galleryCard"
        v-for="(image, index) in getImages"
        :key="image.id"
      >
        <img :src="image.url" @click="openImage(image.url, index)" />{{
          image.title
        }}
      </div>
    </gallery-grid>
    <transition name="fade-gallery" mode="out-in">
      <div v-if="isLightboxActive" class="lightbox" >
         <div @click="prevImage" class="previous">back</div>
        <img :src="showImage || showNextImage" class="openedImage"  @click="closeImage"/>
        <div @click="nextImage" class="next">forward</div>
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
     await this.$store.dispatch('traditionalArt/loadImages');
    },
    openImage(url, index) {
      this.isLightboxActive = true;
      this.tempImageUrl = url;
      this.tempIndex = index;
    },
    closeImage() {
      this.isLightboxActive = false;
    },
    prevImage() {
      if (this.tempIndex > 0) {
        this.tempIndex -= 1;
      }
    },
    nextImage() {
      if (
        this.$store.getters["traditionalArt/getImages"].length - 1 >
        this.tempIndex
      ) {
        this.tempIndex += 1;
      }
    },
  },
  computed: {
    getImages() {
      return this.$store.getters["traditionalArt/getImages"];
    },
    openedImageUrl() {
      return this.tempImageUrl;
    },
    showImage() {
      return this.$store.getters["traditionalArt/getImages"][this.tempIndex].url;
    },
  },
};
</script>

<style scoped>
section {
  color: whitesmoke;
}

.galleryCard {
  width: 250px;
  height: 250px;
  text-align: center;
  overflow: hidden;
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
  color: red;
  font-size: 5rem;
}

.openedImage {
  height: 75vh;
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
.next:hover  {
  color: orange;
}
</style>