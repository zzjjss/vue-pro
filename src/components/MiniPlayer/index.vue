<template>
  <div v-if="playlist.length > 0">
    <div class="mini-player" :class="isTabPages() && 'tabpages'">
      <div class="img" @click="miniClick">
        <img :src="playlist[playlistSongIndex].al.picUrl" alt="">
      </div>
      <div class="info" @click="miniClick">
        <p class="name">{{ playlist[playlistSongIndex].name }}</p>
        <p class="author">{{ playlist[playlistSongIndex].ar[0].name }}</p>
      </div>

      <svg-icon :icon-class="playState ? 'play2' : 'pause'" class="icon" @click="togglePlaying" />

      <audio ref="audio" :src="songDetail.url" autoplay @ended="handleEnded" />
    </div>
    <!-- <div v-show="isFull" class="full-player" @touchmove.prevent>
      <full />
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import Full from '@/components/MiniPlayer/full.vue'
export default {
  // components: {
  //   Full
  // },
  // data() {
  //   return {
  //     isFull: false
  //   }
  // },
  computed: {
    ...mapGetters(['playlist', 'playlistSongIndex', 'songDetail', 'playState'])
  },
  // watch: {
  //   playState() {
  //     this.playState ? this.$refs.audio.play() : this.$refs.audio.pause()
  //   }
  // },
  mounted() { },
  methods: {
    // 判断是否是tab页面
    isTabPages() {
      const array = ['/home', '/recommend', '/dynamic', '/mine']
      return array.some(item => item === this.$route.path)
    },
    // 暂停/开始
    togglePlaying() {
      console.log(this.playState)

      this.playState ? this.$refs.audio.play() : this.$refs.audio.pause()
      this.setPlayingState(!this.playState)
    },
    // 当前歌曲播放完毕
    handleEnded() {
      // 队列里没有歌曲了
      this.setPlayingState(true)
    },
    // 点击mini播放器
    miniClick() {
      this.$router.push({
        path: '/player'
      })
    },
    ...mapActions(['setPlayingState'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins'
// .full-player
// position fixed
// z-index 99999
// height 100%
// left 0
// right 0
// bottom 0
// top 0
// background #333
.mini-player
  position fixed
  z-index 10000
  bottom 0
  right 0
  left 0
  background #fff7f7
  display flex
  align-items center
  justify-content space-between
  height 50px
  transition bottom 0.6s
  transform transition3d(0, 0, 0)
  // border-top-1px #ccc
  &.tabpages
    bottom 50px
  .img
    width 40px
    height 40px
    margin 0 8px
    img
      width 100%
      height 100%
      border-radius 21px
  .info
    flex 1
    .author
      font-size 11px
      color #666
      padding-top 8px
  .icon
    margin-right 12px
    width 30px
    height 30px
    color #333
</style>
