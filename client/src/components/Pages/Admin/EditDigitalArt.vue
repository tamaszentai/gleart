<template>
  <content>
     <form @submit.prevent="addNewImage">
      <label>Id</label>
      <input type="text" v-model="id" />
      <label>Title</label>
      <input type="text" v-model="title" />
      <label>Url</label>
      <input type="text" v-model="url" />
      <button type="submit">Add new image</button>
    </form>
    <gallery-grid>
      <div class="galleryCard" v-for="image in getImages" :key="image.id">
        <img :src="image.url" />{{ image.title }}
        <button class="delete" @click="deleteImage(image.id)">X</button>
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
      url: "",
    };
  },
  computed: {
    getImages() {
      return this.$store.getters["digitalArt/getImages"];
    },
  },
  methods: {
    addNewImage() {
      if (this.id !== "" && this.title !== "" && this.url !== "") {
        const image = {
          id: this.id,
          title: this.title,
          url: this.url,
        };
        this.$store.dispatch("digitalArt/addNewImage", image);
      } else {
        alert("One of the fields are empty!!!");
      }
    },
    deleteImage(id) {
      this.$store.dispatch("digitalArt/deleteImage", id);
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