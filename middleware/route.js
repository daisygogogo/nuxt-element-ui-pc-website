
// 中间件，在需要鉴权的页面添加middleware: 'route'即可
export default function ({ store, redirect,route }) {
    if (!store.state.userInfo) { //如果没有用户信息则重定向到这个页面，把当前目标路由作为参数传递过去
      return redirect(`/login?redirectUrl=${route.path}`)
    }
  }