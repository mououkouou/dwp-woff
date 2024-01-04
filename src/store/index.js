import Vue from "vue";
import Vuex from "vuex";
import approvalStore from "./module/approvalStore.js";
import boardStore from "./module/boardStore.js";
import serviceStore from "./module/serviceStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { approvalStore, boardStore, serviceStore },
});
