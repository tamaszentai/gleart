<template>
  <section>
    <h2>About Me</h2>
    <p>{{getBio}}</p>
  </section>
</template>

<script>
export default {
  computed: {
    getBio() {
      return this.$store.getters['about/getAbout']
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}

section {
  color: white;
}
</style>