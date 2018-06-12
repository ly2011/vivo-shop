const getters = {
  address: state => state.address.address,
  carts: state => state.cart.carts,
  order_tabs: state => state.order.tabs,
  orders: state => state.order.orders,
  orderDetail: state => state.order.orderDetail
};
export default getters;
