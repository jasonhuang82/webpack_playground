const merge = require('webpack-merge');
const path = require('path');
const ip = require('ip');
const commonConfig = require('./common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCurrentPath = (_path = '') => path.resolve(__dirname, _path);
const devConfig = merge(commonConfig, {
    output: {
        path: getCurrentPath('../build'),
        filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',
    // https://medium.com/reactmaker/webpack-4-%E6%9B%B4%E5%BF%AB%E6%89%93%E5%8C%85-%E6%9B%B4%E5%B0%91%E8%A8%AD%E5%AE%9A-10ee88a82a14
    devServer: {
        contentBase: '../build',
        watchContentBase: true,
        host: ip.address(),
        useLocalIp: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].bundle.css',
        }),
    ],
});

module.exports = devConfig;