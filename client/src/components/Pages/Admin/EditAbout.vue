<template>
  
  <div>
    <h2>Edit About</h2>
    <div>
      <div class="heroImageContainer">
        <img :src="getHeroImage">
        <input type="file" style="display: none" @change="onFileSelected" ref="fileInput">
        <button @click="$refs.fileInput.click()">Choose new image</button>
        <button @click="updateImage">Upload new image</button>
      </div>
      <textarea v-model="data" rows="20" cols="100"></textarea>
      <base-button @click="setBio">Update</base-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      data: this.$store.getters["about/getAbout"]
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    setBio() {
      this.$store.dispatch('about/updateBio', this.data);
    }
  },
  computed: {
    getHeroImage() {
      return this.$store.getters['about/getHeroImage'];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>