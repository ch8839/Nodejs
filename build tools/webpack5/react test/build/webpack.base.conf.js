const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (_path) => {
  path.resolve(__dirname, _path)
}

module.exports = {
  entry: resolve('../src/index.tsx'),
  output: {
    path: resolve('../dist'),
    /**
    当浏览器请求一个文件时，它会根据文件的 URL 进行缓存。如果文件名没有发生变化，浏览器会直接使用缓存的文件，而不会重新请求服务器。
    这在某些情况下可能会导致问题，例如当你更新了你的代码并重新部署时，浏览器仍然使用旧的缓存文件，而不会加载新的文件
     */
    filename: '[name].[contenthash:8].js',
    clean: true, // 在生成文件之前清空 output 目录
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)|(tsx?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                // {
                //   targets:
                //     'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead', // 根据项目去配置
                //   useBuiltIns: 'usage', // 会根据配置的目标环境找出需要的polyfill进行部分引入
                //   corejs: 3, // 使用 core-js@3 版本
                // },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },

      // 对图片的处理
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          filename: 'assets/imgs/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          filename: 'assets/fonts/[name].[hash:8][ext]',
        },
      },
    ],
  },
  plugins: [
    // const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    // new CleanWebpackPlugin(), // 打包编译前清理 dist 目录

    new HtmlWebpackPlugin({
      title: 'react app test',
      template: path.resolve(__dirname, '../public/index.html'),
      templateParameters: {
        PUBLIC_URL: '',
      },
      jsCDN:[
        'https://cdn.bootcdn.net/ajax/libs/vue/2.6.14/vue.min.js'
      ]
    }),
  ],
}
