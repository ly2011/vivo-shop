<template>
  <header class="header">
    <div class="header__left">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="header__title">个人中心</div>
    <div class="header_right">
      <i class="iconfont icon-shezhi-xianxing"></i>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header {
    height: 1.45rem;
    line-height: 1.45rem;
    background-color: #fff;
    &__left {
      width: 10%;
      float: left;
      i {
        font-size: 0.6rem;
        line-height: 1.45rem;
        text-align: center;
        display: block;
      }
    }

    &__title {
      width: 80%;
      float: left;
      text-align: center;
      font-size: 0.45rem;
      line-height: 1.45rem;
    }

    &__right {
      width: 10%;
      float: left;

      i {
        font-size: 0.6rem;
        line-height: 1.45rem;
        text-align: center;
        display: block;
      }
    }
  }
</style>
