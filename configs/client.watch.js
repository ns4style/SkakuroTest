const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env =>({
  mode: 'development',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/client.js',
  ],
  output: {
    path: __dirname + './../dist',
    publicPath: env && env.context == 'ssr' ? 'http://localhost:8080/dist/' : '',
    filename: 'client.js',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
          plugins: ['react-hot-loader/babel', 'babel-plugin-transform-object-rest-spread', 'transform-class-properties', 'transform-decorators-legacy']
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: [
          //       autoprefixer({browsers:['ie >= 8', 'last 4 version']})
          //     ],
          //     sourceMap: true
          //   }
          // },
          "sass-loader"
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',

        }]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [{
          loader: 'file-loader',
        }]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "api": path.resolve(__dirname, '../src/api'),
      "components": path.resolve(__dirname, '../src/components/'),
      "pages": path.resolve(__dirname, '../src/pages/'),
      "utils": path.resolve(__dirname, '../src/utils/index'),
      "app-store": path.resolve(__dirname, '../src/app-store'),
      "resources": path.resolve(__dirname, '../src/resources'),
      "scss": path.resolve(__dirname, '../src/styles/scss'),
      "fonts": path.resolve(__dirname, '../src/fonts'),
      "containers" : path.resolve(__dirname, '../src/containers'),
      "configs" : path.resolve(__dirname, '../src/configs'),
      "services" : path.resolve(__dirname, '../src/services'),
      "libs" : path.resolve(__dirname, '../src/libs')
    },
  },
  devServer: {
    contentBase: './src',
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      "renderType": env && env.context == 'ssr' ? JSON.stringify('ssr'): JSON.stringify('client'),
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
