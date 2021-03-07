import firebase from "firebase";
import "firebase/database";

export default {
  namespaced: true,
  state() {
    return {
      about: "",
      heroImage: "https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/124716723_3602498166448637_6147776248570215012_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=3Ln555yr1csAX8Z24EX&_nc_ht=scontent.flhr4-2.fna&oh=3b43c131c11c6837629d3ef3e7872db5&oe=603F4FD3",
    };
  },
  mutations: {
    setAbout(state, payload) {
      state.about = payload;
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
          
        }
        else {
          console.log("No data available");
        }
        console.log(responseData);
      });
      context.commit("setAbout", responseData)
    },
    async updateAbout(context, payload) {
      console.log(payload);
      await firebase
      .database()
      .ref("about/")
      .set(payload);
    context.commit("updateAbout", payload);
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
