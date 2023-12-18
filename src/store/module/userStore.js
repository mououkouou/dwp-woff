const userStore = {
  namespaced: true,
  state: { userInfo: { userId: "", domainId: "", displayName: "" } },
  getter: {},
  mutations: {
    set_user_info(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {},
};

export default userStore;
