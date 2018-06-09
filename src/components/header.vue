<template>
  <header class="header">
    <div class="header__left" @click="$router.go(-1)">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="header__title">{{title}}</div>
    <div class="header__right"></div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  props: ['title']
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 1.45rem;
    background-color: #fff;
    position: fixed;
    z-index: 1;
    &__left {
      width: 10%;
      height: 100%;
      float: left;
      i {
        display: block;
        font-size: .6rem;
        line-height: 1.45rem;
        text-align: center;
      }
    }
    &__title {
      width: 80%;
      float: left;
      text-align: center;
      font-size: .45rem;
      line-height: 1.45rem;
    }
    &__right {
      width: 10%;
      height: 100%;
      float: left;
    }
  }
</style>
