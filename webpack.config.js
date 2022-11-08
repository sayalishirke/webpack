const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {

  //default production
  mode: "development",

  //entry point indicates which module webpack should use to begin building out its internal dependency graph
  entry: "/src/index.js", 

  //output property tells webpack where to emit the bundles it creates
  output: {
    path: path.resolve(__dirname, "dist"), 
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true
  },

  //webpack only understands JavaScript and JSON files.
  //Loaders allow webpack to process other types of files and convert them into valid modules
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader?name=./images/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public/index.html'),
      filename: "index.html",
    }),
  ],
};
