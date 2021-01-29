import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      home: 'some text',
      aboutme: 'About Me',
      gallery: ['image1', 'image2', 'image3', 'image4'],
      contact: 'dummyemail@dummy.com'
    }
  },
  mutations: {},
  actions: {},
  getters: {},
})

export default store;