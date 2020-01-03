<template>
  <div>
    <div v-for="(item,index) in tracks " :key="index" class="song">
      <div class="left">{{ index+1 }}</div>
      <div class="center" @click="selectItem(item,index)">
        <p class="name">{{ item.name }}</p>
        <div class="singer">
          <!-- <span>独家</span> -->
          <span>{{ item.ar[0].name }}-{{ item.al.name }}</span>
        </div>
      </div>
      <div class="right">
        <!-- <span class="video">
        <svg-icon icon-class="vedio" class="icon" />
      </span> -->
        <span class="more">
          <svg-icon icon-class="more" class="icon" />
        </span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    tracks: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectItem(item, index) {
      this.$emit('select', this.tracks, index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins'
.song
  display flex
  align-items center
  justify-content space-between
  padding 10px 0
  .left
    color #999
    width 0.9rem
    text-align center
    font-size 15px
  .right
    margin-right 0.32rem
    color #999
    .icon
      margin-left 0.2rem
      font-size 20px
  .center
    flex 1
    line-height 1.5
    no-wrap()
    .name
      font-size 16px
      no-wrap()
    .singer
      display inline-flex
      font-size 12px
      color #999
      no-wrap()
</style>
