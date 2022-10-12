<template>
  <!-- 注册的大盒子 -->
  <div class="reg-box">
    <!-- 注册内的表单盒子 -->
    <div class="form-box">
      <!-- 标题 -->
      <div class="form-title"></div>
      <!-- 注册的表单内容 -->
      <el-form ref="form" :model="regForm" :rules="regRules" >
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="regForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" v-model="regForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input placeholder="请输入确认密码" v-model="regForm.repassword"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" class="btn-reg">注册</el-button>
        <el-link type="primary" >去登录</el-link>
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
      },
      // 注册的规则
      regRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
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
