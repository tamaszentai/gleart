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
      state.images = payload;
    },
    addNewImage(state, payload) {
      const newImage = {
        id: payload.id,
        title: payload.title,
        url: payload.url,
        fileName: payload.fileName,
      };
      state.images.push(newImage);
    },
    deleteImage(state, payload) {
      const newState = state.images.filter(
        (image) => image.id !== payload
      );
      state.images = newState;
    },
  },
  actions: {
    async loadImages(context) {
      let responseData = null;
     await
        firebase
        .database()
        .ref("digitalart/")
        .get()
        .then(function(snapshot) {
          if (snapshot.exists()) {
            responseData = snapshot.val();
            
          }
          else {
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
      context.commit('setImages', images);
    },
    async addNewImage(context, payload) {
      const id = uuidv4();
      const fileName = payload.file.name.split(".");
      const modifiedFileName = id + "." + fileName[1];

      const storageRef = await firebase
        .storage()
        .ref(`digitalart/${modifiedFileName}`)
        .put(payload.file);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            const image = {
              id: id,
              title: payload.title,
              url: url,
              fileName: modifiedFileName,
            };
            firebase
              .database()
              .ref("digitalart/" + image.id)
              .set(image);
            console.log(payload);
            context.commit("addNewImage", image);
          });
        }
      );
    },
    async deleteImage(context, payload) {
      console.log(payload.id);
      await firebase
        .database()
        .ref("digitalart/" + payload.id)
        .remove();

      // Create a reference to the file to delete
      const storageRef = await firebase
        .storage()
        .ref(`digitalart/${payload.fileName}`);

      // const desertRef = storageRef.child(`digitalart/${payload.url}`);

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