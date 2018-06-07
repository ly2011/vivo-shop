import Vue from 'vue';
import VueRouter from 'vue-router';
import routeConfig from './routes';

//加载路由中间件
Vue.use(VueRouter);

//定义路由
const router = new VueRouter({
  routes: routeConfig,
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history'
});

export default router;
