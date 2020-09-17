const path = require('path');
const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
  },
};
