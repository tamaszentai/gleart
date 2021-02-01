<template>
  <section>
    <form class="contact-form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" rows="20" cols="100"></textarea>
      <input type="submit" value="Send" />
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  text-align: center;
}

section {
  color: white;
}
</style>