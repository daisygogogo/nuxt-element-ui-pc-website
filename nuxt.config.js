
export default {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost,0.0.0.0，so that it can also visit by ip
  },
  env: { //环境变量
    __ENV: process.env.__ENV
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/css/index.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/element-ui', "@/plugins/axios"],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.__ENV == 'dev' ? '/proxy/' : process.env.__ENV == 'testing' ? 'https://xxx.org/v2/' : 'http://xxx.org/api',
    proxy: true,
    credentials: true
  },
  proxy: { //请求代理，由于上面axios里的prefix做了判断，只有dev环境，会做代理
    '/proxy/': { target: 'https://douban.uieee.com/v2/', pathRewrite: { '^/proxy/': '' } }
  },
  // router: {  //即每次路由跳转会调用该中间件,Every time before go to other page,it would call the route function to check. 
  //   middleware: ['route'] 
  // },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    vendor: ['axios', 'element-ui'], // 为防止重复打包
    // 按需引入element-ui
    babel: {
      plugins: [
        ["component", { "libraryName": "element-ui", "styleLibraryName": "theme-chalk" }]
      ]
    },
  }
}
