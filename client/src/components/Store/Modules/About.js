import firebase from "firebase";
import "firebase/database";

export default {
  namespaced: true,
  state() {
    return {
      about: null,
      heroImage: null
    }
  },
  mutations: {
    setAbout(state, payload) {
      state.about = payload;
    },
    setHeroImage(state, payload) {
      state.heroImage = payload;
    },
    updateHeroImage(state, payload) {
      const updatedHeroImage = payload;
      state.heroImage = updatedHeroImage;
    },
    updateAbout(state, payload) {
      const updatedBio = payload;
      state.about = updatedBio;
    },
  },
  actions: {
    async loadAbout(context) {
      let responseData;
      await firebase
        .database()
        .ref("about/")
        .get()
        .then(function(snapshot) {
          if (snapshot.exists()) {
            responseData = snapshot.val();
          } else {
            console.log("No data available");
          }
        });
      context.commit("setAbout", responseData);
    },

    async loadHeroImage(context) {
      let responseData;
      await firebase
        .database()
        .ref("aboutImage/")
        .get()
        .then(function(snapshot) {
          if (snapshot.exists()) {
            responseData = snapshot.val();
          } else {
            console.log("No data available");
          }
        });
      context.commit("setHeroImage", responseData);
    },

    async updateAbout(context, payload) {
      await firebase
        .database()
        .ref("about/")
        .set(payload);
      context.commit("updateAbout", payload);
    },

    async updateHeroImage(context, payload) {
      const modifiedFileName = "GleArt.jpg";

      console.log(payload);
      await firebase
        .storage()
        .ref("about/" + modifiedFileName)
        .put(payload);

      await firebase
        .storage()
        .ref("about/" + modifiedFileName)
        .getDownloadURL()
        .then((imgUrl) => {

          firebase
          .database()
          .ref("aboutImage/")
          .set(imgUrl);
        
        context.commit("updateHeroImage", imgUrl);
        });
    },
  },
  getters: {
    getAbout(state) {
      return state.about;
    },
    getHeroImage(state) {
      return state.heroImage;
    },
  },
};
