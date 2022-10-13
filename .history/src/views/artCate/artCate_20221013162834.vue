<template>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix header-box">
          <span>文章分类</span>
          <el-button type="primary" size="mini">添加分类</el-button>
        </div>
        xxx
      </el-card>
    </div>
  </template>

<script>
import { getArtCateListAPI } from '@/api'
export default {
  name: 'ArtCate',
  data () {
    return {

    }
    },
    methods: {
    
  }
}
</script>

  <style lang="less" scoped>
  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
