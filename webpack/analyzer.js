const merge = require('webpack-merge');
const prodConfig = require('./prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerConfig = merge(prodConfig, {
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
});

module.exports = analyzerConfig;