<template>
  
  <div>
    <h2>Edit About</h2>
    <div>
      <div class="heroImageContainer">
        <img :src="getHeroImage">
        <input type="file" style="display: none" @change="onFileSelected" ref="fileInput">
        <button @click="$refs.fileInput.click()">Choose new image</button>
        <button @click="updateImage">Upload new image</button>
        <button @click="printData">Print</button>
      </div>
      <textarea v-model="about" rows="20" cols="100"></textarea>
      <base-button @click="setAbout">Update</base-button>
      {{getAbout}}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.loadAbout();
    this.printData();
  },
  data() {
    return {
      selectedFile: null,
      about: null
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    setAbout() {
      this.$store.dispatch('about/updateAbout', this.about);
    },
    async loadAbout() {
      await this.$store.dispatch("about/loadAbout");
    },
    printData() {
      // this.about = this.$store.getters["about/getAbout"];
      console.log(this.$store.getters["about/getAbout"]);
    }
  },
  computed: {
    getHeroImage() {
      return this.$store.getters['about/getHeroImage'];
    },
    getAbout() {
      return this.$store.getters["about/getAbout"];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>