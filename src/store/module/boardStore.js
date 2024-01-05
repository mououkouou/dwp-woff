const boardStore = {
  namespaced: true,
  state: {
    boardUrl: { mobile: "", pc: "" },
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
