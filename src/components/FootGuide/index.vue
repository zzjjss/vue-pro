<template>
  <footer class="footer border-top">
    <div class="guide-item" :class="isActive('/home')&&'active'" @click="change('/home')">
      <svg-icon icon-class="home" class="icon" />
      <span>音乐馆</span>
    </div>
    <div class="guide-item" :class="isActive('/recommend')&&'active'" @click="change('/recommend')">
      <svg-icon icon-class="recommend" class="icon" />
      <span>推荐</span>
    </div>
    <div class="guide-item" :class="isActive('/dynamic')&&'active'" @click="change('/dynamic')">
      <svg-icon icon-class="dynamic" class="icon" />
      <span>动态</span>
    </div>
    <div class="guide-item" :class="isActive('/mine')&&'active'" @click="change('/mine')">
      <svg-icon icon-class="mine" class="icon" />
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FootGuide',
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
    change(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins'
.footer
  // border-top-1px #ccc
  background #ffffff
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  height 50px
  display flex
  .guide-item
    flex 1
    display flex
    text-align center
    flex-direction column
    align-items center
    justify-content center
    padding-top 6px
    &.active
      color #d81e06
.icon
  width 24px
  height 24px
span
  font-size 12px
  line-height 20px
</style>
