const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.conf')

module.exports = merge(base, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // 使用 style-loader可以使用多个 标签将 CSS 插入到 DOM 中，并且反应会更快
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
        exclude: '/node_modules/',
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  devServer: {
    open: true,
    port: 8081,
    // 热更新
    hot: true,
    // 启动时打开浏览器
    open: true,
  },
})
