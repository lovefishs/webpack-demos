const { resolve } = require('path')

/*
https://github.com/postcss/postcss-loader
After setting up your postcss.config.js, add postcss-loader to your webpack.config.js. You can use it standalone or in conjunction with css-loader (recommended). Use it after css-loader and style-loader, but before other preprocessor loaders like e.g sass|less|stylus-loader, if you use any.
推荐与 css-loader 一起使用，且必须在 css-loader, style-loader 之后以及其他预处理器(sass-loader, less-loader, stylus-loader)之前
 */

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
        use: [
          { loader: 'style-loader' },
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
      },
      {
        test: /\.module\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'style-loader' },
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
      },
    ],
  },
}
