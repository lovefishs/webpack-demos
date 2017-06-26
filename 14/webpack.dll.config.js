const { resolve } = require('path')
const webpack = require('webpack')
const { DllPlugin } = webpack

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'prop-types'],
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].dll.js',
    // 关于 Library 请查看 https://doc.webpack-china.org/guides/author-libraries/
    library: '[name]Dll', // 通过 window.vendorDll 来引用
  },
  plugins: [
    new DllPlugin({
      context: resolve(__dirname, './dist'),
      path: resolve(__dirname, './dist', '[name]-manifest.json'), // 定义 manifest 文件生成的位置
      name: '[name]Dll', // dll bundle 输出到那个全局变量上(和 output.library 保持一致)
    }),
  ],
}
