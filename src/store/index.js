import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    listClothes: [
      { id: 1, name: "t-shirt", cost: 100, isDiscount: false },
      { id: 2, name: "dress", cost: 200, isDiscount: true },
      { id: 3, name: "shorts", cost: 150, isDiscount: true },
    ],
    searchText: "",
  },
  actions: {
    inputSearchText({ commit }, value) {
      commit("setSearcText", value);
    },
  },
  mutations: {
    setSearcText(state, value) {
      state.searchText = value;
    },
  },
  getters: {
    listClothes(state) {
      return state.listClothes.filter((item) => {
        return item.name.indexOf(state.searchText) >= 0;
      });
    },

    searchText(state) {
      return state.searchText;
    },
  },
});

export default store;
