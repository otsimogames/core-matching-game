const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const sourcePath = path.resolve(__dirname, 'src');
var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
  entry: [
    'babel-polyfill',
    'pixi', 'p2', 'phaser', 'webfontloader',
    path.resolve(__dirname, 'src/js/game.js'),
  ],
  output: {
    pathinfo: true,
    publicPath: '',
    path: path.join(__dirname, 'dist'),
    filename: '[chunkhash].js'
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
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([
      {
        context: sourcePath,
        from: '**/*.{woff,json,svg,mp4,mp3,png,wav}'
      }
    ])
  ]
};