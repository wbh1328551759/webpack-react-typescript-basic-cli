/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMiniWebpackPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const rootDir = process.cwd()
const WebpackBar = require('webpackbar')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    chunkFilename: '[name].[chunkhash:8].js',
    path: path.resolve(rootDir, 'dist'),
    filename: 'bundle.[contenthash:8].js',
    publicPath: '',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'thread-loader',
            options: {},
          },
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'thread-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
      minify: {
        //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //删除空白符与换行符
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '*.js',
          context: path.resolve(rootDir, 'public/js'),
          to: path.resolve(rootDir, 'dist/js'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CssMiniWebpackPlugin(),
    new webpack.optimize.SplitChunksPlugin(),
    new WebpackBar(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
