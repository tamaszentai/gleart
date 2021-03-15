<template>
  <div>
    <transition name="fade-gallery" mode="out-in">
      <base-dialog
        v-if="changePicture"
        title="New Profile Picture"
        @close="closeModal"
      >
        <template #default>
          <div class="newImageContainer">
            <img :src="newImage" />
          </div>
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
        <textarea v-model="about" rows="20" cols="100" required></textarea>
        <button @click="updateAbout">Update About</button>
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
      console.log(this.selectedFile);
      this.newImage = URL.createObjectURL(this.selectedFile);
    },
    updateAbout() {
      if (this.about === null || this.about === "") {
        alert("Input field is empty");
      } else {
        this.$store.dispatch("about/updateAbout", this.about);
      }
    },
    async loadAbout() {
      await this.$store.dispatch("about/loadAbout");
    },
    async loadHeroImage() {
      await this.$store.dispatch("about/loadHeroImage");
    },
    async updateImage() {
      await this.$store.dispatch("about/updateHeroImage", this.selectedFile);
      this.closeModal();
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
  width: auto;
  height: auto;
}

.newImageContainer img {
  display: block;
  margin: auto;
  max-width: 100%;
  /* max-height: 100%; */
  object-fit: cover;
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