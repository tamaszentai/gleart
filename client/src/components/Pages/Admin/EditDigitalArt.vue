<template>
  <content>
    <transition name="fade-gallery" mode="out-in">
      <base-dialog v-if="isAddNewImage" title="New Image" @close="closeModal">
        <template #default>
          <div class="newImageContainer">
            <img :src="newImage" />
          </div>
        </template>
        <template #actions>
          <form @submit.prevent="upload">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" />
            <input type="file" @change="onFileSelected" />
            <button type="submit">Upload</button>
          </form>
        </template>
      </base-dialog>
    </transition>

    <div class="addNewContainer">
      <button @click="openModal">ADD NEW IMAGE</button>
    </div>
    <gallery-grid>
      <div
        class="gallery-panel"
        v-for="(image, index) in getImages"
        :key="image.id"
      >
        <img :src="image.url" @click="openImage(image.url, index)" />
        <div class="container">{{ image.title }}</div>
        <div class="container">
          <button
            class="delete"
            @click="deleteImage(image.id, image.url, image.fileName)"
          >
            DELETE
          </button>
        </div>
      </div>
    </gallery-grid>
  </content>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      title: "",
      selectedFile: null,
      selectedFileName: "",
      isAddNewImage: false,
      newImage: null,
    };
  },
  computed: {
    getImages() {
      return this.$store.getters["digitalArt/getImages"];
    },
  },
  methods: {
    async loadImages() {
      await this.$store.dispatch("digitalArt/loadImages");
    },
    async upload() {
      if (this.title !== "" && this.selectedFile !== null) {
        const image = {
          title: this.title,
          file: this.selectedFile,
          fileName: this.selectedFileName,
        };

        await this.$store.dispatch("digitalArt/addNewImage", image);
        this.closeModal();
      } else {
        alert("One of the fields are empty!!!");
      }
    },
    deleteImage(id, url, fileName) {
      const data = { id, url, fileName };
      console.log(fileName);
      this.$store.dispatch("digitalArt/deleteImage", data);
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.selectedFileName = event.target.files[0].name;
      this.newImage = URL.createObjectURL(this.selectedFile);
    },
    openModal() {
      this.isAddNewImage = true;
    },
    closeModal() {
      this.isAddNewImage = false;
      this.selectedFile = null;
      this.selectedFileName = "";
      this.newImage = null;
      this.title = "";
    },
  },
  created() {
    this.loadImages();
  },
};
</script>

<style scoped>
content {
  color: whitesmoke;
}

.addNewContainer {
  text-align: center;
  margin: 0 auto;
}

.gallery-panel {
  border: salmon solid 2px;
}

.gallery-panel img {
  display: block;
  margin: auto;
  width: 80%;
  height: 22vw;
  object-fit: cover;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.container {
  display: block;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.2);
  width: 80%;
  text-align: center;
}

.delete {
  color: red;
  cursor: pointer;
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