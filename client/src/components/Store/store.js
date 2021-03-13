import { createStore } from 'vuex';

import AboutModule from './Modules/About.js';
import DigitalArtModule from './Modules/DigitalArt.js';
import TraditionalArtModule from './Modules/TraditionalArt.js';
import AuthModule from './Modules/Auth.js';

const store = createStore({
  modules: {
    about: AboutModule,
    digitalArt: DigitalArtModule,
    traditionalArt: TraditionalArtModule,
    auth: AuthModule
  },
  state() {
    return {}
  },
  mutations: {},
  actions: {},
  getters: {},
})

export default store;