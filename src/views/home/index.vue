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
    <home-container :todos="todos" />
    <home-footer />
  </div>
</template>

<script>
import { data } from '@/mock/ceshi.js';

import HomeSwipe from './components/home-swipe';
import HomeList from './components/home-list';
import HomeContainer from './components/home-container';
import HomeFooter from '@/components/footer';
export default {
  components: {
    HomeSwipe,
    HomeList,
    HomeContainer,
    HomeFooter
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
    font-size: 0.35rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 1.3rem;
    line-height: 1.3rem;
    padding-left: 0.3rem;
    background: #fff;
    i {
      font-size: 0.55rem;
    }
  }
  .official {
    width: 100%;
    height: 0.8rem;
    background: #fff;
    margin-top: 1.33rem;
    font-size: 0;
  }
}
</style>
