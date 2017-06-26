const { resolve } = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map', // cheap-eval-source-map(包含被 loader 转换过的代码) | cheap-module-eval-source-map(包含没有被 loader 转换过的源码，构建比 cheap-eval-source-map 慢一些，重构建速度一致)
  entry: resolve(__dirname, './main.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
}
