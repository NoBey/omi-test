const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'build'),
       filename: 'bundler.js'
  },
  externals: {
    // 'React': 'react'
  },
  module: {
    rules: [{
          test: /\.js(.*)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ['es2015'],
            plugins: [
                'transform-es3-property-literals',
                'transform-es3-member-expression-literals'
            ]
          }
        }]
  }
}
