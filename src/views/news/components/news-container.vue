<template>
  <div class="news">
    <div class="news-box" v-for="(list, index) in news" :key="index" @click="goDetails(list.id)">
      <div class="news__title">
        {{list.newsTitle}}
      </div>
      <div class="news__img">
        <img :src="list.newsImg" :alt="list.name" />
      </div>
      <div class="news__content">
        {{list.newsCon}}
      </div>
      <div class="news__time">
        发布日期 2018-06-07
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    goDetails(id) {
      console.log('====================================');
      console.log('id: ', id);
      console.log('====================================');
    }
  }
}
</script>

<style lang="scss" scoped>
  .news {
    width: 100%;
    height: 100%;
    padding-top: 1.45rem;
    padding-bottom: 1.45rem;
    &-box {
      width: 100%;
      height: 8.4rem;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
    }
    &__title {
      color: #505b63;
      width: 95%;
      margin: auto;
      text-align: left;
      font-size: .5rem;
      height: 1.5rem;
      line-height: 1.5rem;
    }
    &__img {
      width: 95%;
      height: 4.3rem;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__content {
      width: 95%;
      margin: auto;
      line-height: .5rem;
      padding-top: .3rem;
      color: #696969;
      text-align: justify;
      font-size: .3rem;
    }
    &__time {
      width: 95%;
      margin: auto;
      padding-top: .2rem;
      font-size: .3rem;
      color: #696969;
    }
  }
</style>

