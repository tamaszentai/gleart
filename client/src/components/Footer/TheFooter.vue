<template>
  <footer>
    <ul>
      <li><a href="https://www.facebook.com/GLeArt-276683485725990" target="_blank"><img src="../../assets/facebook.png"></a></li>
      <li><a href="https://www.instagram.com/insomnia_gleart/" target="_blank"><img src="../../assets/instagram.png"></a></li>
      <li><a href="https://www.tiktok.com/@nimphasylum" target="_blank"><img src="../../assets/tik-tok.png"></a></li>

    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: rgba(255, 255, 255, 0.15);
  background-color: transparent;
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 3rem;
  color: whitesmoke;
}

ul {
  list-style: none;
  margin: 0;
}

li {
  display: inline-block;
  padding: 0 2rem;
}

li img{
  filter: invert(1);
  height: 32px;
}
</style>