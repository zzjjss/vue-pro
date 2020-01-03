<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />

    <mini-player />

  </div>
</template>

<script>
import MiniPlayer from '@/components/MiniPlayer'

export default {
  components: {
    MiniPlayer
  },
  methods: {
    isTabPages() {
      const array = ['/home', '/recommend', '/dynamic', '/mine']
      return array.some(item => item === this.$route.path)
    }
  }
}
</script>

<style lang="stylus">
// 覆盖掉svg里面的fill属性，使图标的颜色可以直接继承父级
path
  fill inherit !important
</style>

