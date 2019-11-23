const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack');

module.exports = {
  entry: {
    app: './index.js',
    appStyles: ['./mystyles.css'],
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
    }),
  ],
  devServer: {
    port: 8080,
  },
};
