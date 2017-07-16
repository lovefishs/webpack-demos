const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = webpack

const publicPath = ''

module.exports = {
  target: 'web',
  entry: {
    index: ['react-hot-loader/patch', resolve(__dirname, './src/index.jsx')],
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js',
    publicPath: publicPath,
  },
  resolve: {
    modules: [resolve(__dirname, './src'), 'node_modules'],
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
              presets: [['env', { modules: false }], 'react'],
              plugins: ['react-hot-loader/babel', 'transform-runtime', 'syntax-dynamic-import', 'transform-class-properties'],
            },
          },
        ],
      },
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
      template: resolve(__dirname, './src/index.html'),
      inject: 'body',
      chunks: ['index'],
    }),
  ],
  devServer: {
    inline: true,
    hot: true,
    contentBase: resolve(__dirname, './dist'),
    publicPath: publicPath,
    compress: true,
    port: 8080,
    clientLogLevel: 'none',
    noInfo: false,
    stats: 'minimal',
    overlay: true,
    host: '0.0.0.0',
    headers: {
      'X-Custom-Foo': 'bar',
    },
  },
}
