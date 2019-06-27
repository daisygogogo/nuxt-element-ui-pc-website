<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">哦噢，页面不存在404</h1>
    <h1 v-else>应用发生错误异常</h1>
    <p>{{error}}</p>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>