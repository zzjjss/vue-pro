<template>
  <div class="full">
    <div class="background">
      <img width="100%" height="100%" :src="playlist[playlistSongIndex].al.picUrl">
    </div>
    <div class="back" @click="back">
      <svg-icon icon-class="back" class="icon" />
    </div>
    <div class="center">
      <div class="cd-wrapper">
        <div class="cd">
          <img src="" alt="">
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="operators">
        <svg-icon icon-class="random" class="icon" />
        <svg-icon icon-class="prev" class="icon" />
        <svg-icon icon-class="pause" class="icon" />
        <svg-icon icon-class="next" class="icon" />
        <svg-icon icon-class="list" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'playlist',
      'playlistSongIndex',
      'songDetail',
      'playState'
    ])
  },
  created() {
    document.title = this.playlist[this.playlistSongIndex].name + '-' + this.playlist[this.playlistSongIndex].ar[0].name
  },
  methods: {
    // 返回
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.full
  position fixed
  z-index 99999
  height 100%
  left 0
  right 0
  bottom 0
  top 0
  background #333
.background
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  z-index -1
  opacity 0.4
  filter blur(35px)
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
.bottom
  position absolute
  bottom 24px
  color #ffffff
  box-sizing border-box
  width 100%
  padding 0 20px
  .operators
    display flex
    text-align center
    justify-content space-around
    align-items center
    font-size 26px
    // opacity 0.9
    :nth-child(2), :nth-child(4)
      font-size 34px
    :nth-child(3)
      font-size 52px
.center
  position fixed
  width 100%
  top 80px
  bottom 160px
  white-space nowrap
  font-size 0
  background pink
  .cd-wrapper
    position absolute
    left 10%
    top 0
    width 80%
    .cd
      width 6rem
      height 6rem
      box-sizing border-box
      border 10px solid rgba(255, 255, 255, 0.1)
      border-radius 50%
      background yellow
</style>
