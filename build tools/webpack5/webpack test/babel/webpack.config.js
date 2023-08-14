const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: [
        //       [
        //         '@babel/preset-env',
        //       ]
        //     ]
        //   }
        // },
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'hidden-source-map',
  mode: 'development',
}
