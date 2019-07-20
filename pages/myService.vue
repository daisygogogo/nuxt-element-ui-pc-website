<template>
  <div class="wrapper">
    我的客服
    {{data}}
  </div>
</template>

<script>


export default {
  data(){
    return{  
    }
  },
  async asyncData({app }){
    let {data} = await app.$axios.get('/api/book/1003078').then(res=>{
      return res;
    }); //正确url为'/book/1003078'

    return{data:data}
    
  },
  components: {
    
  },
  methods:{
    
  }
}
</script>

<style>
  .wrapper{
    font-size:20px;
    text-align: center;
    font-weight: bold;
    padding-top:50px;
  }
</style>
