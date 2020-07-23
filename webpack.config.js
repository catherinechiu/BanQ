const path = require('path');

module.exports = {
  // entry: './client/views/index.pug',
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/' // for no 404 error with react router
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
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  devServer: {
    publicPath: "http://localhost:8080/build/",
    proxy: {
      '/': 'http://localhost:3000'
    },
    // enables hot module reloading
    watchContentBase: true,
    historyApiFallback: true, // for no 404 error with react router
  },
}