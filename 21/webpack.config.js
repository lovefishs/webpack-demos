const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = webpack

const publicPath = ''

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: resolve(__dirname, './main.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(), // Enable HMR
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './index.html'),
      inject: 'body',
    }),
  ],
  devServer: {
    inline: true, // 推荐使用 inline 模式(还有一个 iframe 模式)
    hot: true, // 启用 webpack 的 HMR 特性
    contentBase: resolve(__dirname, './dist'), // 告诉服务器从哪里提供内容(推荐绝对路径)
    publicPath: publicPath, // 默认是 '/' (我觉得与 output.publicPath 保持一致会是个好选择)
    compress: true, // 启用 gzip 压缩
    port: 8080,
    clientLogLevel: 'none', // info, none, error, warning
    noInfo: false, // 控制命令行 webpack bundle 输出
    stats: 'minimal', // 命令行只在发生错误 或是 新的编译时输出
    overlay: true, // 浏览器遮罩显示 error log
    host: '0.0.0.0', // 默认 'localhost'
    headers: {
      'X-Custom-Foo': 'bar',
    }, // 在所有响应中添加 header 内容
    // historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    // https: true,
    // proxy: {
    //   '/api': 'http://localhost:3000', // 请求到 /api/users 现在会被代理到请求 http://localhost:3000/api/users
    // },
  },
}
