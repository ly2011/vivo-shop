<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
};
</script>

<style lang="scss">
@import './styles/index.scss';
@import './assets/fonts/iconfont.css';
body {
  /* padding-bottom:1.56rem; */
  background: #f4f4f4;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
}
.mint-swipe-indicator {
  background: #000;
  border: 1px solid black;
}
.mint-swipe-indicator.is-active {
  background: #ddd;
}
</style>


