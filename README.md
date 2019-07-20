# official-website

>  nuxt的demo，在项目脚手架初始化成功之后，自己添加了一些配置。
* element-ui引入
* axios.js 插件引入（初始化项目的时候也可以选择），根据当前环境，配置是否需要代码
* scss使用
* middleware中间件鉴权，尝试过在nuxt项目中使用路由守卫，但是不成功，需要使用自带的middleware中间件
* 详情页面展示，nuxt的动态路由页面，跟普通vue页面有点不一样，需要新建文件夹包裹，详见pages下的shopDetail页面
* error错误页面自定义，打印错误信息到页面上，使得开发过程中调试更加方便




## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
