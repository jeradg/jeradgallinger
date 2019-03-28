const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: __dirname + '/docs'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Jerad Gallinger | Software Developer',
      description: 'Jerad Gallinger is a web developer from Toronto, Canada. He likes Ruby, JavaScript, Rails, Node.js, Angular, Ember.js, Vue.js, and more. This is his website.',
      typekitId: 'bfa5wua',
      gaId: 'UA-28558937-1'
    })
  ]
};
