<template>
  <div>
  	<el-menu :default-active="$route.path" :router="true" class="el-menu-demo" mode="horizontal" 
  	background-color="#545c64"
  	text-color="#fff"
  	active-text-color="#ffd04b"
  	>
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/userCenter">我的订单</el-menu-item>
  <el-menu-item index="/joinUs">加盟合作</el-menu-item>
  <el-menu-item index="/myservice">我的客服</el-menu-item>
</el-menu>
<!-- <div class="line"></div> -->
    <nuxt />
  </div>
</template>
<script>
	export default {
  data() {
  	return{
  		activeIndex: '1'
  	}
  },
  methods: {
    handleSelect(key, keyPath) {
        switch(key){
        	case '1':
	        	this.$router.push({ path: '/'})
	        	break;
	        case '2':
	        	this.$router.push({ path: '/userCenter'})
	        	break;
	        case '3':
	        	this.$router.push({ path: '/joinUs'})
	        	break;
	        case '4':
	        	this.$router.push({ path: '/myservice'})
	        	break;
          case '5':
            this.$router.push({ path: '/myservice'})
            break;
        }
      }

  }
}
</script>
<style>
.logout{
  float:right;
}

</style>
