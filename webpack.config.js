'use strict';

const webpack = require('webpack');
const path = require('path');

const config = {

  context: path.join(__dirname, 'components'),

  entry: [
    './index.js'
  ],

  output: {
    filename: 'components.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]

};

module.exports = config;
