<template>
  <footer class="footer bottom">
    <ul class="bottom-ul">
      <router-link to="/home" tag="li">
        <div class="index">
          <i class="iconfont icon-shouye_xuanzhong" style="color:#179dfe" v-if="active ==='home'"></i>
          <i class="iconfont icon-shouye2" v-else></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/classify" tag="li">
        <div class="index">
          <i class="iconfont icon-fenleixuanzhong" style="color:#179dfe" v-if="active ==='classify'"></i>
          <i class="iconfont icon-fenlei-copy" v-else></i>
        </div>
        <span>分类</span>
      </router-link>

      <router-link to="/news" tag="li">
        <div class="index">
          <i class="iconfont icon-dongtaixuanzhong" style="color:#179dfe" v-if="active ==='news'"></i>
          <i class="iconfont icon-dongtai" v-else></i>
        </div>
        <span>动态</span>
      </router-link>

      <router-link to="/my" tag="li">
        <div class="index">
          <i class="iconfont icon-wode-" style="color:#179dfe" v-if="active ==='my'"></i>
          <i class="iconfont icon-wode" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      active: 'home'
    }
  },
  created () {
    this.active = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  color: #666;
  &-ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.45rem;

    li {
      width: 25%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;

      span {
        font-size: 0.3rem;
      }

      i {
        font-size: 0.55rem;
      }
    }
    .router-link:hover,
    .router-link-active {
      color: #25b5fe;
    }
  }
}
</style>
