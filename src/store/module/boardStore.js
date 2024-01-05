const boardStore = {
  namespaced: true,
  state: {
    boardUrl: { itemID: "", boardID: "", boardType: "", boardItemListType: "" },
  },
  getters: {},
  mutations: {
    set_board_url(state, payload) {
      state.boardUrl = payload;
    },
  },
  actions: {},
};

export default boardStore;
