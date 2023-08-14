const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist_hidden-source-map'),
  },
  /**
   
   */
  devtool: 'hidden-source-map',
  mode: 'development',
}
