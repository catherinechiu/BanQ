const path = require('path');

module.exports = {
  entry: './client/views/index.pug',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.pug?/,
        exclude: /node_modules/,
        use: {
          loader: 'pug-loader',
        }
      }
    ]
  }
}