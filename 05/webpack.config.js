const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './main.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'assets/imgs/[name].[ext]',
            },
          }
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'assets/fonts/[name].[ext]',
            },
          }
        ],
      },
    ],
  },
}
