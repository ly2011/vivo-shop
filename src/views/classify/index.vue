<template>
  <div class="classify">
    <classify-header title="商品分类" />
    <div class="classify__container">
      <div class="classify__left" ref="wrapper">
        <ul class="classify__left-ul clearfix">
          <li v-for="(list, index) in left" :key="index" @click="changeNav(index)" :class="{active: index === classifyIndex}">
            {{list.name}}
          </li>
        </ul>
      </div>
      <div class="classify__right" ref="wrapper2">
        <ul class="classify__right-ul clearfix">
          <li v-for="(list, index) in right.right_data" :key="index" @click="goDetails(list.id)">
            <img :src="list.img" :alt="list.name" />
            <span>{{list.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <classify-footer />
  </div>
</template>

<script>
import { data } from '../../mock/ceshi.js';

import ClassifyHeader from '@/components/header'
import ClassifyFooter from '@/components/footer'
export default {
  components: {
    ClassifyHeader,
    ClassifyFooter
  },
  data() {
    return {
      left: [],
      right: [],
      list: [],
      ce: [],
      key2: '',
      classifyIndex: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const {data: {classify: {left, right}}} = data;

      this.left = left || [];
      this.list = right || [];
      this.right = this.list[0]

      this.right.right_data = this.right.right_data.concat(this.right.right_data)
    },
    changeNav(index) {
      this.classifyIndex = index;
      this.right = this.list[index]
    },
    goDetails(id) {
      console.log('====================================');
      console.log('id: ', id);
      console.log('====================================');
    }
  }
}
</script>

<style lang="scss" scoped>
.classify {
  &__container {
    display: flex;
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    padding-top: 1.45rem;
  }
  &__left {
    flex: 0 0 2.9rem;
    width: 4rem;
    height: 100%;
    background-color: #f6f6f6;
    margin-bottom: 1.51rem;
    font-size: .35rem;

    li {
      height: 1.3rem;
      line-height: 1.3rem;
      text-align: center;
      &.active {
        border-left: 2px solid;
        background-color: #fff;
        color: #199cfe;
      }
    }
  }
  &__right {
    flex: 1;
    flex-wrap: wrap;
    overflow-y: auto;

    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 33%;
      margin-top: .3rem;
      font-size: .34rem;
      float: left;

      img {
        width: 1.98rem;
        display: block;
        margin: auto;
      }

      span {
        color: #999;
        line-height: .9rem;
      }
    }
  }
}
</style>
