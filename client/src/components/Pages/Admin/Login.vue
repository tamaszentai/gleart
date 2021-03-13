<template>
  <section>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Email: </label>
      <input type="email" v-model.trim="emailInput" required />
      <label>Password: </label>
      <input type="password" v-model.trim="passwordInput" required />
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      emailInput: "",
      passwordInput: "",
    };
  },
  methods: {
    async login() {
      if ((this.emailInput !== "") & (this.passwordInput !== "")) {
        const loginData = {
          email: this.emailInput,
          password: this.passwordInput,
        };
        try {
        await this.$store.dispatch('auth/login', loginData);
        this.$router.replace('/home');
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
      }
      }
  

      
    },
  },
};
</script>

<style scoped>
section {
  color: whitesmoke;
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
  color: whitesmoke;
}
</style>