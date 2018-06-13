const getters = {
  address: state => state.address.address,
  carts: state => state.cart.carts,
  order_tabs: state => state.order.tabs,
  orders: state => state.order.orders,
  orderDetail: state => state.order.orderDetail,
  collections: state => state.collections.collections,
  article: state => state.collections.article,
  collections_tabs: state => state.collections.tabs
};
export default getters;
