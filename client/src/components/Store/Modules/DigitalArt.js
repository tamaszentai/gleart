export default {
  namespaced: true,
  state() {
    return {
      dummyImages: [
        {
          id: "000002",
          title: "Markolab",
          url:
            "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/139580808_3866209146773388_8468341967264893543_o.jpg?_nc_cat=104&ccb=2&_nc_sid=0debeb&_nc_ohc=3G7SU9B5bmwAX8ZPDkd&_nc_ht=scontent.flhr4-1.fna&oh=87a720e2ee7a91f92b9561ed447a31c0&oe=603F22A7",
        },
        {
          id: "000003",
          title: "The Magician",
          url:
            "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/130521992_3774506749276962_3773479683819168099_o.jpg?_nc_cat=101&ccb=2&_nc_sid=0debeb&_nc_ohc=g94qgVIl38MAX8C6vWV&_nc_ht=scontent.flhr4-1.fna&oh=ffcfb2010491e083b12f22ae426564b6&oe=603C1970",
        },
        {
          id: "000004",
          title: "Plague Doctor",
          url:
            "https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/106995191_3320444268016548_3107795467263216648_o.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=C6Th0dJCzNAAX87UTLa&_nc_ht=scontent.flhr4-1.fna&oh=f94f71cb9e27fb6a49dfa4108e04e0ad&oe=603C90D9",
        },
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
  },
  actions: {
    addNewImage(context, payload) {
       console.log(payload);
      context.commit('addNewImage', payload);
    }
  },
  getters: {
    getImages(state) {
      return state.dummyImages;
    },
  },
};
