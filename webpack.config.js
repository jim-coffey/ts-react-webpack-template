var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  module: {
    rules: [
      { test: /\.(ts)x$/, use: 'ts-loader', exclude: /node_modules/ },
      { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
      { test: /\.css$/,  use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  );
}

module.exports = config;
