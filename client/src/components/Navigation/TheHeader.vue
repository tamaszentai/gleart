<template>
  <header v-if="isHide">
    <ul>
      <li>
        <router-link to="/home"><h2>HOME</h2></router-link>
      </li>
      <li>
        <router-link to="/about"><h2>ABOUT ME</h2></router-link>
      </li>
      <!-- <li><router-link to="/home"><img src="../../assets/GLEART_logo.png"></router-link></li> -->
      <li class="dropdown">
        <router-link disabled to="digitalart"><h2>GALLERY</h2></router-link>
          <div class="dropdown-content">
        <router-link to="/digitalart"> DIGITAL ART</router-link>
        <router-link to="/traditionalart">TRADITIONAL ART</router-link>
      </div>
      </li>
    
      <li>
        <router-link to="/contact"><h2>MESSAGE ME</h2></router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    isHide() {
      return this.$route.path !== "/login";
    },
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
  padding: 1rem 6rem;
  display: inline-block;
  color: whitesmoke;
  width: auto;
}

a:hover,
a:active,
a.active {
  text-decoration: underline;
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
  left: 35%;
  background-color: rgba(255, 255, 255, 0.2);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

}

/* Links inside the dropdown */
.dropdown-content a {
  color: whitesmoke;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>