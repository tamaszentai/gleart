// import FirebaseInit from "../../../firebaseinit";
import firebase from 'firebase';

export default {
  namespaced: true,
  state() {
    return {
      user: null
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    logout(state) {
      state.user = null;
    }
  },
  actions: {
    async login(context,payload) {
      console.log(payload);
      let userState;
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
         .then(user => {
            console.log(user);
            userState = user;
         })
         .catch(err => {
            this.errorMessage = err.message
            throw err;
         });
         console.log(userState);

         context.commit('setUser', userState);
    },
    async logout(context) {
     const response = await firebase.auth().signOut();
     console.log(response);
    context.commit('logout');
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user
    }
  }
};
