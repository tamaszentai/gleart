export default {
  namespaced: true,
  state() {
    return {
      dummyImages: [
        {
          id: '000000',
          title: 'Kakas',
          url: 'https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/138764454_3867146980012938_5006146712970972334_o.jpg?_nc_cat=101&ccb=2&_nc_sid=0debeb&_nc_ohc=cPVN6D7o_NsAX-U4vgW&_nc_ht=scontent.flhr4-1.fna&oh=22eb8a70b2b37e42588ac3640da397ba&oe=603F7543'
        },
        {
          id: '000001',
          title: 'Mitmitke',
          url: 'https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/139523044_3874907869236849_2848927588190621884_o.jpg?_nc_cat=105&ccb=2&_nc_sid=0debeb&_nc_ohc=mMZAz6nJngUAX-3_els&_nc_oc=AQkvB2dImPFyS34NRTW1jrzoaftU1Aw40g8HL9LdCn5yuVoFYf1siGJaa7X9Yw4NCzeYQtkz4AIUG-lVxYxcR7qQ&_nc_ht=scontent.flhr4-1.fna&oh=d98e77c2ac45ee74e8166441b1c8544e&oe=603D40AA'
        },
      ]
    }
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
      context.commit('addNewImage', payload);
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
}