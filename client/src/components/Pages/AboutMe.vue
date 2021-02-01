<template>
  <section>
    <div class="container">
      <div class="hero_image_container">
        <img src="../../assets/Lea.jpg" class="hero_image" />
      </div>
      <div class="hero_info_container">
        <p class="hero_info_text">{{ getBio }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    getBio() {
      return this.$store.getters["about/getAbout"];
    },
    getHeroImage() {
      return this.$store.getters["about/getHeroImage"];
    },
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
}

section {
  color: whitesmoke;
  margin: 0% 5%;
}

.container {
  margin: 3rem auto;
  max-width: 1500px;
}

.hero_image_container {
  display: inline;
  vertical-align: middle;
}

.hero_image {
  vertical-align: top;
}

.hero_info_container {
  display: inline-block;
  vertical-align: middle;
  width: 46%;
  margin: 2%;
  margin-top: 0;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: scroll;
}
</style>