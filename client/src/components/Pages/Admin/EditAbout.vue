<template>
  <div>
    <transition name="fade-gallery" mode="out-in">
    <base-dialog
      v-if="changePicture"
      title="New Profile Picture"
      @close="closeModal"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>
          Please check all inputs and make sure you enter at least a few
          characters into each input field.
        </p>
      </template>
      <template #actions>
        <input
          type="file"
          style="display: none"
          @change="onFileSelected"
          ref="fileInput"
        />

        <button @click="$refs.fileInput.click()">Choose new image</button>
        <button @click="updateImage">Upload new image</button>
      </template>
    </base-dialog>
</transition>
    <div class="container">
      <div class="imageContainer">
        <img :src="getHeroImage" />
        <button @click="openModal">Change Picture</button>
      </div>
      <div class="aboutContainer">
        <textarea v-model="about" rows="20" cols="100"></textarea>
        <button @click="setAbout">Update About</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.loadAbout();
    this.loadHeroImage();
  },
  data() {
    return {
      selectedFile: null,
      about: null,
      changePicture: false,
      newImage: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    setAbout() {
      this.$store.dispatch("about/updateAbout", this.about);
    },
    async loadAbout() {
      await this.$store.dispatch("about/loadAbout");
    },
    async loadHeroImage() {
      await this.$store.dispatch("about/loadHeroImage");
    },
    updateImage() {
      this.$store.dispatch("about/updateHeroImage", this.selectedFile);
    },
    openModal() {
      this.changePicture = true;
    },
    closeModal() {
      this.changePicture = false;
    },
  },
  computed: {
    getHeroImage() {
      return this.$store.getters["about/getHeroImage"];
    },
    getAbout() {
      return this.$store.getters["about/getAbout"];
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
}

.container img {
  height: 19.2rem;
}

.newImageContainer {
  margin: auto;
  border: solid red 2px;
  width: 10rem;
  height: 20rem;
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
</style>