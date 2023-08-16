const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: "production",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    optimization: {
        minimize: true,
        nodeEnv: "production",
        minimizer: [new TerserPlugin({
            terserOptions: {
              compress: {
                // pure functions will be stripped from the build
                pure_funcs: [
                  'console.log',
                  'console.info',
                  'console.debug',
                  'console.warn',
                ],
              },
            },
          })],
    },
    devtool: false,
});
