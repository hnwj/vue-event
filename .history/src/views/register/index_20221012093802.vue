<template>
  <!-- 注册的大盒子 -->
  <div class="reg-box">
    <!-- 注册内的表单盒子 -->
    <div class="form-box">
      <!-- 标题 -->
      <div class="form-title"></div>
      <!-- 注册的表单内容 -->
      <el-form ref="form" :model="regForm">
        <el-form-item>
          <el-input v-model="regForm.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="regForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="regForm.repassword"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" class="btn-reg">注册</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 注册的内容
      regForm: {
        username: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('')
    }
  }
}
</script>

<style lang="less" scoped>
.reg-box {
  background: url('@/assets/images/login_bg.jpg') center;
  background-size: cover;
  height: 1000px;

  .form-box {
    width: 400px;
    height: 335px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
    box-sizing: border-box;

    .form-title {
      height: 60px;
      background: url('@/assets/images/login_title.png') center no-repeat;
    }

    .btn-reg {
      width:100%;
    }
  }
}
</style>
