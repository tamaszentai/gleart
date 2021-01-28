<template>
  <header>
    <ul>
      <li>
        <router-link to="/home"><h2>HOME</h2></router-link>
      </li>
      <li><router-link to="/about"><h2>ABOUT ME</h2></router-link></li>
      <li><router-link to="/gallery"><h2>GALLERY</h2></router-link></li>
      <li><router-link to="/contact"><h2>CONTACT</h2></router-link></li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>

header {
  background: transparent;
  height: 7rem;
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
  padding: 0.5rem 7rem;
  display: inline-block;
  color: white;
}

a:hover,
a:active,
a.active {
  text-decoration: underline;
}
</style>