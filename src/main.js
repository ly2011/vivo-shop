import Vue from 'vue';
import axios from 'axios';
import './utils/rem';
import App from './App.vue';
import router from './router';

//引入UI组件
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
