import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
import "firebase/database";

export default {
  namespaced: true,
  state() {
    return {
      images: [],
    };
  },
  mutations: {
    setImages(state, payload) {
      const reverseArray = [...payload].reverse();
      state.images = reverseArray;
    },
    addNewImage(state, payload) {
      const newImage = {
        id: payload.id,
        title: payload.title,
        url: payload.url,
        fileName: payload.fileName,
      };
      state.images.unshift(newImage);
    },
    deleteImage(state, payload) {
      const newState = state.images.filter((image) => image.id !== payload);
      state.images = newState;
    },
  },
  actions: {
    async loadImages(context) {
      let responseData = null;
      await firebase
        .database()
        .ref("traditionalart/")
        .get()
        .then(function(snapshot) {
          if (snapshot.exists()) {
            responseData = snapshot.val();
          } else {
            console.log("No data available");
          }
        });

      console.log(responseData);

      const images = [];

      for (const key in responseData) {
        const image = {
          id: key,
          fileName: responseData[key].fileName,
          title: responseData[key].title,
          url: responseData[key].url,
        };
        images.push(image);
      }
      context.commit("setImages", images);
    },

    async addNewImage(context, payload) {
      const id = Date.now() + uuidv4();
      const fileName = payload.file.name.split(".");
      const modifiedFileName = id + "." + fileName[1];

      console.log(payload);
      await firebase
        .storage()
        .ref("traditionalart/" + modifiedFileName)
        .put(payload.file);

      await firebase
        .storage()
        .ref("traditionalart/" + modifiedFileName)
        .getDownloadURL()
        .then((imgUrl) => {
          console.log(imgUrl);

          const image = {
            id: id,
            title: payload.title,
            url: imgUrl,
            fileName: modifiedFileName,
          };

          firebase
            .database()
            .ref("traditionalart/" + image.id)
            .set(image);
          console.log(payload);
          context.commit("addNewImage", image);
        });
    },

    async deleteImage(context, payload) {
      console.log(payload.id);
      await firebase
        .database()
        .ref("traditionalart/" + payload.id)
        .remove();

      // Create a reference to the file to delete
      const storageRef = await firebase
        .storage()
        .ref(`traditionalart/${payload.fileName}`);


      // Delete the file
      storageRef
        .delete()
        .then(() => {
          // File deleted successfully
          console.log("File deleted successfully");
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
          console.log(error);
        });

      context.commit("deleteImage", payload.id);
      console.log(payload);
    },
  },
  getters: {
    getImages(state) {
      return state.images;
    },
  },
};
