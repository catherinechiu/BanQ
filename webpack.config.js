const path = require('path');

module.exports = {
  // entry: './client/views/index.pug',
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
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
  },
  devServer: {
    publicPath: "http://localhost:8080/build/",
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}