import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
import "firebase/database";

export default {
  namespaced: true,
  state() {
    return {
      dummyImages: [],
    };
  },
  mutations: {
    addNewImage(state, payload) {
      const newImage = {
        id: payload.id,
        title: payload.title,
        url: payload.url,
        fileName: payload.fileName,
      };
      state.dummyImages.push(newImage);
    },
    deleteImage(state, payload) {
      const newState = state.dummyImages.filter(
        (image) => image.id !== payload
      );
      state.dummyImages = newState;
    },
  },
  actions: {
    addNewImage(context, payload) {
      const id = uuidv4();
      const fileName = payload.file.name.split(".");
      const modifiedFileName = id + "." + fileName[1];

      const storageRef = firebase
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
    deleteImage(context, payload) {
      console.log(payload.id);
      firebase
        .database()
        .ref("digitalart/" + payload.id)
        .remove();

      // Create a reference to the file to delete
      const storageRef = firebase
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
      return state.dummyImages;
    },
  },
};
