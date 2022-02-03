/*eslint-env node */
'use strict'
const path = require('path')
const webpack = require('webpack')
const PATHS = {
  index: path.join(__dirname, './public/assets/_js/')
}

module.exports = {
  entry: {
    index: './public/assets/_js/index.js'
  },
  resolve: {
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
    },
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    filename: './public/assets/js/[name].js'
  }
}
