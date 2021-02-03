export default {
  namespaced: true,
  state() {
    return {
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Vivamus velit mi, porta a luctus ac, maximus eu justo. Nullam pretium metus at \
      dolor vehicula, lacinia sodales urna lobortis. Vestibulum ante ipsum primis in faucibus \
      orci luctus et ultrices posuere cubilia curae; Fusce at lobortis mi. Cras porttitor leo id \
      nunc condimentum luctus. Suspendisse neque orci, sagittis quis cursus porttitor, luctus non \
      ipsum. Nullam metus augue, tincidunt et sem et, tincidunt tristique eros. Donec arcu metus, \
      viverra ac blandit ac, hendrerit ut odio. \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Vivamus velit mi, porta a luctus ac, maximus eu justo. Nullam pretium metus at \
      dolor vehicula, lacinia sodales urna lobortis. Vestibulum ante ipsum primis in faucibus \
      orci luctus et ultrices posuere cubilia curae; Fusce at lobortis mi. Cras porttitor leo id \
      nunc condimentum luctus. Suspendisse neque orci, sagittis quis cursus porttitor, luctus non \
      ipsum. Nullam metus augue, tincidunt et sem et, tincidunt tristique eros. Donec arcu metus, \
      viverra ac blandit ac, hendrerit ut odio. \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Vivamus velit mi, porta a luctus ac, maximus eu justo. Nullam pretium metus at \
      dolor vehicula, lacinia sodales urna lobortis. Vestibulum ante ipsum primis in faucibus \
      orci luctus et ultrices posuere cubilia curae; Fusce at lobortis mi. Cras porttitor leo id \
      nunc condimentum luctus. Suspendisse neque orci, sagittis quis cursus porttitor, luctus non \
      ipsum. Nullam metus augue, tincidunt et sem et, tincidunt tristique eros. Donec arcu metus, \
      viverra ac blandit ac, hendrerit ut odio. \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Vivamus velit mi, porta a luctus ac, maximus eu justo. Nullam pretium metus at \
      dolor vehicula, lacinia sodales urna lobortis. Vestibulum ante ipsum primis in faucibus \
      orci luctus et ultrices posuere cubilia curae; Fusce at lobortis mi. Cras porttitor leo id \
      nunc condimentum luctus. Suspendisse neque orci, sagittis quis cursus porttitor, luctus non \
      ipsum. Nullam metus augue, tincidunt et sem et, tincidunt tristique eros. Donec arcu metus, \
      viverra ac blandit ac, hendrerit ut odio. \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Vivamus velit mi, porta a luctus ac, maximus eu justo. Nullam pretium metus at \
      dolor vehicula, lacinia sodales urna lobortis. Vestibulum ante ipsum primis in faucibus \
      orci luctus et ultrices posuere cubilia curae; Fusce at lobortis mi. Cras porttitor leo id \
      nunc condimentum luctus. Suspendisse neque orci, sagittis quis cursus porttitor, luctus non \
      ipsum. Nullam metus augue, tincidunt et sem et, tincidunt tristique eros. Donec arcu metus, \
      viverra ac blandit ac, hendrerit ut odio. \
      ipsum. Nullam metus augue, tincidunt et sem et, tincidunt tristique eros. Donec arcu metus, \
      viverra ac blandit ac, hendrerit ut odio.",
      heroImage: "https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/124716723_3602498166448637_6147776248570215012_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=3Ln555yr1csAX8Z24EX&_nc_ht=scontent.flhr4-2.fna&oh=3b43c131c11c6837629d3ef3e7872db5&oe=603F4FD3",
    };
  },
  mutations: {
    updateBio(state, payload) {
      const updatedBio = payload;
      state.about = updatedBio;
    },
  },
  actions: {
    updateBio(context, payload) {
      context.commit("updateBio", payload);
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
