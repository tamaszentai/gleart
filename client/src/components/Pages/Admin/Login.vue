<template>
  <section>
    <h2>Login</h2>
    <form>
      <label>Username: </label>
      <input type="text" v-model="userNameInput"/>
      <label>Password: </label>
      <input type="password" v-model="passwordInput"/>
      <button>Login</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        userNameInput: '',
        passwordInput: ''
      }
    }
  }
</script>

<style scoped>
section {
  color: whitesmoke
}
h2 {
  text-align: center;
  color: whitesmoke;
}
</style>