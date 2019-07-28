const path = require("path"),
  VueLoaderPlugin = require("vue-loader/lib/plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpack = require("webpack")

const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const config = {
  entry: "./src/index.js", 
  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: '[name].[hash].js'
  }, 
  module: {
    rules: [
      {
        loader: "vue-loader", 
        test: /\.vue$/,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader" 
        ]
    }]
  }, 
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  },
  mode: "development"
}

module.exports = config