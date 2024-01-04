const boardStore = {
  namespaced: true,
  state: {
    boardInfo: { showAdjacent: "", itemID: "", boardID: "", location: "" },
  },
  getters: {},
  mutations: {
    set_board_info(state, payload) {
      state.docInfo = payload;
    },
  },
  actions: {},
};

export default boardStore;
