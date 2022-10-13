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
#app 
</style>
