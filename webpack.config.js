const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssNormalize()
              ]
            }
          }
        ]
      },
      {
        test: /\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]' // <-- retain original file name
            }
          }
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
      filename: __dirname + '/index.html',
      title: 'Jerad Gallinger | Software Developer',
      currentYear: (new Date()).getFullYear(),
      description: 'Jerad Gallinger is a software developer from Toronto, Canada. He likes API development (Ruby on Rails, Node.js), modern JavaScript frameworks (Ember.js, Angular, Vue.js), TDD, Agile, and making happy users. This is his website.',
      typekitId: 'iub1hrx',
      gaId: 'UA-28558937-1'
    })
  ]
};
