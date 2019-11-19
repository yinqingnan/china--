'use strict'

module.exports = {

  publicPath: "/",
  outputDir: 'dist',
  lintOnSave: false,//关闭eslint效验报错
  runtimeCompiler: true, //关键点在这  
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
  // 配置 webpack-dev-server 。
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    // before: app => {},

     // Paths
    //  assetsSubDirectory: 'static',
    //  assetsPublicPath: '/',
    //  proxyTable: {},
  },

}
