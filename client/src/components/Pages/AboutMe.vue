<template>
  <section>
    <base-spinner v-if="isLoading"></base-spinner>
    <div v-else-if="getBio && getHeroImage && !isLoading" class="container">
      <div class="hero_image_container">
        <img :src="getHeroImage" />
      </div>
      <div class="hero_info_container">
        <p class="hero_info_text">
          <i>{{ getBio }}</i>
        </p>

        <div class="social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/GLeArt-276683485725990"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'facebook']"
              /></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/insomnia_gleart"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'instagram']"
              /></a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@nimphasylum" target="_blank"
                ><font-awesome-icon :icon="['fab', 'tiktok']"
              /></a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
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
      this.isLoading = true;
      await this.$store.dispatch("about/loadAbout");
      this.isLoading = false;
    },
    async loadHeroImage() {
      this.isLoading = true;
      await this.$store.dispatch("about/loadHeroImage");
      this.isLoading = false;
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
  cursor: pointer;
}

a:link,
a:visited,
a:active {
  color: whitesmoke;
}

a:hover {
  color: rgb(146, 141, 141);
}
</style>