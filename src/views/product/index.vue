<template>
  <div class="good-detail">
    <detail-header title="商品详情" />
    <div class="list">
      <ul>
        <li v-for="(good, index) in goodDetails" :key="index">
          <div class="swipe-wrap">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(list, i) in good.homeSwipe" :key="i">
                <img :src="list.swipe" alt="图片" />
              </mt-swipe-item>
            </mt-swipe>
          </div>

          <div class="info">
            <div class="number">
              商品编号：{{good.number}}
            </div>
            <div class="name">{{good.homeName}}</div>
            <div class="desc">
              <span class="bright">【{{good.homeBright}}】</span>
              {{good.homeTitle}}
            </div>
            <div class="color">
              {{good.color}}
            </div>
            <div class="price">￥{{good.homePrice}}</div>
          </div>

          <div class="number-control">
            <h2 class="label">购买数量：</h2>
            <div class="number-container">
              <button class="decrease">-</button>
              <input class="number" type="text" v-model="good.homeValue" readonly="readonly">
              <button class="increase">+</button>
            </div>
          </div>

          <div class="content">
            <mt-navbar v-model="selected">
              <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
              <mt-tab-item id="tab-container2">参数</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected" swipeable>
              <mt-tab-container-item id="tab-container1">
                <div class="img">
                  <p v-for="(image, im_index) in good.Images" :key="im_index">
                    <img :src="image.one" alt="详情图片" />
                  </p>
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container2">
                <div class="peizhi" v-html="good.homePeizhi"></div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>

          <div class="footer">
            <div class="left">
              <div class="cart">
                <div class="cart-number">{{cartNumber}}</div>
                <img src="http://p6563v2ck.bkt.clouddn.com/%E8%B4%AD%E7%89%A9%E8%BD%A6.png" alt="">
                <span>购物车</span>
              </div>
              <div class="collection">
                <div class="collection-box">
                  <i class="iconfont icon-collection"></i>
                  <span>收藏</span>
                </div>
              </div>
              <div class="shop">
                <img src="http://p6563v2ck.bkt.clouddn.com/%E5%BA%97%E9%93%BA_2.png" alt="">
                <span>店铺</span>
              </div>
            </div>
            <div class="right">
              <div class="add">
                <button>加入购物车</button>
              </div>
              <div class="purchase">
                <button>立即购买</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { data } from '@/mock/ceshi.js';

import DetailHeader from '@/components/header';
export default {
  components: {
    DetailHeader
  },
  data() {
    return {
      id: '',
      active: '1',
      selected: 'tab-container1',
      goodDetails: [],
      cartNumber: 0
    };
  },
  created() {
    const { id } = this.$route.query;
    if (id) {
      this.id = id;
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      const { data: { home } } = data;
      const { data: { set } } = data;

      this.goodDetails = home.filter(item => item.id == this.id);

      this.goodDetails = [
        ...this.goodDetails,
        ...set.filter(item => item.id == this.id)
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.good-detail {
  .list {
    margin-bottom: 1rem;
    padding-top: 1.45rem;
  }
  .swipe-wrap {
    height: 8rem;
    margin-top: 3px;
    background-color: #fff;

    img {
      width: 70%;
      height: 7rem;
      display: block;
      margin: auto;
    }
  }

  .info {
    padding: 0.4rem;
    margin-top: -15px;
    background-color: #fff;
    border-bottom: 1px solid #cecece;

    .name {
      font-size: 0.5rem;
      font-weight: 400;
      line-height: 1rem;
    }

    .price {
      color: #f81200;
      font-size: 0.7rem;
      margin-top: 0.1rem;
    }

    .desc {
      text-align: justify;
      font-size: 0.348rem;

      .bright {
        color: #ff4b3d;
        margin-left: -0.2rem;
      }
    }
  }

  .content {
    .img {
      margin: 4px 0 6px;

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .peizhi {
      width: 90%;
      margin: auto;
      div {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
      h3 {
        height: 2rem;
        line-height: 2.3rem;
        font-size: 0.5rem;
        border-bottom: 1px solid #ccc;
      }
      span {
        font-size: 0.38rem;
        color: #888;
        margin-top: 0.3rem;
        display: block;
      }
      p {
        height: 0.55rem;
        color: #888;
      }
    }
  }

  .number-control {
    height: 2rem;
    border-bottom: 1px solid #cecece;
    padding: 0.4rem;

    .label {
      float: left;
      margin-top: 0.2rem;
      font-size: 0.35rem;
    }

    .number-container {
      width: 2.35rem;
      height: 0.78rem;
      line-height: 0.76rem;
      vertical-align: middle;
      border: 1px solid #d1d1d1;
      border-radius: 0.05rem;
      letter-spacing: 0;
      font-size: 0;
      overflow: hidden;
    }

    button,
    input {
      width: 0.78rem;
      border: 0;
      font-size: 0.5rem;
      background-color: #fff;
      vertical-align: middle;
    }
    .decrease,
    input {
      border-right: 1px solid #d1d1d1;
      outline: 0;
    }
    .decrease,
    .increase {
    }

    .number {
      height: 100%;
      box-sizing: border-box;
      border-radius: 0;
      font-size: 0.32rem;
      color: #333;
      text-align: center;
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.2rem;
    background-color: #f6f4f7;
    border-top: 1px solid #efefef;

    .left {
      width: 45%;
      float: left;
      position: relative;
      font-size: 0.35rem;

      .cart,
      .shop {
        width: 33%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        float: right;
        position: relative;

        img {
          width: 0.76rem;
          height: 0.7rem;
          display: block;
          margin: auto;
        }

        span {
          text-align: center;
          color: #767676;
        }
      }

      .collection {
        width: 33%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        float: right;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        color: #767676;

        .collection-box {
          text-align: center;
        }

        i {
          font-size: 0.6rem;
          display: block;
          text-align: center;
        }

        span {
          text-align: center;
        }
      }
    }

    .right {
      width: 55%;
      float: right;

      .add,
      .purchase {
        button {
          display: block;
          width: 50%;
          height: 1.2rem;
          line-height: 1.2rem;
          color: #fff;
          font-size: 0.35rem;
          border: 0;
          outline: 0;
        }
      }

      .add {
        button {
          background-color: #ff9800;
        }
      }

      .purchase {
        button {
          background-color: #e3211e;
        }
      }
    }
  }
}
</style>

