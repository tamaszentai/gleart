import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase';

export default {
  namespaced: true,
  state() {
    return {
      dummyImages: [
        {
          id: uuidv4(),
          title: "Markolab",
          url:
            "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/139580808_3866209146773388_8468341967264893543_o.jpg?_nc_cat=104&ccb=2&_nc_sid=0debeb&_nc_ohc=3G7SU9B5bmwAX8ZPDkd&_nc_ht=scontent.flhr4-1.fna&oh=87a720e2ee7a91f92b9561ed447a31c0&oe=603F22A7",
        },
        {
          id: uuidv4(),
          title: "The Magician",
          url:
            "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/130521992_3774506749276962_3773479683819168099_o.jpg?_nc_cat=101&ccb=2&_nc_sid=0debeb&_nc_ohc=g94qgVIl38MAX8C6vWV&_nc_ht=scontent.flhr4-1.fna&oh=ffcfb2010491e083b12f22ae426564b6&oe=603C1970",
        },
        {
          id: uuidv4(),
          title: "Plague Doctor",
          url:
            "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/106995191_3320444268016548_3107795467263216648_o.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=C6Th0dJCzNAAX87UTLa&_nc_ht=scontent.flhr4-1.fna&oh=f94f71cb9e27fb6a49dfa4108e04e0ad&oe=603C90D9",
        },
        {
          id: uuidv4(),
          title: "Portrait",
          url:
          "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/135554339_3838166389577664_2553318880984613522_o.jpg?_nc_cat=107&ccb=2&_nc_sid=0debeb&_nc_ohc=zV0AHvqwkrsAX_X9KlO&_nc_ht=scontent.flhr4-1.fna&oh=1f4603b8ef2c4e6c001dd54319210fd3&oe=6041BD5D"
        },
        {
          id: uuidv4(),
          title: "Portrait",
          url: 
          "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/119517500_3529860490408257_1465187508653241671_o.jpg?_nc_cat=105&ccb=2&_nc_sid=0debeb&_nc_ohc=HsoSecrweqQAX-UXfIo&_nc_ht=scontent.flhr4-1.fna&oh=0ddf1c0089430e4f56f50009ef9c802a&oe=6042BC0E"
        },
        {
        id: uuidv4(),
        title: "Orokmozgo",
        url: 
        "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/116426008_3385690214825286_2194419260926392238_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=LXGZANIfu-QAX_f4p7_&_nc_ht=scontent.flhr4-1.fna&oh=f308d8883ed3386f6931c3015d21dfcb&oe=60411156"
        },
        {
          id: uuidv4(),
          title: "Crows",
          url: 
          "https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/110325197_3365817730145868_8264252821245288892_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=N3jHZL8xPrkAX9Qyl8t&_nc_ht=scontent.flhr4-2.fna&oh=d4cb76db3f473a095fbfa2d803f8d930&oe=60432C02"
        },
        {
          id: uuidv4(),
          title: "Tattoo design",
          url: 
          "https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/110221411_3365718140155827_3839059845908349322_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=3BcUIVo9xjMAX_xzBz9&_nc_ht=scontent.flhr4-2.fna&oh=3fd54edb9bf4014aa2620333aebd9bd0&oe=6041919E"
        }
      ],
    };
  },
  mutations: {
    addNewImage(state,payload) {
      const newImage = {
        id: payload.id,
        title: payload.title,
        url: payload.url
      }
      state.dummyImages.push(newImage);
    },
    deleteImage(state, payload) {
     const newState = state.dummyImages.filter(image => image.id !== payload);
     state.dummyImages = newState;
    }
  },
  actions: {
    addNewImage(context, payload) {
      console.log(payload);
      context.commit('addNewImage', payload);

      
        const storageRef = firebase
          .storage()
          .ref(`digitalart/${payload.file.name}`)
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
              this.url = url;
              console.log(url);
            });
          }
        );

        // const image = {
        //   id: this.id,
        //   title: this.title,
        //   url: this.url,
        // };
    },
    deleteImage(context, payload) {
      console.log(payload);
      context.commit('deleteImage', payload);
    }
  },
  getters: {
    getImages(state) {
      return state.dummyImages;
    },
  },
};
