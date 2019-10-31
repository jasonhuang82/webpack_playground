const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const getCurrentPath = (_path = '') => path.resolve(__dirname, _path);
const prodConfig = merge(commonConfig, {
    output: {
        path: getCurrentPath('../build'),
        filename: '[name].bundle.[hash:8].js',
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            // https://github.com/webpack-contrib/terser-webpack-plugin
            new TerserJSPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: /\\node_modules/,
                parallel: true,
                sourceMap: true,
                extractComments: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.[hash:8].css',
            chunkFilename: '[id].bundle.css',
        }),
    ],
});

module.exports = prodConfig;