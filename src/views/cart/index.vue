<template>
  <div class="cart">
    <cart-header title="购物车" />
    <div class="cart__container">
      <ul>
        <li v-for="(cart, index) in carts" :key="index" class="cart__item">
          <!-- 单选 -->
          <div class="select" @click="singleSelect(cart)">
            <i class="iconfont icon-xuanzekuangmoren" v-show="!cart.danx1uan"></i>
            <i class="iconfont icon-xuanzekuangxuanzhong" v-show="cart.danx1uan" style="color: #25b5fe;"></i>
          </div>

          <!-- 商品信息 -->
          <div class="cart__img">
            <img :src="cart.img" :alt="cart.name">
          </div>

          <div class="cart__info">
            <div class="cart__name">
              {{cart.name}}
              <a class="iconfont icon-huishouzhan7" @click="delCart(index)"></a>
            </div>
            <p class="cart__price">￥{{cart.price}}</p>
          </div>

          <!-- 商品数量 -->
          <div class="cart__number">
            <a class="decrease" @click="decrease(index)">-</a>
            <input class="number" type="text" v-model="cart.value" readonly="readonly">
            <a class="increase" @click="increase(index)">+</a>
          </div>
        </li>
      </ul>
    </div>

    <div class="cart__empty" v-if="!carts.length">
      <img src="../../assets/img/gouwuche.png" alt="购物车" />
      <h1 class="title">购物车是空的哦，快去购物吧</h1>
      <router-link :to="{name: 'home'}">逛逛</router-link>
    </div>

    <div class="cart__footer" v-if="carts.length">
      <div class="checkAll" @click="checkAll">
        <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
        <span>全选</span>
      </div>

      <div class="total">
        合计：
        <span class="total_sum">
          ￥{{sum}}
        </span>
      </div>

      <div class="settlement">
        <a @click="settlement">结算 {{sumValue}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartHeader from '@/components/header';
export default {
  components: {
    CartHeader
  },
  data() {
    return {
      qx: false
    };
  },
  computed: {
    ...mapGetters(['carts']),
    sum() {
      let sum = 0;
      this.carts.forEach(cart => {
        if (cart.danx1uan) {
          sum += cart.price * cart.value;
        }
      });
      return sum;
    },
    sumValue() {
      let sumValue = 0;
      this.carts.forEach(cart => {
        if (cart.danx1uan) {
          sumValue += parseInt(cart.value, 10);
        }
      });
      return sumValue;
    }
  },
  methods: {
    ...mapActions([
      'deleteCart',
      'decreaseCart',
      'increaseCart',
      'settlementCart'
    ]),
    singleSelect(cart) {
      cart.danx1uan = !cart.danx1uan;
      if (!cart.danx1uan) {
        this.qx = false;
      }
    },
    checkAll() {
      this.qx = !this.qx;
      if (this.qx) {
        this.carts.forEach(cart => {
          cart.danx1uan = true;
        });
      } else {
        this.carts.forEach(cart => {
          cart.danx1uan = false;
        });
      }
    },
    delCart(index) {
      this.deleteCart(index);
    },
    decrease(index) {
      this.decreaseCart(index);
    },
    increase(index) {
      this.increaseCart(index);
    },
    settlement() {
      this.settlementCart();
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;

  &__container {
    margin-top: 1.45rem;
    margin-bottom: 1.24rem;
    .select {
      float: left;
      margin-top: 1.45rem;
      padding-left: 0.5rem;

      i {
        font-size: 0.53rem;
      }
    }
  }

  &__item {
    width: 100%;
    height: 4rem;
    margin-top: 0.04rem;
    background-color: #fff;

    .cart__img {
      float: left;
      padding: 0.5rem 0.3rem;
      img {
        width: 2.6rem;
        height: 2.8rem;
      }

      .title {
        margin-top: 0.5rem;
        text-align: center;
        color: #959595;
        font-size: 0.6rem;
      }
    }

    .cart__info {
      width: 7.7rem;
      font-size: 0.35rem;
      padding-left: 0.3rem;
      padding-top: 0.6rem;
    }

    .cart__name {
      width: 9.3rem;
      font-size: 0.36rem;

      a {
        float: right;
        color: #333;
        font-size: 0.57rem;
      }
    }

    .cart__price {
      color: #f00;
      margin-top: 0.2rem;
      font-size: 0.4rem;
    }

    .cart__number {
      float: left;
      margin-top: 0.3rem;

      .decrease,
      .increase {
        float: left;
        width: 0.75rem;
        height: 0.75rem;
        line-height: 0.75rem;
        border: 1px solid #dedede;
        color: #b2b2b2;
        font-size: 0.5rem;
        outline: 0;
      }
      input {
        float: left;
        width: 0.96rem;
        height: 0.76rem;
        border: 1px solid #dedede;
        text-align: center;
      }
      .decrease {
        border-right: none;
      }
      .increase {
        border-left: none;
      }
    }
  }

  &__empty {
    img {
      display: block;
      width: 4.4rem;
      height: 5.2rem;
      margin: auto;
      margin-top: 1.5rem;
    }

    a {
      display: block;
      text-align: center;
      margin: 0.8rem auto;
      width: 3rem;
      height: 1rem;
      line-height: 1rem;
      border-radius: 0.11rem;
      background-color: #e0524b;
      color: #fff;
      font-weight: 700;
      font-size: 0.5rem;
    }

    .title {
      margin-top: 0.5rem;
      text-align: center;
      color: #959595;
      font-size: 0.6rem;
    }
  }

  &__footer {
    position: fixed;
    width: 100%;
    height: 1.18rem;
    bottom: 0;
    font-size: 0.35rem;
    background-color: #fff;
    border: 1px solid #f4f4f4;

    .checkAll {
      float: left;
      width: 24%;
      line-height: 1.18rem;

      i {
        font-size: 0.53rem;
        padding-left: 0.5rem;
      }
    }

    .total {
      float: left;
      width: 35%;
      text-align: center;
      line-height: 1.18rem;
      font-size: 0.35rem;
      .total__sum {
        font-size: 0.54rem;
        color: #e3211e;
      }
    }

    .settlement {
      float: right;
      width: 34%;
      height: 80%;
      background-color: #f81200;
      margin-top: 0.1rem;
      border-radius: 1rem;
      margin-right: 0.3rem;

      a {
        display: block;
        color: #fff;
        text-align: center;
        line-height: 0.98rem;
        font-size: 0.35rem;
      }
    }
  }
}
</style>

