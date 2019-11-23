const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const webpack = require('webpack');

const path = require('path');
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  entry: {
    app: ['regenerator-runtime/runtime', './index.js'],
    appStyles: ['./mystyles.scss'],
  },
  output: {
    filename: './js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5000,
            name: './img/[hash].[name].[ext]',
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    port: 8080,
  },
};
