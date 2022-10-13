<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getListAPI } from '@/api'
export default {
  created () {
    this.getListFn()
    this.$store.dispatch
  },
  methods: {
    async getListFn () {
      const { data: res } = await getListAPI()
      console.log(res)
    }
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
