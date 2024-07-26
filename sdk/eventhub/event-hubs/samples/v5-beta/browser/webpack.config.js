const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      process: "process",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      buffer: require.resolve("buffer/"),
      os: require.resolve("os-browserify"),
      path: require.resolve("path-browserify"),
    },
  },
};
