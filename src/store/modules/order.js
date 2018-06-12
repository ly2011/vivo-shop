import * as types from '../types';
const order = {
  state: {
    tabs: ['全部', '待收款', '待收货', '待评价'],
    orders: []
  },
  mutations: {
    [types.SET_ORDERS](state, data) {
      state.orders.push(data);
    }
  },
  actions: {
    setOrders({ commit }, data) {
      commit(types.SET_ORDERS, data);
    }
  }
};
export default order;
