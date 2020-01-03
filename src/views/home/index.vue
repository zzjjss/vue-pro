<template>
  <div class="home" style="margin-bottom:50px">

    <swiper v-if="bannerList.length" ref="swiperOption" :options="swiperOption">
      <swiper-slide v-for="(item,index) in bannerList" :key="index">
        <img :src="item.pic" alt="">
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>

    <div class="navigate">
      <div class="item">
        <svg-icon icon-class="singer" class="icon" />
        <p>歌手</p>
      </div>
      <div class="item">
        <svg-icon icon-class="rank" class="icon" />
        <p>排行</p>
      </div>
      <div class="item">
        <svg-icon icon-class="classify" class="icon" />
        <p>分类歌单</p>
      </div>
      <div class="item">
        <svg-icon icon-class="radio" class="icon" />
        <p>电台</p>
      </div>
      <div class="item">
        <svg-icon icon-class="listen" class="icon" />
        <p>一起听</p>
      </div>
    </div>

    <div class="card">
      <div class="card-item">
        <div class="card-item-img">
          <img src="http://qpic.y.qq.com/music_cover/J64lA7tSFnxIxyd7FrKy5utpgnlqXBHFIZnJ7mVRDhkiaKCiaiaXoBqMQ/300?n=1" alt="">
        </div>
        <div class="info">
          <div class="info-img">
            <img src="http://p4.music.126.net/SyOISKKFQVQKcpTfn7TDeQ==/109951164203396142.jpg?param=200y200" alt="">
          </div>
          <div class="info-text">
            <div class="card-item-name">新歌新碟</div>
            <div class="card-item-desc">美宥复古感性风</div>
          </div>

        </div>

      </div>
      <div class="card-item">
        <div class="card-item-img">
          <img src="http://qpic.y.qq.com/music_cover/8eiaDBJ27yYicpMibYZmmEdNPQU5zrE5SEbmcZbYN23HA1KvTYkBfn55A/300?n=1" alt="">
        </div>
        <div class="info">
          <div class="info-img">
            <img src="http://p2.music.126.net/F4ML-0t-oGKeP-EG34Z8jQ==/109951164457683833.jpg?param=177y177" alt="">
          </div>
          <div class="info-text">
            <div class="card-item-name">数字专辑</div>
            <div class="card-item-desc">PICK神仙小分队</div>
          </div>

        </div>

      </div>
    </div>

    <section-title title="推荐歌单" />
    <music-list :lists="recommendList" @select="selectItem" />

    <section-title title="热门歌单" />
    <music-list :lists="hotList" @select="selectItem" />
    <foot-guide />
    <!-- <mini-player /> -->
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import { getBannerList, getHotrList, getRecommendList } from '@/api/home'
import FootGuide from '@/components/FootGuide'
import SectionTitle from '@/components/SectionTitle'
import MusicList from '@/components/MusicList'
// import MiniPlayer from '@/components/MiniPlayer'
export default {
  components: {
    FootGuide,
    swiper,
    swiperSlide,
    SectionTitle,
    MusicList
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        centeredSlides: true
      },
      bannerList: [],
      hotList: [],
      recommendList: []
    }
  },
  created() {
    this.getBannerList()
    this.getHotrList()
    this.getRecommendList()
  },
  methods: {
    // 获取轮播图数据
    async getBannerList() {
      const query = {
        type: 1
      }
      const res = await getBannerList(query)
      this.bannerList = res.banners
    },
    // 获取热门歌单
    async getHotrList() {
      const query = {
        limit: 6
      }
      const res = await getHotrList(query)
      this.hotList = res.playlists
    },
    // 获取推荐歌单
    async getRecommendList() {
      const query = {
        limit: 6
      }
      const res = await getRecommendList(query)
      this.recommendList = res.result
    },
    // 歌单点击事件
    selectItem(item, index) {
      this.$router.push({
        path: `/list-detail/${item.id}`
      })
    },
    aaa() {
      console.log(this.$refs.audio.play())
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins'
.swiper-container
  margin 0.32rem 0
  .swiper-slide
    box-sizing border-box
    padding 0 0.32rem
    img
      width 100%
      border-radius 0.16rem
  .swiper-pagination-bullets
    bottom 0.1rem
  >>> .swiper-pagination-bullet-active
    background #fff
.navigate
  display flex
  margin 0.32rem
  padding-top 0.14rem
  .item
    flex 1
    text-align center
    .icon
      color #d81e06
      width 0.46rem
      height 0.46rem
      margin-bottom 0.2rem
.card
  display flex
  justify-content space-between
  margin 0.32rem
  position relative
  .card-item
    // width 3.35rem
    width 49%
    height 1.48rem
    overflow hidden
    border-radius 0.16rem
    .card-item-img
      img
        width 100%
        filter blur(10px)
    .info
      position absolute
      top 0
      display flex
      margin 0.28rem 0.2rem
      .info-img
        width 0.92rem
        img
          width 100%
          border-radius 0.08rem
      .card-item-name
        color #ffffff
        padding 0.1rem
      .card-item-desc
        color #f2f2f2
        padding 0.1rem
        no-wrap()
        font-size 0.24rem
</style>
