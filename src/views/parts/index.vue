<template>
  <div class="choose">
    <choose-header title="选购配件" />

    <div class="choose_con">
      <div class="upper">
        <span v-for="(list, index) in upper" :key="index" class="list" @click="choose(index)" :class="{active: index === partsIndex}">{{list.name}}</span>
      </div>
      <div class="sort">
        <p @click="rise">价格升序</p>
        <p @click="drop">价格降序</p>
        <p>销量优先</p>
      </div>
      <div class="lower">
        <div v-for="(list, index) in lower.PartsLower_data" :key="index" class="lower_list" @click="goDetail(list.id)">
          <img class="phone_logo" :src="list.homeImg" :alt="list.homeName" />
          <p class="title">{{list.homeName}}</p>
          <p class="subtitle">{{list.homeNametwo}}</p>
          <p class="price">￥ {{list.homePrice}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '@/mock/ceshi.js';
import ChooseHeader from '@/components/header'
export default {
  components: {
    ChooseHeader
  },
  data() {
    return {
      upper: [],
      lower: {},
      list: [],
      partsIndex: 0
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const { data: { parts } } = data || {};
      this.upper = parts.PartsUpper || []
      this.list = parts.PartsLower || []
      this.lower = this.list[0] || {}
    },
    choose(index) {
      this.partsIndex = index;
      this.lower = this.list[index]
    },
    rise() {
      this.lower.PartsLower_data.sort((a, b) => {
        return a.homePrice > b.homePrice
      })
    },
    drop() {
      this.lower.PartsLower_data.sort((a, b) => {
        return a.homePrice < b.homePrice
      })
    },
    goDetail(id) {
      this.$router.push({
        path: '/product',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: #25b5fe;
  border-bottom: 2px solid #25b5fe;
}
.choose {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
}
.choose_con {
  padding-top: 1.32rem;
}
.sort {
  position: relative;
  top: 1.3rem;
  width: 100%;
  height: 1rem;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;

  p {
    float: left;
    width: 33%;
    line-height: 1rem;
    font-size: 0.35rem;
    text-align: center;
  }
}

.upper {
  position: fixed;
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  background-color: #fff;
  z-index: 1;

  .list {
    float: left;
    text-align: center;
    width: 25%;
    font-size: 0.37rem;
  }
}

.lower {
  padding-top: 1.2rem;
  border-bottom: 1px solid #f4f4f4;

  .lower_list {
    float: left;
    width: 50%;
    height: 6.3rem;
    margin-top: 0.1rem;
    border-right: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    background-color: #fff;

    .phone_logo {
      display: block;
      width: 4rem;
      height: 3.6rem;
      margin: auto;
      padding: 0.5rem;
    }

    .title {
      width: 90%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.4rem;
      margin: auto;
      text-align: center;
    }

    .subtitle {
      width: 3.8rem;
      margin: 0 auto;
      padding: 0;
      height: 1.1rem;
      font-size: 0.22rem;
      line-height: 1.4;
      color: #333;
      word-break: break-all;
      padding-top: 0.2rem;
      text-align: center;
      overflow: hidden;
    }

    .price {
      text-align: center;
      color: red;
      line-height: 1rem;
      font-size: 0.4rem;
    }
  }
}
</style>

