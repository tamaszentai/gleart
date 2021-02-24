<template>
  <content>
    <form @submit.prevent="addNewImage">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" />
      <input type="file" @change="onFileSelected" />
      <button type="submit">Add new image</button>
    </form>
    <button @click="loadImages">Tester fetcher</button>
    <gallery-grid>
      <div class="galleryCard" v-for="image in getImages" :key="image.id">
        <img :src="image.url" />{{ image.title }}{{image.fileName}}
        <button class="delete" @click="deleteImage(image.id, image.url, image.fileName)">
          X
        </button>
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
      selectedFileName: ''
    };
  },
  created() {
    this.loadImages;
  },
  computed: {
    getImages() {
      return this.$store.getters["digitalArt/getImages"];
    },
  },
  methods: {
    loadImages() {
      this.$store.dispatch('digitalArt/loadImages');
    },
    addNewImage() {
      if (this.title !== "" && this.selectedFile !== null) {
        const image = {
          title: this.title,
          file: this.selectedFile,
          fileName: this.selectedFileName
        };

        this.$store.dispatch("digitalArt/addNewImage", image);
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

.delete {
  color: red;
  cursor: pointer;
}
</style>