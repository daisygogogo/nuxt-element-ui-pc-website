
// 中间件 middle/ route.js
export default function ({ store, error }) {
    if (!store.state.authUser) {
      error({
        message: 'You are not Login',
        statusCode: 401
      })
    }
  }