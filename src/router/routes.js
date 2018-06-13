const _import = require('./_import_' + process.env.NODE_ENV); // eslint-disable-line
// in development-env not use lazy-loading, because lazy-loading too many pages
// will cause webpack hot update too slow. so only in production use
// lazy-loading; detail:
// https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: _import('home/index'),
    meta: {
      title: '主页'
    }
  }, {
    path: '/home',
    name: 'home',
    component: _import('home/index'),
    meta: {
      title: '主页'
    }
  }, {
    path: '/classify',
    name: 'classify',
    component: _import('classify/index'),
    meta: {
      title: '分类'
    }
  }, {
    path: '/news',
    name: 'news',
    component: _import('news/index'),
    meta: {
      title: '动态'
    }
  }, {
    path: '/news_detail',
    name: 'news_detail',
    component: _import('news/detail'),
    meta: {
      title: '资讯详情'
    }
  }, {
    path: '/my',
    name: 'my',
    component: _import('my/index'),
    meta: {
      title: '个人中心'
    }
  }, {
    path: '/product',
    name: 'product',
    component: _import('product/index'),
    meta: {
      title: '商品详情'
    }
  }, {
    path: '/address',
    name: 'address',
    component: _import('address/index'),
    meta: {
      title: '收货地址'
    }
  }, {
    path: '/address/add',
    name: 'add_address',
    component: _import('address/add'),
    meta: {
      title: '添加地址'
    }
  }, {
    path: '/cart',
    name: 'cart',
    component: _import('cart/index'),
    meta: {
      title: '购物车'
    }
  }, {
    path: '/order',
    name: 'order',
    component: _import('order/index'),
    meta: {
      title: '我的订单'
    }
  }, {
    path: '/order/detail',
    name: 'order_detail',
    component: _import('order/detail'),
    meta: {
      title: '订单详情'
    }
  }, {
    path: '/pay',
    name: 'pay',
    component: _import('pay/index'),
    meta: {
      title: '结算'
    }
  }, {
    path: '/success',
    name: 'success',
    component: () => import ('@/components/success.vue'),
    meta: {
      title: '结算'
    }
  }
];

export default routes;
