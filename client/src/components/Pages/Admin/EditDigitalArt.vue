<template>
  <content>
    <ul>
      <li v-for="image in getImages" :key="image.id">{{ image.title }} <img :src=image.url class="galleryCard"><button @click="deleteImage(image.id)">Delete Image</button></li>
    </ul>
    <form @submit.prevent="addNewImage"> 
      <label>Id</label>
      <input type="text" v-model="id" />
      <label>Title</label>
      <input type="text" v-model="title" />
      <label>Url</label>
      <input type="text" v-model="url"/>
      <button type="submit">Add new image</button>
    </form>
  </content>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      title: '',
      url: ''
    }
  },
  computed: {
    getImages() {
      return this.$store.getters["digitalArt/getImages"];
    },
  },
  methods: {
    addNewImage() {
      if(this.id !== '' && this.title !== '' && this.url !== ''){
        const image = {
          id: this.id,
          title: this.title,
          url: this.url
        }
        this.$store.dispatch('digitalArt/addNewImage', image)
      } else {
        alert("One of the fields are empty!!!")
      }
    },
    deleteImage(id) {
      this.$store.dispatch('digitalArt/deleteImage', id)
    }
  }
};
</script>

<style scoped>
.galleryCard {
  width: 10%;
}

content {
  color: whitesmoke;
}
</style>