<template>
  <div class="detail">

    <div class="info-bg">
      <img :src="playlist.coverImgUrl" alt="">
    </div>

    <div class="back" @click="back">
      <svg-icon icon-class="back" class="icon" />
    </div>

    <div class="info-msg">
      <div class="info-box">
        <div class="left">
          <div class="left-img">
            <list-cover :img-url="playlist.coverImgUrl" :play-count="playlist.playCount" />
          </div>
        </div>
        <div class="right">
          <p class="title">{{ playlist.name }}</p>
          <div v-if="playlist.creator" class="author">
            <span>
              <img :src="playlist.creator.avatarUrl" alt="">
            </span>
            <span>{{ playlist.creator.nickname }}</span>
            <svg-icon icon-class="arrow" />
          </div>
          <div class="text">
            <p>{{ playlist.description }}</p>
            <svg-icon icon-class="arrow" class="icon" />
          </div>
        </div>
      </div>

      <div class="navigate">
        <div class="item">
          <svg-icon icon-class="message" class="icon" />
          <p>消息</p>
        </div>
        <div class="item">
          <svg-icon icon-class="share" class="icon" />
          <p>分享</p>
        </div>
        <div class="item">
          <svg-icon icon-class="down" class="icon" />
          <p>下载</p>
        </div>
        <div class="item">
          <svg-icon icon-class="collect" class="icon" />
          <p>收藏</p>
        </div>
      </div>

    </div>
    <div class="song-box">
      <div v-if="playlist.tracks" class="head">
        <svg-icon icon-class="play2" class="icon" />
        <p>播放全部<span>(共50首)</span></p>
        <div><span>
          <svg-icon icon-class="folder" class="icon2" /></span>16689</div>
      </div>

      <song-list :tracks="playlist.tracks" @select="selectItem" />

    </div>

  </div>
</template>

<script>
import { getListDetail } from '@/api/home'
import ListCover from '@/components/ListCover'
import SongList from '@/components/SongList'

import { mapActions } from 'vuex'

export default {
  components: {
    ListCover,
    SongList
  },
  data() {
    return {
      id: '', // 当前歌单id
      playlist: {} // 歌单信息
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getListDetail()
  },
  // mounted() {
  //   window.addEventListener('scroll', this.getScroll)
  // },
  // deactivated() {
  //   window.removeEventListener('scroll', this.getScroll)
  // },
  methods: {
    // 获取歌单详情
    async getListDetail() {
      const res = await getListDetail({ id: this.id })
      this.playlist = res.playlist
      console.log(res.playlist)
    },
    // 返回
    back() {
      this.$router.back()
    },
    // 监听滑动
    getScroll() {
      const top = document.documentElement.scrollTop
      console.log(top)
      if (top > 288) {
        console.log('fff')
        document.title = 'ssssss'
      }
    },
    // 歌曲点击事件
    selectItem(tracks, index) {
      this.selectPlay({
        list: tracks,
        index
      })
    },
    ...mapActions(['selectPlay'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins'
.info-bg
  // height 5.6 rem
  height 318px
  width 100%
  overflow hidden
  img
    width 100%
    filter blur(88px)
    transform scale(2)
.info-msg
  position relative
  // bottom 4.66rem
  bottom 265px
  display flex
  margin 16px 0.32rem
  flex-direction column
  .info-box
    display flex
  .left
    width 132px
  .right
    position relative
    flex 1
    margin-left 0.4rem
    .title
      margin-top 2px
      color #ffffff
      font-size 18px
      font-weight bold
      letter-spacing 0.5px
      line-height 1.3
      no-wrap-2()
    .author
      margin-top 8px
      color rgba(255, 255, 255, 0.8)
      span
        display inline-block
        line-height 1
      :nth-child(1)
        width 28px
        border-radius 14px
      :nth-child(2)
        padding-left 10px
        line-height 28px
        vertical-align middle
        position relative
        top 1px
      :nth-child(3)
        line-height 28px
        position relative
        font-size 12px
        position relative
        top 1px
        margin-left 2px
    .text
      display flex
      position absolute
      bottom 2px
      right 0
      p
        no-wrap-2()
        flex 1
        margin-top 16px
        color rgba(255, 255, 255, 0.7)
        line-height 1.3
        height 30px
        font-size 12px
        letter-spacing 0.5px
      .icon
        font-size 12px
        width 12px
        color rgba(255, 255, 255, 0.7)
        margin-top 24px
.navigate
  display flex
  // margin-top 0.32rem
  margin-top 18px
  // padding-top 0.14rem
  padding-top 8px
  color #ffffff
  font-size 12px
  .item
    flex 1
    text-align center
    .icon
      width 24px
      height 24px
      // margin-bottom 0.1rem
      margin-bottom 8px
  p
    color rgba(255, 255, 255, 0.8)
.back
  position absolute
  // margin 0.24rem 0.32rem
  margin 15px 0.32rem
  // font-size 0.58rem
  font-size 32px
  top 0
  left 0
  z-index 9
  color rgba(255, 255, 255, 0.8)
.song-box
  position absolute
  // top 5.1rem
  top 288px
  width 100%
  border-radius 0.4rem 0.4rem 0 0
  background #fff
  .head
    padding 0.28rem
    display flex
    justify-content space-between
    .icon
      width 24px
      height 24px
    p
      line-height 24px
      flex 1
      margin-left 0.2rem
      font-size 18px
      span
        color #999
        font-size 14px
    div
      display inline-block
      line-height 24px
      color #999
      vertical-align bottom
      .icon2
        font-size 16px
        margin-right 2px
.mini-player
  position fixed
  bottom 0
  right 0
  left 0
</style>

