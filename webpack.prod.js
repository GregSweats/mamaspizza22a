const {merge} = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const common = require("./webpack.common");

module.exports = merge(common, {

  // https://webpack.js.org/configuration/mode/
  // "production" mode is breaking CSS as of 2022-08-10
  // todo: Find out what CSS is breaking and why.
  // For now, stopgap, skip default prod optimizations
  // mode: "production",
  mode: "none",


  output: {
    filename: "[name].[hash:5].js",
    chunkFilename: "[id].[hash:5].css",
    path: path.resolve(__dirname, "dist")
  },

  optimization: {
    minimize: false,


    // ,
    // minimizer: [
    //   new TerserPlugin({
    //     terserOptions: {
    //       sourceMap: true,
    //     },
    //     exclude: /\/node_modules\//,
    //   }),
  },

  /*
  */
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "dist/**/*.js",
        "dist/**/*.css",
        "site/data/webpack.json"
      ]
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[hash:5].css",
      chunkFilename: "[id].[hash:5].css"
    })
  ]
});
