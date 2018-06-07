<template>
  <div class="main">
    <section class="floor">
      <h2 class="floor__title">爆款产品</h2>
      <div class="floor__container">
        <ul class="floor__item-list">
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
    toProduct(id) {}
  }
};
</script>

<style lang="scss" scoped>
.floor {
  &__title {
    margin: 0;
    height: 1.14rem;
    line-height: 1.14rem;
    padding: 0 0.3rem;
    font-size: 0.36rem;
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
      width: 0.38rem;
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
  }
  .goods__logo {
    font-size: 0;
    text-align: center;

    img {
      margin: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
