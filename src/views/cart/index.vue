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
            <button class="decrease" @click="decrease(index)">-</button>
            <input class="number" type="text" v-model="cart.value" readonly="readonly">
            <button class="increase" @click="increase(index)">+</button>
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
        <button @click="settlement">结算 {{sumValue}}</button>
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
</style>

