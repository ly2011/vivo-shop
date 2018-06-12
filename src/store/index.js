import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import {VUEX_KEY} from '@/config';
import app from './modules/app';
import address from './modules/address';
import cart from './modules/cart';
import order from './modules/order'
import getters from './getters';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({key: VUEX_KEY, storage: window.localStorage});
const store = new Vuex.Store({
  modules: {
    app,
    address,
    cart,
    order
  },
  getters,
  plugins: [vuexLocal.plugin]
});

export default store;
