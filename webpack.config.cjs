const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".ts"],
    fallback: {
      fs: false,
      net: false,
      crypto: false,
      assert: false,
      stream: false,
      util: false,
      constants: false,
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  mode: process.env.NODE_ENV ?? "development",
};
