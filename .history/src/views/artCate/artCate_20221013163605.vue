<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <span>文章分类</span>
        <el-button type="primary" size="mini">添加分类</el-button>
      </div>
      <el-table style="width: 100%" border stripe :data="cateList">
        <el-table-column
          label="序号"
          type="index"
          width="100"
        ></el-table-column>
        <el-table-column label="序号" width="100"></el-table-column>
        <el-table-column label="分类名称"></el-table-column>
        <el-table-column label="分类别名"></el-table-column>
        <el-table-column label="操作">
          <el-button type="primary" size="mini">修改</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getArtCateListAPI } from '@/api'
export default {
  name: 'ArtCate',
  data () {
    return {
      // 文章的分类列表
      cateList: []
    }
  },
  created () {
    // 获取文章分类
    this.initCateListFn()
  },
  methods: {
    // 获取文章分类
    async initCateListFn () {
      const res = await getArtCateListAPI()
      this.cateList = res.data.data
    }
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
