<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <span>文章分类</span>
        <el-button type="primary" size="mini" @click="addVisible = true">添加分类</el-button>
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

    <!-- 添加分类的对话框 -->
<el-dialog title="添加文章分类" :visible.sync="addVisible" width="35%">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <el-button size="mini" @cancelFn>取 消</el-button>
        <el-button size="mini" type="primary" @click="addFn">添 加</el-button>
    </span>
</el-dialog>
  </div>
</template>

<script>
import { getArtCateListAPI } from '@/api'
export default {
  name: 'ArtCate',
  data () {
    return {
      // 文章的分类列表
      cateList: [],
      //  添加分类-对话框是否显示
      addVisible: false
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
      console.log('this.cateList', this.cateList)
    },
    // 添加分类
    addFn () {
      this.addVisible = false
    },
    // 对话框内-取消按钮-点击事件
    cancelFn () {
      this.addVisible = false
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
