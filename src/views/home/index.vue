<template>
  <div class="home">
    <div class="header">
      <i class="iconfont icon-VIVO"></i>
    </div>
    <div class="official">
      <img src="../../assets/img/official.png" alt="图片" style="width: 100%;height:100%">
    </div>
    <home-swipe />
    <home-list />
    <home-container :todos="todos"/>
  </div>
</template>

<script>
import { data } from '../../mock/ceshi.js';

import HomeSwipe from './components/home-swipe';
import HomeList from './components/home-list';
import HomeContainer from './components/home-container';
export default {
  components: {
    HomeSwipe,
    HomeList,
    HomeContainer
  },
  name: 'home',
  data() {
    return {
      todos: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // eslint-disable-next-line
      // this.$http.get('/static/ceshi.json').then(res => {
      // console.log('res: ', res);
      // this.todos = res.data.data.home;
      // });

      const { data: { home } } = data || [];
      this.todos = home;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  border-bottom: 10px;
  .header {
    font-size: 0.28rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 1rem;
    line-height: 1rem;
    padding-left: 0.2rem;
    background: #fff;
  }
  .official {
    width: 100%;
    height: 0.6rem;
    background: #fff;
    margin-top: 1.2rem;
  }
}
</style>
