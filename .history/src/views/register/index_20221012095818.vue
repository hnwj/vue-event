<template>
  <!-- 注册的大盒子 -->
  <div class="reg-box">
    <!-- 注册内的表单盒子 -->
    <div class="form-box">
      <!-- 标题 -->
      <div class="form-title"></div>
      <!-- 注册的表单内容 -->
      <el-form ref="regRef" :model="regForm" :rules="regRules" >
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="regForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" v-model="regForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input placeholder="请输入确认密码" v-model="regForm.repassword"></el-input>
        </el-form-item>
        <el-button type="primary" @click="regNewUserFn" class="btn-reg">注册</el-button>
        <el-link type="primary" @click="$router.push('/login')">去登录</el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerAPI } from '@/api'
export default {
  data () {
    const samePwd = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        // 如果验证失败，则调用 回调函数时，指定一个 Error 对象。
        callback(new Error('两次输入的密码不一致!'))
      } else {
        // 如果验证成功，则直接调用 callback 回调函数即可。
        callback()
      }
    }
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
          {
            pattern: /^[a-zA-Z0-9]{1,10}$/,
            message: '用户名必须是1-10的大小写字母数字',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur'
          }
        ],
        repassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' },
          { validator: samePwd, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 注册新用户
    regNewUserFn () {
      // 对表单进行验证
      this.$refs.regRef.validate(async valid => {
        if (!valid) return false
        // 验证已通过，调用接口
        const { data: res } = await registerAPI(this.regForm)
        console.log(res)
        // 注册成功
        this.$message.success()
        console.log(this.regForm)
      })
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
