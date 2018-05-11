const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const fork = require('./package.json')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: `fork.${fork.version}.js`,
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: {
          loader: "babel-loader",
          query: {
            presets: ['es2015', 'stage-0']
          }
        },
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};
