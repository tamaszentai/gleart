<template>
  
  <div>
    <h2>Edit About</h2>
    <div>
      <textarea v-model="data" rows="20" cols="100"></textarea>
      <base-button @click="setBio">Update</base-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.getters["about/getAbout"]
    }
  },
  methods: {
    setBio() {
      this.$store.dispatch('about/updateBio', this.data);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>