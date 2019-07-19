<template>
  <div class="container">
    <ul class="shops-wrapper">
      <li class="shop" v-for="item in shopList" :key="item.id" @click="routeToDetail(item.id)">
        <img :src="item.shopPic" width="100" hight="100">
        <h3>{{item.shopName}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      shopList:[
      {
        id:"1",
        shopName:'桂满陇·陇外(静安店)',
        shopPic:'https://fuss10.elemecdn.com/d/9f/3e50f8d35ba2e5f7e613029947843jpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85'
      },
      {
        id:"2",
        shopName:'大富贵酒楼（肇嘉浜路店）',
        shopPic:'https://fuss10.elemecdn.com/1/a4/9950924ac52cb89e9d7eeb932293bpng.png?imageMogr2/thumbnail/70x70/format/webp/quality/85'
      },
      {
        id:"3",
        shopName:'湊湊火锅.茶憩（静安晶品店）',
        shopPic:'https://fuss10.elemecdn.com/b/81/f2c25ca4220a3b9d24006673e8b97png.png?imageMogr2/thumbnail/70x70/format/webp/quality/85'
      },
      {
        id:"4",
        shopName:'福荣祥烧腊(乌鲁木齐路)',
        shopPic:'https://fuss10.elemecdn.com/4/fb/ecf81c30b9c82644d4d66c122e83cpng.png?imageMogr2/thumbnail/70x70/format/webp/quality/85'
      },
      {
        id:"5",
        shopName:'南星汇海南鸡饭.鸡粥(肇嘉浜路店)',
        shopPic:'https://fuss10.elemecdn.com/4/8a/a237a80ad5e6e1362a6f7b06be51fjpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85'
      }
      ]
    }
  },
  components: {
    
  },
  methods: {
    routeToDetail(id){ //跳转到订单详情
      this.$router.push(`/shopDetail/${id}`)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.shops-wrapper{
  
}
.shop{
    display:inline-block;
    margin-right:20px;
    padding:20px;
    border:1px solid;
  }
</style>
