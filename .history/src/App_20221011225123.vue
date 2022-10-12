<template>
  <div id="app">
    
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
</style>
