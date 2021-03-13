<template>
  <header>
    <ul>
      <li>
        <router-link to="/home"><h2>HOME</h2></router-link>
      </li>
      <li>
        <router-link to="/about"><h2>ABOUT ME</h2></router-link>
      </li>
      <li class="dropdown">
        <h2 class="gallery" :class="isGalleryActiveComputed">GALLERY</h2>
        <div class="dropdown-content">
          <router-link to="/digitalart" 
            >DIGITAL ART</router-link
          >
          <router-link to="/traditionalart"
            >TRADITIONAL ART</router-link
          >
        </div>
      </li>

      <li>
        <router-link to="/contact"><h2>MESSAGE ME</h2></router-link>
      </li>
       <li v-if="isAuthenticated">
        <router-link to="/editabout"><h2>EDIT ABOUT</h2></router-link>
      </li>
      <li v-if="isAuthenticated">
        <router-link to="/editdigitalart"><h2>EDIT DIGITALART</h2></router-link>
      </li>
       <li v-if="isAuthenticated">
        <router-link to="/edittraditionalart"><h2>EDIT DIGITALART</h2></router-link>
      </li>
      <li v-if="isAuthenticated">
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    }
  },
  computed: {
    isHide() {
      return this.$route.path !== "/login";
    },
    isGalleryActiveComputed() {
      return this.$route.path === "/traditionalart" || this.$route.path === "/digitalart" ? "active" : "";
    },
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  },
};
</script>

<style scoped>
header {
  background: transparent;
  height: 7rem;
  margin-bottom: 6rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 2rem;
}
a {
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  color: whitesmoke;
  width: auto;
}
.gallery {
  color: whitesmoke;
  text-decoration: none;
  display: block;
}
.gallery:hover,
.gallery.active {
  text-decoration: underline;
  cursor: pointer;
}
a:hover,
a:active,
a.active {
  text-decoration: underline;
  cursor: pointer;
}
img {
  display: inline-block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: whitesmoke;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>