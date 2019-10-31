const merge = require('webpack-merge');
const prodConfig = require('./prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerConfig = merge(prodConfig, {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 3001,
        }),
    ],

});

module.exports = analyzerConfig;