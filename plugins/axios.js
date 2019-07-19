export default function ({app,error}) {
  let axios = app.$axios; 

 // 基本配置
  axios.defaults.timeout = 10000
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  axios.onRequest(config => {
    console.log('request',config)
  })

  // 返回回调
  axios.onResponse(res => {
  	console.log('请求成功回调res',res)
  })

  // 错误回调
  axios.onError(err => {
    error({statusCode:404,message:JSON.stringify(err.config)})
  	console.log('请求失败回调',JSON.stringify(err.config))
  })
}