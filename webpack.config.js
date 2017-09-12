const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.resolve(__dirname, 'src');
var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3001';


module.exports = {
  entry: [
    'babel-polyfill',
    'pixi', 'p2', 'phaser', 'webfontloader',
    path.resolve(__dirname, 'src/js/game.js'),
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    pathinfo: true,
    publicPath: '',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: './src/assets',
    // do not print bundle build stats
    noInfo: true,
    // enable HMR - hot module reload
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([
      {
        context: sourcePath,
        from: '**/*.{woff,json,svg,mp4,mp3,png,wav}'
      }
    ])
  ]
};