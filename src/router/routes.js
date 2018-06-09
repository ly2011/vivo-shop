const _import = require('./_import_' + process.env.NODE_ENV); // eslint-disable-line
// in development-env not use lazy-loading, because lazy-loading too many pages
// will cause webpack hot update too slow. so only in production use
// lazy-loading; detail:
// https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: _import('home/index'),
    meta: {
      title: '主页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: _import('home/index'),
    meta: {
      title: '主页'
    }
  },
  {
    path: '/classify',
    name: 'classify',
    component: _import('classify/index'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: _import('news/index'),
    meta: {
      title: '动态'
    }
  },
  {
    path: '/news_detail',
    name: 'news_detail',
    component: _import('news/detail'),
    meta: {
      title: '资讯详情'
    }
  }
];

export default routes;
