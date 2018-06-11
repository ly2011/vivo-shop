<template>
  <div class="main">
    <section class="floor">
      <h2 class="floor__title">爆款产品</h2>
      <div class="floor__container">
        <ul class="floor__item-list clearfix">
          <li class="floor__item full">
            <div class="goods__item">
              <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180405/20180405101609299910_original.jpg" width="100%">
            </div>
          </li>
          <li class="floor__item" v-for="todo in todos" :key="todo.id" @click="toProduct(todo.id)">
            <div class="goods__item">
              <div class="goods__logo">
                <img :src="todo.homeImg" :alt="todo.homeName">
              </div>
              <p class="goods__name">{{todo.homeName}}</p>
              <p class="goods__subname">{{todo.homeNametwo}}</p>
              <p class="goods__price">￥{{todo.homePrice}}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home-container',
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    toProduct(id) {
      this.$router.push({
        path: 'product',
        query: {
          id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.floor {
  &__title {
    margin: 0;
    height: 1.3rem;
    line-height: 1.3rem;
    padding: 0 0.3rem;
    font-size: 0.35rem;
    font-weight: 400;
    color: #333;
    text-align: center;
    &::before,
    &::after {
      position: relative;
      margin: 0 0.1rem;
      display: inline-block;
      content: ' ';
      height: 1px;
      width: 0.5rem;
      background-color: #9c9c9c;
      vertical-align: middle;
    }
  }
  &__container {
    overflow: hidden;
  }
  &__item {
    position: relative;
    float: left;
    width: 50%;
    height: 4.7rem;
    background-color: #fff;
    &.full {
      width: 100%;
      height: 4.067rem;
    }
  }
  .goods__logo {
    width: 100%;
    font-size: 0;
    text-align: center;
    background-color: #fff;

    img {
      width: 2.5rem;
      height: 2.3rem;
      margin: 0.5rem auto 0.2rem;
    }
  }
  .goods__name {
    width: 80%;
    height: 0.5rem;
    line-height: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.29rem;
    font-weight: 400;
    text-align: center;
  }
  .goods__subname {
    height: 0.48rem;
    font-size: 0.1rem;
    text-align: center;
  }
  .goods__price {
    font-size: 0.3rem;
    color: #f00;
    text-align: center;
  }
}
</style>
