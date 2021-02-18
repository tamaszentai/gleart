<template>
  <content>
    <form @submit.prevent="addNewImage">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" />
      <input type="file" @change="onFileSelected" />
      <button type="submit">Add new image</button>
    </form>
    <gallery-grid>
      <div class="galleryCard" v-for="image in getImages" :key="image.id">
        <img :src="image.url" />{{ image.title }}
        <button class="delete" @click="deleteImage(image.id, image.url)">
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
    };
  },
  computed: {
    getImages() {
      return this.$store.getters["digitalArt/getImages"];
    },
  },
  methods: {
    addNewImage() {
      if (this.title !== "" && this.selectedFile !== null) {
        const image = {
          title: this.title,
          file: this.selectedFile,
        };

        this.$store.dispatch("digitalArt/addNewImage", image);
      } else {
        alert("One of the fields are empty!!!");
      }

      console.log(this.$store.state);
    },
    deleteImage(id, url) {
      const data = { id, url };
      this.$store.dispatch("digitalArt/deleteImage", data);
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
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