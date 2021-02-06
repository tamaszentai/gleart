<template>
  <section>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Username: </label>
      <input type="text" v-model="userNameInput" required/>
      <label>Password: </label>
      <input type="password" v-model="passwordInput" required/>
      <button type="submit">Login</button>
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
    },
    methods: {
      login() {
        if (this.userNameInput !== '' & this.passwordInput !== '') {
          console.log(this.userNameInput, this.passwordInput);
        }
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

form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: transparent;
  border: solid whitesmoke 1px;
}

label {
  font-weight: bold;
  color: whitesmoke
}
</style>