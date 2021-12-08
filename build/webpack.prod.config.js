/** @format */

const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    }
  },
  plugins: [
    ...baseConfig.plugins,
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      minRatio: 0.8,
      deleteOriginalAssets: false
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
