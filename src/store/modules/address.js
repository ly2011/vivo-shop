import * as types from '../types';
const address = {
  state: {
    address: [],
    loading: false // loading
  },
  mutations: {
    [types.SET_ADDRESS](state, data) {
      state.address.push(data);
    },
    [types.EDIT_ADDRESS](state, data, index) {
      state.address.splice(index, 1, data);
    },
    [types.DEL_ADDRESS](state, index) {
      state.address.splice(index, 1);
    }
  },
  actions: {
    setAddress({ commit }, data) {
      commit(types.SET_ADDRESS, data);
    },
    updateAddress({ commit }, data, index) {
      commit(types.EDIT_ADDRESS, data, index);
    },
    deleteAddress({ commit }, index) {
      commit(types.DEL_ADDRESS, index);
    }
  }
};

export default address;
