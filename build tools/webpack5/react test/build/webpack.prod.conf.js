const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const base = require('./webpack.base.conf')

module.exports = merge(base, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // 不要同时使用 style-loader 与 mini-css-extract-plugin
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    // 将 CSS 从 bundle 中分离出来，这样可以使用 CSS/JS 文件的并行加载 (https://webpack.docschina.org/plugins/mini-css-extract-plugin/)
    new MiniCssExtractPlugin({
      filename: 'assets/css/[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: false,

    minimizer: [
      // `...`, // For webpack@5 you can use the `...` syntax to extend existing minimizers
      new CssMinimizerPlugin(),
    ],
  },
})
