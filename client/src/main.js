import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

import router from './router.js';



const store = createStore({
  state() {
    return {
      home: 'Home',
      aboutme: 'About Me',
      gallery: ['image1', 'image2', 'image3', 'image4'],
      contact: 'dummyemail@dummy.com'
    }
  },
  mutations: {},
  actions: {},
  getters: {}
})


const app = createApp(App);


app.use(router);

app.use(store);

app.mount('#app')



