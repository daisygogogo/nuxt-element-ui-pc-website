// 通过getters 获取 vuex数据在项目中就可以不需要 `this.$store.state.singer` 这样使用了

export const userInfo = state => state.userInfo

export const token = state => state.token
