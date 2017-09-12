/*eslint-disable no-undef*/
module.exports = [
  {
    test: /\.js?$/,
    exclude: /(node_modules\/)/,
    loader: 'babel-loader'
  },
  {
    test: /pixi\.js/,
    loader: 'expose-loader?PIXI'
  },
  {
    test: /phaser-split\.js$/,
    loader: 'expose-loader?Phaser'
  },
  {
    test: /p2\.js/,
    loader: 'expose-loader?p2'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules)/,
    loader: 'file'
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules)/,
    loader: 'url?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules)/,
    loader: 'url?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules)/,
    loader: 'url?limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.gif/,
    exclude: /(node_modules)/,
    loader: 'url-loader?limit=10000&mimetype=image/gif'
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules)/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg'
  },
  {
    test: /\.png/,
    exclude: /(node_modules)/,
    loader: 'url-loader?limit=10000&mimetype=image/png'
  }
];