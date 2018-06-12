<template>
  <div class="pay">
    <pay-header title="结算" />
    <router-link to="address" class="pay-address" tag="div">
      <p class="address-box">
        <span class="name">收货人：ly2011</span>
        <span class="phone">13712312312</span>
      </p>
      <p class="address-detail">
        收货地址：广东省广州市天河区珠江新城天河东路110号
      </p>
    </router-link>
    <div class="pay-shop" v-for="(list, index) in pay" :key="index">
      <div class="pay-shop-list">
        <p class="label">商品清单</p>
        <div class="pay-shop-info">
          <img class="shop-logo" :src="list.homeImg" :alt="list.homeName">
          <div class="pay-shop-desc">
            <span class="name">
              {{list.homeName}}
              <p>x {{$route.query.value}}</p>
            </span>
            <span class="price">¥ {{list.homePrice}}</span>
          </div>

        </div>
      </div>

      <div class="pay-shop-invoice">
        <p class="label">发票信息</p>
        <div class="pay-invoice">
          <p>*请输入发票抬头：</p>
          <input type="text" v-model="list.text" placeholder="请输入发票信息">
        </div>
      </div>

      <div class="pay-shop-fs">
        <p class="label">支付方式</p>
        <div class="pay-fs">
          <div class="pay-fs-tabs">
            <div class="fs-tab-item" v-for="(pay_type, pIndex) in payTypes" :key="pIndex" :class="{active: pIndex === payTypeIndex}" @click="changePayType(pIndex)">{{pay_type.name}}</div>
          </div>
          <div class="pay-fs-con">
            <div class="fs-item fs-item-1" v-show="payTypeIndex === 0">支持支付宝支付、微信支付、银行卡支付、财付通等</div>
            <div class="fs-item fs-item-2" v-show="payTypeIndex === 1">花呗分期是花呗联合天猫淘宝推出的，面向互联网的赊购服务，通过支付宝轻松还款，0首付</div>
            <div class="fs-item fs-item-3" v-show="payTypeIndex === 2">
              货到再付款，支持现金交易
            </div>
          </div>
        </div>
      </div>

      <div class="pay-shop-liuyan">
        <p class="label">订单留言</p>
        <div class="pay-liuyan-con">
          <textarea class="pay-liuyan-text" v-model="list.ly" rows="5" placeholder="限300字（若有特殊需求，请联系商城在线客服)" maxlength="300"></textarea>
          <p>商品总金额：¥{{$route.query.value * list.homePrice}}</p>
          <p>运费：0.00</p>
          <p>优惠：¥0.00</p>
          <p>赠送积分：{{$route.query.value * list.homePrice}}</p>
        </div>
      </div>

      <div class="pay-shop-footer">
        <p class="price">订单总金额：
          <span>￥{{$route.query.value * list.homePrice}}</span>
        </p>
        <a class="order" @click="addOrder(list, index)">立即结算</a>

      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// import { mapGetters, mapMutations } from "vuex";
import PayHeader from '@/components/header'
import {sleep} from '@/utils/tool'
import { data } from '@/mock/ceshi.js';
export default {
  components: {
    PayHeader
  },
  data () {
    return {
      pay: [],
      payTypeIndex: 0,
      payTypes: [
        {id: 1, name: '在线支付'},
        {id: 2, name: '花呗分期'},
        {id: 3, name: '货到付款'}
      ]
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const {id} = this.$route.query
      const { data: { home } } = data;
      const { data: { set } } = data;

      this.pay = home.filter(item => item.id == id);

      this.pay = [
        ...this.pay,
        ...set.filter(item => item.id == id)
      ];
    },
    changePayType(index) {
      this.payTypeIndex = index
    },
    async addOrder(data, index) {
      if(!data.id) {
        Toast({
          message: '请输入发票抬头',
          duration: 1000
        })
        return false
      }
      const post_data = {
        id: data.id,
        name: data.homeName,
        price: data.homePrice,
        text: data.text,
        ly: data.ly,
        img: data.homeImg,
        listname: this.payTypes[index].name,
        value: this.$route.query.value
      }
      console.log('====================================');
      console.log(post_data);
      console.log('====================================');
      await sleep(1000)
      this.$router.push({
        path: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  border: 1px solid #444;
  color: red;
}

.label {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.4rem;
  padding-left: 0.7rem;
}

.pay-address {
  padding-top: 1.45rem;
  width: 100%;
  height: 4.3rem;
  background: url('https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/prod/bg-addr-box-line_d380baa.png')
    #fff left bottom repeat-x;
  background-size: 1.6rem;

  .address-box {
    width: 87%;
    margin: auto;
    font-size: 0.4rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;

    .phone {
      float: right;
    }
  }

  .address-detail {
    width: 87%;
    margin: auto;
    color: #666;
    font-size: 0.38rem;
  }
}
.pay-shop {
  width: 100%;
  margin-bottom: 1.5rem;

  .pay-shop-list {
    width: 100%;
    height: 4.5rem;
    margin-top: 0.3rem;
    background-color: #fff;

    .pay-shop-info {
      float: left;

      .shop-logo {
        width: 2.5rem;
        margin: 0.2rem;
      }

      .pay-shop-desc {
        width: 70%;
        display: flex;
        flex-direction: column;

        .name {
          font-size: 0.4rem;
          margin-top: 0.3rem;
          height: 0.6rem;

          p {
            float: right;
            margin-right: 0.5rem;
          }
        }

        .price {
          height: 0.6rem;
          color: red;
          font-size: 0.35rem;
          font-weight: 500;
        }
      }
    }
  }

  .pay-shop-invoice {
    width: 100%;
    height: 4.3rem;
    background-color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;

    .pay-invoice {
      width: 100%;
      height: 4rem;

      font-size: 0.35rem;

      p {
        margin: 10px 0;
      }

      input {
        width: 100%;
        height: 1.18rem;
        border-radius: 3px;
        padding-left: 0.2rem;
        border: 1px solid #d1d1d1;
      }
    }
  }

  .pay-shop-fs {
    width: 100%;
    height: 5rem;
    background-color: #fff;

    .pay-fs {
      width: 100%;
      height: 3.5rem;
      background-color: #fff;

      .pay-fs-tabs {
        width: 100%;
        height: 40%;
        font-size: 0.35rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .fs-tab-item {
          float: left;
          display: block;
          width: 2.88rem;
          height: 0.9rem;
          line-height: 0.9rem;
          border: 1px solid #d1d1d1;
          border-radius: 3px;
          margin: 0.1rem;
          text-align: center;
        }
      }

      .pay-fs-con {
        width: 100%;
        height: 60%;
        font-size: 0.35rem;

        .fs-item {
          width: 90%;
          height: 1.3rem;
          border-radius: 3px;
          border: 1px solid #d1d1d1;
          margin: auto;
          padding: 0.3rem;

          &.fs-item-2 {
            height: 1.56rem;
          }
        }
      }
    }
  }

  .pay-shop-liuyan {
    width: 100%;
    height: 6.5rem;
    background-color: #fff;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;

    .pay-liuyan-con {
      width: 90%;
      margin: auto;

      .pay-liuyan-text {
        display: block;
        width: 100%;
        height: 2rem;
        border: 1px solid #d1d1d1;
        border-radius: 3px;
        padding: 0.15rem 0.2rem;
        margin: 0.3rem auto;
        font-size: 0.35rem;
      }

      p {
        color: #888;
        height: 0.48rem;
        font-size: 0.34rem;
      }
    }
  }
}

.pay-shop-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.5rem;
  border-top: 1px solid #eaeaea;
  background-color: #fff;

  .price {
    float: left;
    line-height: 1.5rem;
    font-size: 0.43rem;
    color: #666;
    padding-left: 0.3rem;

    span {
      color: red;
    }
  }

  .order {
    float: right;
    width: 3.3rem;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.35rem;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
    border-radius: 0.8rem;
    text-align: center;
    color: #fff;
    background-color: #f81200;
  }
}
</style>

