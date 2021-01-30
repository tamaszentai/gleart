import { createStore } from 'vuex';

import AboutModule from './Modules/About.js';

const store = createStore({
  modules: {
    about: AboutModule
  },
  state() {
    return {}
  },
  mutations: {},
  actions: {},
  getters: {},
})

export default store;