<template>
  <div class="play-list">
    <div v-for="(item,index) in lists" :key="index" class="item" @click="selectItem(item,index)">
      <list-cover :img-url="item.coverImgUrl||item.picUrl" :play-count="item.playCount" />
      <div class="item-name">{{ item.name }}</div>

    </div>
  </div>
</template>

<script>
import ListCover from '@/components/ListCover'
export default {
  components: {
    ListCover
  },
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectItem(item, index) {
      this.$emit('select', item, index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins'
.play-list
  margin 0.24rem
  display flex
  flex-wrap wrap
  .item
    position relative
    box-sizing border-box
    width 33.33%
    padding 0 1.1376%
    // .item-img
    // width 100%
    // img
    // width 100%
    // border-radius 0.16rem
    .item-name
      no-wrap-2()
      margin 0.14rem 0 0.32rem 0
    line-height 1.3
</style>
