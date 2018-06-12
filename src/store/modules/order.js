import * as types from '../types';
const order = {
  state: {
    tabs: [
      '全部', '待收款', '待收货', '待评价'
    ],
    orders: [],
    orderDetail: {}
  },
  mutations: {
    [types.SET_ORDERS](state, data) {
      state
        .orders
        .push(data);
    },
    [types.DEL_ORDERS](state, index) {
      state
        .orders
        .splice(index, 1);
    },
    [types.ORDERS_DETAIL](state, data) {
      state.orderDetail = data
    }
  },
  actions: {
    setOrders({
      commit
    }, data) {
      commit(types.SET_ORDERS, data);
    },
    deleteOrder({
      commit
    }, index) {
      commit(types.DEL_ORDERS, index);
    },
    setOrderDetail({
      commit
    }, data) {
      commit(types.ORDERS_DETAIL, data)
    }
  }
};
export default order;
