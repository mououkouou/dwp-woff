const approvalStore = {
  namespaced: true,
  state: { docInfo: { key: "" } },
  getters: {},
  mutations: {
    set_doc_info(state, payload) {
      state.docInfo = payload;
    },
  },
  actions: {},
};

export default approvalStore;
