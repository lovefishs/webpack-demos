const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DllReferencePlugin } = webpack
// const { CommonsChunkPlugin } = webpack.optimize

module.exports = {
  target: 'web',
  entry: {
    index: [resolve(__dirname, './index.jsx')],
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
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
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new DllReferencePlugin({
      context: resolve(__dirname, './dist'), // 与 DllPlugin 的 context 保持一致
      manifest: require(resolve(__dirname, './dist', 'vendor-manifest.json')), // 与 DllPlugin 的 path 保持一致
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './index.html'),
      inject: 'body',
    }),
  ],
}
