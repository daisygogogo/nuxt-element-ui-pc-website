<template>
  <div class="wrapper">
    我是商家详情：{{id}}
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  asyncData({params}) {
    let id = params.id;
    return {id:id}; 
  },

  methods: {
  }
};
</script>

<style scoped lang="scss">
  .wrapper{
    font-size:20px;
    text-align: center;
    font-weight: bold;
    padding-top:50px;
  }

</style>
