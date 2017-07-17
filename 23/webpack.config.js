const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// tree-shaking 是指借助 es6 import export 语法静态性的特点来删掉 export 但是没有 import 过的代码。
// 配置 babel 时需要它不把 import export 转换为 cmd 的 module.export：{ modules: false }
//
// 有部分库开始支持 tree-shaking，比如 redux 的 package.json 有 3 个配置
// "main": "lib/index.js",
// "module": "es/index.js",
// "jsnext:main": "es/index.js",
//
// 需要配置 webpack 的 resolve.mainFields 字段 ['jsnext:main', 'module', 'main']，这会让 webpack 优先使用 jsnext:main 字段，没有时再使用 main 字段。
// 这样可以优化支持 tree-shaking 的库
//
// 只有在 --optimize-minimize 阶段 webpack 才会删除未使用到的代码，开发阶段会打包进去，但是不会 export
// npm run demo-23
// npm run demo-23-2
//

const publicPath = ''

module.exports = {
  target: 'web',
  entry: {
    index: [resolve(__dirname, './src/index.js')],
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js',
    publicPath: publicPath,
  },
  resolve: {
    modules: [resolve(__dirname, './src'), resolve(__dirname, '../node_modules')],
    mainFields: ['jsnext:main', 'module', 'main'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: resolve(__dirname, './src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }], 'react'],
              plugins: ['transform-runtime', 'syntax-dynamic-import', 'transform-class-properties'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './src/index.html'),
      inject: 'body',
      chunks: ['index'],
    }),
  ],
}
