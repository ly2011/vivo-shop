import * as types from '../types';
const order = {
  state: {
    tabs: [
      '商品', '文章'
    ],
    collections: [], // 商品收藏
    article: [], // 文章收藏
  },
  mutations: {
    [types.SET_ARTICLE](state, data) {
      state
        .article
        .push(data);
    },
    [types.SET_GOODS](state, data) {
      state
        .collections
        .push(data);
    },
    [types.DEL_ARTICLE](state, index) {
      state
        .article
        .splice(index, 1);
    },
    [types.DEL_GOODS](state, index) {
      state
        .collections
        .splice(index, 1);
    }
  },
  actions: {
    addGoods({
      commit
    }, data) {
      commit(types.SET_GOODS, data)
    },
    addArticle({
      commit
    }, data) {
      commit(types.SET_ARTICLE, data)
    },
    deleteArticle({
      commit
    }, index) {
      commit(types.DEL_ARTICLE, index);
    },
    deleteGoods({
      commit
    }, index) {
      commit(types.DEL_GOODS, index);
    }
  }
};
export default order;
