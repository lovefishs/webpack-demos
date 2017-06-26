const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './main.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // Externals(外部扩展)提供了「从输出的 bundle 中排除依赖」的方法
  // 此功能通常对 library 开发人员来说是最有用的
  externals: {
    jquery: 'jQuery',
    // 描述 loadsh 依赖可用的访问方式
    // lodash : {
    //   commonjs: 'lodash', // AMD
    //   amd: 'lodash', // CommonJS
    //   root: '_', // 全局变量形式
    // },
  },
}
