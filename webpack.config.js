/*eslint-env node */
'use strict';
const path = require('path');
const webpack = require('webpack');

// Define paths
const PATHS = {
  index: path.join(__dirname, './public/assets/_js/'),
  public: path.join(__dirname, 'public'),
  assets: path.join(__dirname, 'public/assets')
};

module.exports = {
  // Entry point
  entry: {
    index: './public/assets/_js/index.js'
  },

  // Resolve configuration
  resolve: {
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
    },
    extensions: ['', '.js', '.jsx']
  },

  // Output configuration
  output: {
    path: __dirname,
    filename: './public/assets/js/[name].js',
    publicPath: '/assets/'  // Serve assets from /assets/
  },

  // Development server configuration
  devServer: {
    static: {
      directory: PATHS.public,  // Serve files from public directory
      publicPath: '/',         // Serve at root URL
      watch: true             // Watch for file changes
    }
  },

  // Module configuration
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']  // Handle HTML files
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource'  // Handle images
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']  // Handle CSS
      }
    ]
  }
};