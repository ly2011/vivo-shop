<template>
  <div class="collection">
    <collection-header title="我的收藏" />

    <div class="collection-box">
      <div class="tabs">
        <div class="tab-item" v-for="(tab, index) in tabs" :key="index" @click="changeNav(index)">
          <span :class="{active: index === collectionIndex}">{{tab}}</span>
        </div>
      </div>

      <div class="shop-box">
        <template v-if="collectionIndex === 0">
          <div class="shop-item" v-for="(list, index) in collections" :key="index">
            <div class="shop-item-header">
              <p class="left">库存充足</p>
              <p class="right" @click="cancel(index)">取消收藏</p>
            </div>
            <div class="shop-item-body">
              <p class="img">
                <img :src="list.img" :alt="list.name">
              </p>
              <p class="text">
                <span class="name">{{list.name}}</span>
                <span class="price">￥ {{list.price}}</span>
              </p>
              <p class="go" @click="goDetail(list.id)">
                <span>去购买</span>
              </p>
            </div>
          </div>
        </template>

        <template v-if="collectionIndex === 1">
          <div class="" v-for="(list, index) in article" :key="index" @click="goNewsDetail(list.id)">
            <div class="article">
              <p class="title">{{list.name}}</p>
              <p class="con">{{list.newsCon}}</p>
              <p class="time">收藏时间：{{list.currentdate}}</p>
              <i @click.stop="del(index)" class="iconfont icon-huishouzhan7"></i>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CollectionHeader from '@/components/header'
export default {
  components: {
    CollectionHeader
  },
  data () {
    return {
      collectionIndex: 0
    }
  },
  computed: {
    ...mapGetters([ 'collections', 'article']),
    ...mapGetters({
      tabs: 'collections_tabs'
    })
  },
  methods: {
    ...mapActions(['deleteArticle', 'deleteGoods']),
    changeNav(index) {
      this.collectionIndex = index
    },
    cancel(index) {
      this.deleteGoods(index)
    },
    del(index) {
      this.deleteArticle(index)
    },
    goDetail(id) {
      this.$router.push({
        path: 'product',
        query: {id}
      })
    },
    goNewsDetail(id) {
      this.$router.push({
        path: 'news_detail',
        query: {id}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.collection-box {
  padding-top: 1.45rem;
}
.active {
  color: #199cfe;
  border-bottom: 2px solid #199cfe;
}
.tabs {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  margin-bottom: 1px;
  .tab-item {
    float: left;
    width: 50%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;

    span {
      display: block;
      width: 25%;
      height: 100%;
      font-size: 0.38rem;
      margin: auto;
    }
  }
}

.shop-item {
  width: 100%;
  height: 4rem;
  margin-bottom: 0.18rem;

  .shop-item-header {
    height: 1.3rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;

    .left {
      float: left;
      margin-left: 0.5rem;
      line-height: 1.3rem;
      font-size: 0.35rem;
      color: #17af58;
    }

    .right {
      float: right;
      margin-right: 0.35rem;
      line-height: 1.3rem;
      font-size: 0.35rem;
      color: #666;
    }
  }

  .shop-item-body {
    height: 2.7rem;
    background-color: #fff;

    .img {
      float: left;
      width: 30%;
      height: 100%;

      img {
        display: block;
        width: 2.4rem;
        margin: 0.1rem 0.3rem;
      }
    }

    .text {
      float: left;
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .name {
        font-size: 0.4rem;
        margin: 0.2rem 0.3rem;
      }

      .price {
        color: #f00;
        font-weight: 500;
        font-size: 0.4rem;
        margin: 0.1rem 0.3rem;
      }
    }

    .go {
      position: relative;
      float: left;
      width: 30%;
      height: 100%;

      span {
        position: absolute;
        bottom: 0.4rem;
        display: block;
        width: 90%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        color: #fff;
        border-radius: 0.8rem;
        font-size: 0.3rem;
        background-color: #f00;
      }
    }
  }
}

.article {
  width: 100%;
  height: 3.1rem;
  text-align: justify;
  font-size: 0.34rem;
  border-bottom: 1px solid #eee;
  background-color: #fff;

  i {
    float: right;
    margin: 0.2rem 0.45rem;
    font-size: 0.49rem;
  }

  p {
    width: 90%;
    margin: auto;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .time {
    width: 51%;
    margin: 0.2rem 0.55rem;
    float: left;
  }

  .title {
    font-size: 0.48rem;
    padding-top: 0.38rem;
  }
}
</style>

