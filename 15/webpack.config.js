const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CommonsChunkPlugin } = webpack.optimize

module.exports = {
  target: 'web',
  entry: {
    index: [resolve(__dirname, './index.js')],
    home: [resolve(__dirname, './home.js')],
  },
  output: {
    path: resolve(__dirname, './dist'),
    // 注意：不要在开发环境使用 [chunkhash]/[hash]/[contenthash]，因为不需要在开发环境做持久缓存，而且这样会增加编译时间，开发环境使用 [name]
    filename: '[name].js',
    // filename: '[name].[chunkhash].js',
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
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['index', 'home'],
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      },
    }),
    new CommonsChunkPlugin({
      name: 'common',
      chunks: ['index', 'home'],
      minChunks: function (module, count) {
        // console.log(module.context, ' - count: ', count)

        return ['index', 'home'].length === count && module.context && module.context.indexOf('node_modules') === -1
      },
    }),
    new CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['index', 'home'],
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './index.html'),
      inject: 'body',
      chunks: ['manifest', 'vendor', 'common', 'index'],
      chunksSortMode: function (chunk1, chunk2) {
        const chunks = ['manifest', 'vendor', 'common', 'index']

        return chunks.indexOf(chunk1.names[0]) - chunks.indexOf(chunk2.names[0])
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: resolve(__dirname, './home.html'),
      inject: 'body',
      chunks: ['manifest', 'vendor', 'common', 'home'],
      chunksSortMode: function (chunk1, chunk2) {
        const chunks = ['manifest', 'vendor', 'common', 'home']

        return chunks.indexOf(chunk1.names[0]) - chunks.indexOf(chunk2.names[0])
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'html.html',
      template: resolve(__dirname, './html.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: false,
      chunks: [],
    }),
  ],
}
