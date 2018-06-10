<template>
  <div class="container">
    <div class="container__bj">
      <img class="avatar" src="../../../assets/img/tou.jpg" />
      <span class="name">ly2011</span>
      <p>走自己的路，让别人去说吧</p>
    </div>

    <div class="container__integral">
      <p>
        <span>0</span>
        <span>优惠券</span>
      </p>
      <p>
        <span>0</span>
        <span>换鼓励金</span>
      </p>
      <p>
        <span>0</span>
        <span>积分</span>
      </p>
    </div>

    <router-link class="order" to="/order" tag="div">
      <div class="order-item order-1">
        <p class="left">我的订单</p>
        <p class="right">全部订单<i class="iconfont icon-youjiantou"></i></p>
      </div>
      <div class="order-item order-2">
        <p v-for="(list, index) in order_container" :key="index">
          <img :src="list.img" />
          <span>{{list.name}}</span>
        </p>
      </div>
    </router-link>

    <div class="container__con">
      <router-link to="/my-collection" class="con">
        <div class="con_left">
          <i class="iconfont icon-collection"></i>
          <span>我的收藏</span>
        </div>
        <div class="con_right">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
      <router-link to="/address" class="con">
        <div class="con_left">
          <i class="iconfont icon-gouwuche"></i>
          <span>我的收货地址</span>
        </div>
        <div class="con_right">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
      <router-link to="/cart" class="con">
        <div class="con_left">
          <i class="iconfont icon-gouwuche"></i>
          <span>我的购物车</span>
        </div>
        <div class="con_right">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
      <router-link to="/order" class="con">
        <div class="con_left">
          <i class="iconfont icon-share_icon"></i>
          <span>扫码分享</span>
        </div>
        <div class="con_right">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
      <router-link to="/about" class="con">
        <div class="con_left">
          <i class="iconfont icon-bangzhuguanyuwomen"></i>
          <span>关于我</span>
        </div>
        <div class="con_right">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order_container: [
        {
          img: require('../../../assets/img/111.png'),
          name: '待付款'
        },
        {
          img: require('../../../assets/img/222.png'),
          name: '待收货'
        },
        {
          img: require('../../../assets/img/333.png'),
          name: '待评价'
        },
        {
          img: require('../../../assets/img/444.png'),
          name: '退货/退款'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 1.45rem;
  &__bj {
    width: 100%;
    height: 100%;
    background: url('../../../assets/img/bj.png') no-repeat;
    background-size: 100% 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .avatar {
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 50%;
    }

    .name {
      color: #fff;
      font-size: 0.5rem;
    }

    p {
      color: #fff;
      font-size: 0.35rem;
    }
  }

  &__integral {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;

    p {
      width: 33%;
      height: 100%;
      font-size: 0.36rem;
      line-height: 0.6rem;
      font-weight: 500;
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  }

  .order {
    width: 100%;
    height: 3.5rem;
    background-color: #fff;
    display: block;
    margin-bottom: 0.15rem;
    margin-top: 0.15rem;
    font-size: 0.35rem;

    .order-1 {
      width: 100%;
      height: 1.5rem;

      .left {
        float: left;
        line-height: 1.5rem;
        margin-left: 0.5rem;
        font-size: 0.4rem;
      }

      .right {
        float: right;
        line-height: 1.5rem;
        margin-right: 0.6rem;
        font-size: 0.4rem;

        i {
          font-size: 12px;
        }
      }
    }

    .order-2 {
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        width: 25%;
        display: flex;
        flex-direction: column;
        margin-top: 0.3rem;

        img {
          width: 0.8rem;
          height: 0.8rem;
          margin: auto;
        }

        span {
          text-align: center;
          padding-top: 0.3rem;
        }
      }
    }
  }

  &__con {
    margin-bottom: 1.45rem;
    .con {
      width: 100%;
      height: 1.41rem;
      background-color: #fff;
      border-bottom: 1px solid #f0f0f0;
      // display: block;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &_left {
        float: left;
        line-height: 1.3rem;
        padding-left: 0.47rem;

        i {
          font-size: 0.5rem;
        }

        span {
          font-size: 0.37rem;
          padding-left: 0.1rem;
        }
      }

      &_right {
        float: right;
        line-height: 1.3rem;
        padding-right: 0.4rem;
      }
    }
  }
}
</style>

