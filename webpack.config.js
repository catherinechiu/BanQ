const path = require('path');

module.exports = {
  // entry: './client/views/index.pug',
  entry: './client/index.jsx',
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
      },
      {
        // test: /\.(js|jsx)$/,
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  }
}