const approvalStore = {
  namespaced: true,
  state: { docInfo: null },
  getters: {},
  mutations: {
    set_doc_info(state, payload) {
      state.docInfo = payload;
    },
  },
  actions: {},
};

export default approvalStore;
