const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      filename: "index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          {
            loader: "csv-loader",
            options: {
              dynamicTyping: true,
              header: true,
              skipEmptyLines: true
            }
          }
        ]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    port: 8888,
    open: true,
    hot: true
  }
};
