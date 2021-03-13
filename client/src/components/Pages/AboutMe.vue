<template>
  <section>
    <div class="container">
      <div class="hero_image_container">
        <img :src="getHeroImage" />
      </div>
      <div class="hero_info_container">
        <p class="hero_info_text"><i>{{ getBio }}</i></p>
        
        <div class="social">
          <ul>
            <li><font-awesome-icon :icon="['fab', 'facebook']" /></li>
            <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
            <li><font-awesome-icon :icon="['fab', 'tiktok']" /></li>
          </ul>
          <hr></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    this.loadAbout();
    this.loadHeroImage();
  },
  computed: {
    getBio() {
      return this.$store.getters["about/getAbout"];
    },
    getHeroImage() {
      return this.$store.getters["about/getHeroImage"];
    },
  },
  methods: {
    async loadAbout() {
      await this.$store.dispatch("about/loadAbout");
    },
    async loadHeroImage() {
      await this.$store.dispatch("about/loadHeroImage");
    },
  },
};
</script>

<style scoped>
section {
  color: whitesmoke;
}

.container {
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
  height: 10%;
}

.hero_image_container img {
  display: block;
  margin: auto;
  width: 100%;
  height: 30vw;
  object-fit: cover;
}

.hero_info_text {
  margin: 1rem;
  margin-left: 5rem;
}

.social {
  margin-top: 20rem;
}

hr {
  margin: auto;
  width: 20rem;
}

ul {
  text-align: center;
  list-style: none;
  padding: 0;
  
}

li {
  display: inline-block;
  padding: 2rem;
  font-size: 2rem;
}

li:hover {
  color: rgb(146, 141, 141);
  cursor: pointer;
}
</style>