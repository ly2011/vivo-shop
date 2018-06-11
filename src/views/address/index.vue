<template>
  <div class="address">
    <address-header title="管理收获地址" />
    <div class="address__container">
      <div class="address__one">
        <p class="left">配送地址</p>
        <p class="right" @click="addAddress">+添加地址</p>
      </div>
      <div class="address__list">
        <ul>
          <li class="address__item" v-for="(list, index) in address" :key="index" :class="{active: index === nowIndex}" @click="chooseAddress(list, index)">
            <p class="address__box">
              <span class="name">收货人：{{list.name}}</span>
              <span class="phone">{{list.phone}}</span>
            </p>
            <p class="address__detail">
              收货地址： {{list.zone}}{{list.detail}}
            </p>
            <div class="address__operation">
              <p class="address__operation-box">
                <i class="iconfont icon-bianji" @click="editAddress(list, index)"></i>
                <i class="iconfont icon-lajitong" @click="delAddress(index)"></i>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import { MessageBox } from 'mint-ui';
import AddressHeader from '@/components/header'
export default {
  components: {
    AddressHeader
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  computed: {
    ...mapGetters(['address'])
  },

  methods: {
    ...mapActions(['deleteAddress']),
    addAddress() {
      this.$router.push({
        path: '/address/add'
      })
    },
    chooseAddress() {},
    editAddress(list, index) {
      this.$router.push({
        path: '/address/add',
        query: {...list, ...{index: index}}
      })
    },
    delAddress(index) {
      MessageBox.confirm('确定删除该收货地址么？').then(() => {
        this.deleteAddress(index)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.address {
  &__container {
    padding-top: 1.45rem;
  }
  &__one {
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
    background-color: #fff;
    margin-bottom: 0.2rem;
    border-top: 1px solid #eaeaea;
    overflow: hidden;

    .left {
      float: left;
      margin-left: 0.6rem;
      font-size: 0.37rem;
    }

    .right {
      float: right;
      margin-right: 0.6rem;
      font-size: 0.37rem;
      color: #00acff;
    }
  }
  &__item {
    width: 100%;
    height: 3.5rem;
    background-color: #fff;
    background-size: 1.6rem;
    margin-top: 0.3rem;

    .address__box {
      width: 87%;
      margin: auto;
      font-size: 0.4rem;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;

      .phone {
        float: right;
      }
    }

    .address__detail {
      width: 87%;
      height: 1rem;
      margin: auto;
      color: #666;
      font-size: 0.38rem;
    }

    .address__operation {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      margin-top: 0.3rem;

      &-box {
        width: 100%;
        border-top: 1px solid #eaeaea;

        i {
          float: right;
          font-size: 0.5rem;
          margin-right: 1.2rem;
          color: #a3a3a3;
        }
      }
    }
  }
}
</style>

