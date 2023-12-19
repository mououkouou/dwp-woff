const approvalStore = {
  namespaced: true,
  state: { docInfo: null, service: null },
  getters: {},
  mutations: {
    set_doc_info(state, payload) {
      state.docInfo = payload;
    },
    set_service(state, payload) {
      state.service = payload;
    },
  },
  actions: {},
};

export default approvalStore;
