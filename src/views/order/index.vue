<template>
  <div class="order">
    <order-header title="我的订单" />
    <div class="order__info">
      <div class="order__box">
        <p v-for="(tab, index) in tabs" :key="index" @click="changeNav(index)">
          <a :class="{active: index === nowIndex}">{{tab}}</a>
        </p>
      </div>

      <div class="order__box2">
        <div v-show="nowIndex === 0">
          <div v-for="(list, index) in orders" :key="index" class="order__item">
            <div class="order__inner-1">
              <p class="left">
                <i class="iconfont icon-qijiandian"></i>
                vivo官方旗舰店
              </p>
              <p class="right">已完成</p>
            </div>
            <div class="order__inner-2">
              <img :src="list.img" alt="">
              <div class="good__info">
                <h3 class="name">{{list.name}}</h3>
                <p class="price">￥{{list.price}}</p>
              </div>
              <div class="good__number">
                × {{list.value}}
              </div>
            </div>

            <div class="order__inner-3">
              <div class="order__info">
                <p class="number">共计
                  <span>{{list.value}}</span>件商品
                </p>
                <p class="price">总计：
                  <span>￥{{list.price}}</span>
                </p>
                <p class="other">(含运费：¥0.00优惠：¥0.00)</p>
              </div>
            </div>

            <div class="order__inner-4">
              <a @click.stop="goDetail(list)">查看详情</a>
              <a @click.stop="delOrder(index)">订单删除</a>
            </div>
          </div>
        </div>
        <div v-show="nowIndex === 1">
          这里是等待付款
        </div>
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
  data () {
    return {
      nowIndex: 0
    }
  },
  computed: {
    ...mapGetters({
      tabs: 'order_tabs',
      'orders': 'orders'
    })
  },
  methods: {
    changeNav(index) {
      this.nowIndex = index;
    },
    goDetail(list){
      this.$router.push({
        path: '/order/detail',
        query: {
          id: list.id,
          text: list.text,
          ly: list.ly,
          listname: list.listname,
          value: list.value
        }
      })
    },
    delOrder(){}
  }
}
</script>

<style lang="scss" scoped>
.order__info {
  padding-top: 1.45rem;
}
.order__box {
  height: 1rem;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;

  .active {
    color: #199cfe;
    border-bottom: 2px solid #199cfe;
  }

  p {
    float: left;
    width: 25%;
    height: 100%;
    line-height: 1rem;
    text-align: center;
  }

  a {
    display: block;
    width: 50%;
    height: 100%;
    font-size: 0.36rem;
    margin: auto;
  }
}
</style>

