<template>
  <div class="detail">
    <detail-header title="资讯详情" />
    <div class="detail__item">
      <div class="detail__content" v-html="detail.newsDetail"></div>
      <div class="detail__box">
        <div class="stars">
          <i class="iconfont icon-dianzan"></i>
          <span>1</span>
        </div>
        <div class="collection" @click="addCollection(detail)">
          <i class="iconfont icon-praise" v-show="!detail.sc"></i>
          <i class="iconfont icon-praise" v-show="detail.sc" style="color: red"></i>
          <span>收藏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import {mapGetters, mapActions} from 'vuex'

import { data } from '@/mock/ceshi.js';
import {CurentTime} from '@/utils/tool'

import DetailHeader from '@/components/header'
export default {
  components: {
    DetailHeader
  },
  data() {
    return {
      id: '',
      detail: {}
    }
  },
  computed: {
    ...mapGetters(['article'])
  },
  created() {
    const {id} = this.$route.query;
    if(id) {
      this.id = id;
      this.fetchData()
    } else {
      Toast('缺少动态id')
    }
  },
  methods: {
    ...mapActions(['addArticle']),
    fetchData() {
      const {data: {news}} = data
      this.detail = news.find(item => item.id == this.id)
      console.log('news: ', this.detail);
    },
    addCollection(list) {
      const idExist = this.article.find(data => {
        return data.id == list.id;
      });
      if(idExist) {
          Toast({
            message: "您已经收藏过了",
            duration: 950
          });
        return false
      }

      const post_data = {
        id: list.id,
        title: list.newsTitle,
        newsCon:list.newsCon,
        currentdate: CurentTime()
      };
      Toast({
        message: "收藏成功",
        duration: 950
      });
      this.addArticle(post_data)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  &__item {
    background-color: #fff;
  }

  &__content {
    width: 90%;
    margin: auto;
    text-align: justify;
    font-weight: 400;
    padding-top: 1.45rem;
    font-size: 0.4rem;
    line-height: 0.59rem;
  }

  &__box {
    width: 100%;
    height: 2rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    color: #25b5fe;

    .stars,
    .collection {
      display: flex;
      justify-content: center;
      width: 3rem;
      height: 1rem;
      line-height: 1rem;
      border: 1px solid #25b5fe;
      border-radius: 30px;
      margin: auto 0.3rem;
      text-align: center;
      float: left;

      span {
        padding-left: 0.1rem;
        font-size: 0.36rem;
      }
    }
  }
}
</style>

