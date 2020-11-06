const path = require('path');

module.exports = {
  name: 'Server',
  target: 'async-node',
  stats: 'none',
  optimization: {
    'nodeEnv': false,
    'noEmitOnErrors': false,
    'minimize': false,
  },
  mode: 'development',
  output: {
    publicPath: '/static/',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    'extensions': [
      '.js',
      '.json'
    ],
  },
  entry: './index.js',
  devServer: {
    hot: false,
    contentBase: false,
    noInfo: false,
    overlay: true,
    stats: 'errors-only',
    port: '8081',
    publicPath: '/static/',
    historyApiFallback: false,
    proxy: {
      '**': {
        target: true,
        router: () => 'http://127.0.0.1:8080',
      }
    },
  },
}
