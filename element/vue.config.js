const BASE_URL = process.env.NODE_ENV === 'production' ? '/pc/' : '/'

module.exports = {
    // 项目部署基础
    // 默认情况下，我们假设你的应用将被部署在域的根目录下,
    // 例如：https://www.my-app.com/
    // 默认：'/'
    // 如果您的应用程序部署在子路径中，则需要在这指定子路径
    // 例如：https://www.foobar.com/my-app/
    // 需要将它改为'/my-app/'
    publicPath: BASE_URL,
    // 如果不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: false,
    // 将构建好的文件输出到哪里
    outputDir: 'dist',
    // 放置静态资源的地方 (js/css/img/font/...)
    assetsDir: 'static',

    chainWebpack: () => { },
    // 打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        // proxy: 'localhost:3000'
        disableHostCheck: true
    }
}