const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/client.js',
  mode: 'production',
  output: {
    path: __dirname + './../dist',
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'env'],
          plugins: ['react-hot-loader/babel', 'babel-plugin-transform-object-rest-spread', 'transform-class-properties', 'transform-decorators-legacy']
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: [
          //       autoprefixer({
          //         browsers:['ie >= 8', 'last 4 version']
          //       })
          //     ]
          //   }
          // },
          "css-loader",
          "sass-loader"
        ]
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader']
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: "client.css",
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
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
  }
};
