const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/server.js',
  output: {
    path: __dirname + './../dist',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'env'],
          plugins: ['babel-plugin-transform-object-rest-spread']
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
      "actions": path.resolve(__dirname, '../src/actions'),
      "api": path.resolve(__dirname, '../src/api'),
      "components": path.resolve(__dirname, '../src/components/'),
      "pages": path.resolve(__dirname, '../src/pages/'),
      "utils": path.resolve(__dirname, '../src/utils/index'),
      "app-store": path.resolve(__dirname, '../src/app-store'),
      "resources": path.resolve(__dirname, '../src/resources')
    },
  }
};
