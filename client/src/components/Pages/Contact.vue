<template>
  <section>
    <form class="contact-form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name"/>
      <label>Email</label>
      <input type="email" name="user_email"/>
      <label>Message</label>
      <textarea name="message" rows="20" cols="100"></textarea>
      <input type="submit" value="Send" />
    </form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    clearForm() {

    },
    sendEmail: (e) => {
      emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.VUE_APP_EMAILJS_USER_ID)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            e.target.reset();
        }, (error) => {
            console.log('FAILED...', error);
        })
        
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}

section {
  color: white;
}
</style>