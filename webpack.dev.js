const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './site/index.html',
      inlineSource: '.(js|css)$'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
