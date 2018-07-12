const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  // entry: the main src index and for files you need to bring in that are outside of the required modules add as another entry point
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  // how exported js modules should be transformed
  module: {
    // loaders
    rules: [
      //eslint, should come before babel but enforce: pre also forces this
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      // babel
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      }
    ]
  },
  // import modules without needing to add their extensions
  resolve: { extensions: ['*', '.js', '.jsx'] },
}