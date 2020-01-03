<template>
  <div>
    <div class="item-img">
      <img :src="imgUrl" alt="">
      <div class="item-info">
        <span class="icon">
          <svg-icon icon-class="play" />
        </span>
        <span>{{ Math.floor(playCount / 10000) }}万</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    playCount: {
      type: Number,
      default: 0
    }
  }

}
</script>

<style lang="stylus" scoped>
.item-img
  width 100%
  position relative
  img
    width 100%
    border-radius 0.16rem
.item-info
  color #ffffff
  position absolute
  top 0.1rem
  right 0.18rem
  font-size 0.2rem
  line-height 0.2rem
  .icon
    font-size 0.19rem
</style>
