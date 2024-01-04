const serviceStore = {
  namespaced: true,
  state: { service: null },
  getters: {},
  mutations: {
    set_service(state, payload) {
      state.service = payload;
    },
  },
  actions: {},
};

export default serviceStore;
