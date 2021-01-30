export default {
  namespaced: true,
  state() {
    return {
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Vivamus velit mi, porta a luctus ac, maximus eu justo. Nullam pretium metus at \
      dolor vehicula, lacinia sodales urna lobortis. Vestibulum ante ipsum primis in faucibus \
      orci luctus et ultrices posuere cubilia curae; Fusce at lobortis mi. Cras porttitor leo id \
      nunc condimentum luctus. Suspendisse neque orci, sagittis quis cursus porttitor, luctus non \
      ipsum. Nullam metus augue, tincidunt et sem et, tincidunt tristique eros. Donec arcu metus, \
      viverra ac blandit ac, hendrerit ut odio.'
    };
  },
  mutations: {},
  actions: {},
  getters: {
    getAbout(state) {
      return state.about;
    }
  }
};
