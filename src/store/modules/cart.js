import * as types from '../types';
const cart = {
  state: {
    carts: [],
    loading: false // loading
  },
  mutations: {
    [types.SET_CARTS](state, data) {
      state.carts.push(data);
    },
    [types.DEL_CARTS](state, index) {
      state.carts.splice(index, 1);
    },
    [types.DECREASE_CARTS](state, index) {
      state.carts[index].value++;
    },
    [types.INCREASE_CARTS](state, index) {
      state.carts[index].value == 1
        ? (state.carts[index].value = 1)
        : state.carts[index].value--;
    },
    [types.SETTLEMENT_CARTS](state) {
      state.carts = [];
    }
  },
  actions: {
    setCart({ commit }, data) {
      commit(types.SET_CARTS, data);
    },
    deleteCart({ commit }, index) {
      commit(types.DEL_CARTS, index);
    },
    decreaseCart({ commit }, index) {
      commit(types.DECREASE_CARTS, index);
    },
    increaseCart({ commit }, index) {
      commit(types.INCREASE_CARTS, index);
    },
    settlementCart({ commit }) {
      commit(types.SETTLEMENT_CARTS);
    }
  }
};

export default cart;
