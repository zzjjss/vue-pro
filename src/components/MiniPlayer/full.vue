<template>
  <div>
    <div class="background">
      <img width="100%" height="100%" :src="playlist[playlistSongIndex].al.picUrl">
    </div>
    <div>ffff</div>
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
  }
}
</script>

<style lang="stylus" scoped>
.background
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  z-index -1
  opacity 0.4
  filter blur(35px)
</style>
