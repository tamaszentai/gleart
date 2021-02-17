<template>
  <content>
    <form @submit.prevent="addNewImage">
      <label>Id</label>
      <input type="text" v-model="id" />
      <label>Title</label>
      <input type="text" v-model="title" />
      <label>Url</label>
      <input type="file" @change="onFileSelected" />
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
import firebase from "firebase";
export default {
  data() {
    return {
      id: "",
      title: "",
      selectedFile: null,
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
      if (this.id !== "" && this.title !== "" && this.selectedFile !== null) {
        const storageRef = firebase
          .storage()
          .ref(`digitalart/${this.selectedFile.name}`)
          .put(this.selectedFile);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.url = url;
              console.log(url);
            });
          }
        );

        const image = {
          id: this.id,
          title: this.title,
          url: this.url,
        };

        this.$store.dispatch("digitalArt/addNewImage", image);
      } else {
        alert("One of the fields are empty!!!");
      }

      console.log(this.$store.state);
    },
    deleteImage(id) {
      this.$store.dispatch("digitalArt/deleteImage", id);
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    // upload() {
    //   const storageRef = firebase
    //     .storage()
    //     .ref(`digitalart/${this.selectedFile.name}`)
    //     .put(this.selectedFile);
    //   storageRef.on(
    //     `state_changed`,
    //     (snapshot) => {
    //       this.uploadValue =
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     },
    //     (error) => {
    //       console.log(error.message);
    //     },
    //     () => {
    //       this.uploadValue = 100;
    //       storageRef.snapshot.ref.getDownloadURL().then((url) => {
    //         console.log(url);
    //       });
    //     }
    //   );
    // },
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