const { resolve } = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

// bundle.js      1.22 MB
// bundle.js.gz   261 kB
//
// 使用 node node 25/server.js 启动服务，打开 http://127.0.0.1:3000/25/index.html 查看 bundle.js 请求

module.exports = {
  entry: resolve(__dirname, './main.jsx'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
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
              presets: [['env', { modules: false }], 'react'],
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(css|js|html)$/,
      threshold: 10 * 1024,
      minRatio: 0.8,
    }),
  ],
}
