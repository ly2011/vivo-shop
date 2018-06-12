<template>
  <div class="success-box">
    <success-header title="结算" />
    <div class="success">
      <i class="iconfont icon-chenggong1"></i>
      <h2 class="title">购买成功</h2>
      <p>已收到您的贷款，请留意
        <router-link to="/order">订单详情</router-link>
        以及
        <router-link to="/order">物流详情</router-link>
        另外祝您生活愉快 感谢您的支持与厚爱
      </p>
    </div>
  </div>
</template>

<script>
import SuccessHeader from '@/components/header'
export default {
  components: {
    SuccessHeader
  }
}
</script>

<style lang="scss" scoped>
.success {
  padding-top: 1.45rem;
  width: 90%;
  margin: auto;
  text-align: center;

  .title {
    font-size: 0.8rem;
    margin-top: 0.6rem;
    margin-bottom: 0.1rem;
  }

  i {
    display: block;
    padding-top: 30%;
    font-size: 2.8rem;
    color: #52b838;
  }

  p {
    width: 92%;
    font-size: 0.35rem;
    margin: auto;

    a {
      color: #1574e3;
    }
  }
}
</style>

