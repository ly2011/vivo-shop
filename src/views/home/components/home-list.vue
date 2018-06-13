<template>
  <nav class="home-list nav">
    <ul class="nav-box">
      <li class="nav-item">
        <a @click="xuangou"><img class="nav-img" src="../../../assets/img/xuangou.jpg" alt="选购"></a>
      </li>
      <li class="nav-item">
        <a @click="parts"><img class="nav-img" src="../../../assets/img/peijian.jpg" alt="配件"></a>
      </li>
      <li class="nav-item">
        <a @click="todo"><img class="nav-img" src="../../../assets/img/pingbao.jpg" alt="屏保"></a>
      </li>
      <li class="nav-item">
        <a @click="todo"><img class="nav-img" src="../../../assets/img/dingzhi.jpg" alt="定制"></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    xuangou() {
      this.$router.push({
        path: 'choose'
      })
    },
    parts() {
      this.$router.push({
        path: 'parts'
      })
    },
    todo() {}
  }
};
</script>

<style lang="scss" scoped>
.home-list {
  padding: 0.2rem 0;
  background-color: #fff;
  .nav-box {
    display: flex;
    align-items: center;
  }
  .nav-item {
    flex: 1;
    font-size: 0;
    width: 1%;
    text-align: center;
  }
  .nav-img {
    width: auto;
    height: 1.6rem;
  }
}
</style>
