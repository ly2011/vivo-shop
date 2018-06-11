<template>
  <div class="address">
    <address-header title="新增地址" />
    <div class="address__container">
      <div class="address__item">
        <label>收货人：</label>
        <input type="text" v-model="name" placeholder="收货人姓名">
      </div>
      <div class="address__item">
        <label>手机号码：</label>
        <input type="text" v-model="phone" placeholder="收货人的手机号码">
      </div>
      <div class="address__item">
        <label>选择地区：</label>
        <input type="text" v-model="zone" placeholder="请选择收货地址">
      </div>
      <div class="address__item">
        <label>详细地址：</label>
        <input type="text" v-model="detail" placeholder="详细街道地址">
      </div>
    </div>
    <footer class="footer">
      <button class="save-btn" @click="save">保存地址</button>
    </footer>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import {mapActions} from 'vuex'
import AddressHeader from '@/components/header'
export default {
  components: {
    AddressHeader
  },
  data () {
    return {
      name: '',
      phone: '',
      zone: '',
      detail: '',
      nowIndex: -1
    }
  },
  created () {
    const params = this.$route.query;
    if(params.name) {
      this.isEdit = true
    }
    this.name = params.name || '';
    this.phone = params.phone || '';
    this.zone = params.zone || '';
    this.detail = params.detail || ''
    this.nowIndex = params.index === '' || params.index === undefined ? -1 : parseInt(params.index, 10)
  },
  methods: {
    ...mapActions(
      ['setAddress', 'updateAddress']
    ),
    save() {
      if(this.name == '' || this.phone == '' || this.zone =='' || this.detail == '') {
        Toast({
          message: '请填写完整地址信息',
          duration: 1000
        })
        return false
      }
      const post_data = {
        name: this.name,
        phone: this.phone,
        zone: this.zone,
        detail: this.detail
      }
      if(this.nowIndex !== -1) {
        this.updateAddress(post_data, this.nowIndex)
      } else {
        this.setAddress(post_data)
      }
      this.goBack()

    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.address {
  &__container {
    padding-top: 1.45rem;
  }

  &__item {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: #fff;
    overflow: hidden;

    label {
      float: left;
      width: 30%;
      padding-left: 0.58rem;
      font-size: 0.4rem;
      text-align: justify;
    }

    input {
      width: 70%;
      font-size: 0.4rem;
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.3rem;
    border-top: 1px solid #e0e0e0;
    background-color: #fff;

    .save-btn {
      float: none;
      margin: 0.18rem auto;
      width: 95%;
      height: 0.9rem;
      line-height: 0.9rem;
      border-radius: 20px;
      font-size: 0.28rem;
      color: #fff;
      background-color: #00acff;
      border: 0;
      outline: 0;
    }
  }
}
</style>

