<template>
  <section>
    <form class="contact-form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" rows="15" required></textarea>
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
      console.log(process.env.VUE_APP_EMAILJS_SERVICE_ID);
      emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.VUE_APP_EMAILJS_USER_ID)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("The message has been sent to Lea!")
            e.target.reset();
        }, (error) => {
            console.log('FAILED...', error);
            alert("Something went wrong");
        })
        
    }
  }
}
</script>

<style scoped>
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

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
  background-color: #3b3d3a;
  color: whitesmoke;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

</style>