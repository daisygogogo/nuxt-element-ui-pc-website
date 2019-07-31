<template>
  <div class="wrapper">
    <div class="login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
        label-position="left"
      >
        <el-form-item label="手机号码" prop="tel">
          <el-input v-model="ruleForm.tel" placeholder="请输入您的手机号码" maxlength="11"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="16">
            <el-form-item label="验证码" prop="verifyCode">
              <el-input v-model="ruleForm.verifyCode" placeholder="请输入验证码" maxlength="4"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">
            <div class="gap"></div>
          </el-col>
          <el-col :span="7" class="send-code">
            <div @click="sendVerifyCode">{{verifyCodeText}}</div>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>

        <el-form-item>校验仅为demo所需，实际不会发验证码，请随机输入</el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { checkMobile } from '@/utils/index'
import {mapMutations} from 'vuex'
 const Cookie = process.client ? require('js-cookie') : undefined
export default {
  data() {
    var validateTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写手机号'))
      } else {
        if (!checkMobile(value)) {
          callback(new Error('请填写正确的手机号'))
        }
        callback()
      }
    }

    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写验证码'))
      } else {
        if (!/\d{4}$/.test(value)) {
          callback(new Error('请填写4位数的验证码'))
        }
        callback()
      }
    }

    return {
      innerVisible: false,
      ruleForm: {
        tel: '',
        verifyCode: ''
      },
      rules: {
        tel: [{ validator: validateTel, trigger: 'blur' }],
        verifyCode: [{ validator: validateCode, trigger: 'blur' }]
      },
      countDowning: false, //验证码倒计时
      verifyCodeText: '发送验证码'
    }
  },
  mounted(){
    let redirectUrl = this.$route.query.redirectUrl;
    if(redirectUrl){
      this.redirectUrl = redirectUrl;
    }
  },
  methods: {
    submitForm(formName) {
      let self = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          self.$message('登录成功');

          let userToken = '123'; //实际项目中，需自己获取token
          let userInfo = {tel:self.ruleForm.tel}
          self.setToken(userToken);
          Cookie.set('auth',userToken);
          self.setUserInfo(userInfo);
          Cookie.set('userInfo',userInfo);
          
          if(self.redirectUrl){
            console.log('self.redirectUrl',self.redirectUrl)
            self.$router.push(self.redirectUrl)
          }else{
            self.$router.push('/')
          }
          
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async sendVerifyCode() {
      let velidate
      await this.verifyTel().then(res => {
        //校验手机号
        velidate = res
      })
      if (!velidate) {
        return
      }

      if (this.countDowning) {
        //60秒倒数中，return
        return
      } else {
        //这里需要先请求后台，发送验证码，成功的回调才进行60秒倒计时，如果请求发送验证码失败，页面需展示提示语，比如请求过于频繁
        this.countDowning = true
        this.countDown(60)
      }
    },
    verifyTel() {
      return new Promise((resolve, reject) => {
        this.$refs.ruleForm.validateField('tel', errorMessage => {
          if (errorMessage != '') {
            resolve(false)
          } else {
            resolve(true)
          }
        })
      })
    },
    countDown(num) {
      clearInterval(this.timer)
      let self = this
      this.timer = setInterval(function() {
        if (num > 0) {
          num--
          self.verifyCodeText = `重新发送(${num})`
        } else {
          clearInterval(this.timer)
          self.countDowning = false
          self.verifyCodeText = '重新发送'
        }
      }, 1000)
    },
    ...mapMutations({
      setUserInfo:'SET_USERINFO'
    }),
    ...mapMutations({
      'setToken' : 'SET_TOKEN'
    }),
  }
}
</script>

 <style scoped lang="scss">
.wrapper {
  display: flex;
  width: 98vw;
  height: 98vh;
  overflow: hidden;
}
.login {
  width: 30%;
  margin: auto;
}
.login-btn {
  width: 100%;
}
.gap {
  height: 40px;
}
.send-code {
  background-color: #333333;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #fff;
}
.login-wrapper /deep/ .el-input__inner {
  border-radius: 0px;
}
</style>
