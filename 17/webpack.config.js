const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 代码分离 - 异步
// https://doc.webpack-china.org/guides/code-splitting-async/

module.exports = {
  target: 'web',
  entry: {
    index: [resolve(__dirname, './index.js')],
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js', // 与 'magic comment' 下的 webpackChunkName 配置结合使用
    // chunkFilename: 'chunk.[name].[chunkhash].js',
  },
  resolve: {
    modules: [resolve(__dirname), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {modules: false}], 'react'],
              plugins: ['transform-runtime', 'syntax-dynamic-import', 'transform-class-properties'],
              // transform-runtime 会导致体积增大 70+KB (未压缩)
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './index.html'),
      inject: 'body',
      chunks: ['index'],
    }),
  ],
}
