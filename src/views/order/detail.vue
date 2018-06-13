<template>
  <div class="order-detail">
    <order-header title="订单详情" />
    <div class="order-info">
      <div class="success">
        <p>订单状态：已完成</p>
        <img src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/order/no-pay_79c2dfe.png">
      </div>

      <div class="address">
        <p class="address-box">
          <span class="name">收货人：ly2011</span>
          <span class="phone">13712312312</span>
        </p>
        <p class="address-detail">
          收货地址：广东省广州市天河区珠江新城天河东路110号
        </p>
      </div>

      <div class="order-list">
        <div class="order-item-1">
          <img :src="orderDetail.img" :alt="orderDetail.name">
          <p>
            <span class="name">
              {{orderDetail.name}}
              <p>× {{orderDetail.value}}</p>
            </span>
            <span class="price">¥ {{orderDetail.price}}</span>
          </p>
        </div>

        <div class="order-item-2">
          <div class="order-item-2-1">
            <p>
              <span class="span-1">订单优惠：</span>
              <span class="span-2">订单满68元包邮</span>
            </p>
            <p>
              <span class="span-1">订单备注：</span>
              <span class="span-2">{{orderDetail.ly}}</span>
            </p>
          </div>

          <div class="order-item-2-2">
            <p>
              <span class="span-1">商品总金额：</span>
              <span class="span-2">￥ 2998.00</span>
            </p>
            <p>
              <span class="span-1">运费：</span>
              <span class="span-2">￥ 0.00</span>
            </p>
            <p>
              <span class="span-1">优惠：</span>
              <span class="span-2 red">-￥ 0.00</span>
            </p>
            <p>
              <span class="span-1">换鼓励金：</span>
              <span class="span-2">-￥ 0.00</span>
            </p>
          </div>

          <div class="order-item-2-3">
            <p>
              <span class="span-1">配送方式：</span>
              <span class="span-2">顺丰速运 免邮</span>
            </p>
            <p>
              <span class="span-1">支付方式：</span>
              <span class="span-2">{{orderDetail.listname}}</span>
            </p>
            <p>
              <span class="span-1">发票类型：</span>
              <span class="span-2">个人</span>
            </p>
            <p>
              <span class="span-1">发票抬头：</span>
              <span class="span-2">{{orderDetail.text}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="order-footer">
      <div class="inner">
        总计：
        <span>￥{{orderDetail.price}}</span>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderHeader from '@/components/header'
export default {
  components: {
    OrderHeader
  },
  computed: {
    ...mapGetters(['orderDetail'])
  }
}
</script>

<style lang="scss" scoped>
.order-info {
  position: absolute;
  top: 1.45rem;
  width: 100%;
  // padding-top: 1.45rem;

  .success {
    height: 2.4rem;
    background-color: #69c1ff;

    p {
      float: left;
      color: #fff;
      font-size: 0.46rem;
      padding-left: 0.4rem;
    }

    img {
      float: right;
      width: 2.7rem;
      margin: 0.5rem;
    }
  }

  .address {
    height: 2.7rem;
    background-color: #fff;

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

  .order-list {
    margin-bottom: 1.3rem;

    .order-item-1 {
      height: 3rem;
      background-color: #fff;
      margin-top: 0.13rem;

      img {
        float: left;
        width: 2.5rem;
        margin: 0.28rem;
      }

      p {
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
          color: #f00;
          font-size: 0.35rem;
          font-weight: 500;
        }
      }
    }

    .order-item-2 {
      height: 9rem;
      background-color: #fff;

      div[class*='order-item-2-'] {
        width: 90%;
        margin: auto;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        font-size: 0.36rem;
        border-top: 1px solid #e8e8e8;
      }

      span {
        float: left;
        color: #888;
      }

      .span-1 {
        display: block;
        width: 2.3rem;
      }

      .order-item-2-1 {
        height: 2rem;

        p {
          height: 0.76rem;
          line-height: 0.76rem;
        }
      }

      .order-item-2-2 {
        height: 3.5rem;

        p {
          height: 0.76rem;
          line-height: 0.76rem;
        }

        .red {
          color: #f00;
        }
      }

      .order-item-2-3 {
        height: 4rem;

        p {
          height: 0.76rem;
          line-height: 0.76rem;
        }
      }
    }
  }
}

.order-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
  font-size: 0.38rem;
  border-top: 1px solid #eaeaea;
  background-color: #fff;
  .inner {
    width: 90%;
    margin: auto;
  }
  span {
    color: #f00;
  }
}
</style>

