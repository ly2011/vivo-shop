<template>
  <div class="news">
    <news-header />
    <news-container :news="news" />
    <news-footer />
  </div>
</template>

<script>
import { data } from '../../mock/ceshi.js';

import NewsHeader from './components/news-header'
import NewsContainer from './components/news-container'
import NewsFooter from '@/components/footer'
export default {
  components: {
    NewsHeader,
    NewsContainer,
    NewsFooter
  },
  data() {
    return {
      news: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const {data: {news}} = data;
      this.news = news || []
    }
  }
}
</script>

<style>

</style>
