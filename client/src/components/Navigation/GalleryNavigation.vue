<template>
  <header>
    <ul>
      <li>
        <router-link to="/digitalart"><h2>DIGITAL ART</h2></router-link>
      </li>
      <li>
        <router-link to="/traditionalart"><h2>TRADITIONAL ART</h2></router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  emits: ['toggle-header'],
  methods: {
    toggleHeader() {
      this.$emits('toggle-header');
    }
  },
}
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


a:hover,
a:active,
a.active {
  text-decoration: underline;
  cursor: pointer;
}
</style>