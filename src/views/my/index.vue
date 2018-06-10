<template>
  <div class="my">
    <my-header />
    <my-container />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from './components/my-header';
import MyContainer from './components/my-container';
import MyFooter from '@/components/footer';
export default {
  components: {
    MyHeader,
    MyContainer,
    MyFooter
  },
  data() {
    return {
      username: 'ly2011'
    };
  },
  methods: {}
};
</script>

<style>
</style>
