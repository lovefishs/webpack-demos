const { resolve } = require('path')
const { DefinePlugin } = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV } = process.env
const env = NODE_ENV || 'development'

// Create multiple instances
const extractCSS = new ExtractTextPlugin('styles.css')
const devDefinePlugin = new DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(env === 'development' || 'false')),
})

module.exports = {
  target: 'web',
  entry: resolve(__dirname, './index.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
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
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: resolve(__dirname, './postcss.config.js'),
                },
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    devDefinePlugin,
    extractCSS,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: 'body', // true | 'head' | 'body' | false
      // chunks: [],
    }),
  ],
}
