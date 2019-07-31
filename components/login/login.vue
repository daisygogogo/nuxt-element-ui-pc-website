<template>
  <el-dialog
  class="login-wrapper"
  title="登录注册"
  :visible.sync="dialogVisible"
  :before-close="handleClose"
  width="30%">
 
<!--  内置表单 -->
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
  <el-form-item label="手机号码" prop="tel" >
    <el-input v-model="ruleForm.tel" placeholder="请输入您的手机号码"></el-input>
  </el-form-item>
   

  	<el-row>
    <el-col :span="16">
      <el-form-item label="验证码" prop="verifyCode">
    <el-input v-model="ruleForm.verifyCode"  placeholder="请输入验证码"></el-input>
  </el-form-item>
    </el-col>
    <el-col :span="1">
    	<div class="gap"></div>
    </el-col>
    <el-col :span="7" class="send-code">
     	发送验证码
    </el-col>
    </el-row>

  <el-form-item>
    <el-button type="primary" class="login-btn" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
</el-form>



<!-- 内层dialog -->
    <el-dialog
      width="30%"
      title="内层 Dialog"
      :visible.sync="innerVisible"
      append-to-body>
    </el-dialog>
</el-dialog>

</template>

 <script>
    export default {
    	data(){
    		return{
    			innerVisible:false,
    			ruleForm: {
		          tel: '',
		          verifyCode: ''
		        },
		        rules: {
		          tel: [
		   
		            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
		          ],
		          verifyCode: [
		   
		            { min: 6, max: 6, message: '请输入正确的验证码', trigger: 'blur' }
		          ]
		        }
    		}
    	},
    	  props:{
		    dialogVisible:{
		      type:Boolean,
		      default:false
		    }
  },
   methods: {
      cancel(){
      	// this.dialogVisible = false;
      	this.$emit('closeLogin')
      },
      show(){
      	// this.dialogVisible = false;
      	this.$emit('closeLogin')
      },
      handleClose(done) {
        this.$emit('closeLogin')
      },
      submitForm(){
        
      }
    
    }
  }
</script>

 <style scoped lang="scss">
.login-wrapper{
	min-width:358px;
}
.login-btn{
	width:100%;
}
.gap{
	height:40px;
}
.send-code{
	background-color: #333333;
	text-align: center;
	height:40px;
	line-height: 40px;
	color:#fff;
}
.login-wrapper /deep/ .el-input__inner{
	border-radius: 0px;
}
</style>