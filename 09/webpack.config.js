const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Create multiple instances
const extractCSS = new ExtractTextPlugin('styles.css')
const extractModuleCSS = new ExtractTextPlugin('styles.module.css')

module.exports = {
  target: 'web',
  entry: resolve(__dirname, './main.jsx'),
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
        test: /^((?!module).)*\.css$/,
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
      {
        test: /\.module\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: extractModuleCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                importLoaders: 1,
              },
            },
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
    extractCSS,
    extractModuleCSS,
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
