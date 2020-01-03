<template>
  <div class="title">
    <h2 class="text">{{ title }}</h2>
    <div class="more">
      <span>更多
        <svg-icon icon-class="arrow" style="margin-left:-0.02rem" /></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '歌单'
    }
  }
}
</script>

<style scoped lang="stylus">
.title
  display flex
  justify-content space-between
  align-items flex-end
  margin 0.32rem
  padding-top 0.2rem
  .text
    font-weight bold
    font-size 0.32rem
  .more
    font-weight bold
    font-size 0.22rem
</style>
