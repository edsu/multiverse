const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      './site/index.html', 
      {
        from: './site/images/*.png', 
        to: 'images/[name].[ext]',
        toType: 'template'
      }
    ])
  ]
})
