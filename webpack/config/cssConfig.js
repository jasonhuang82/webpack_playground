const config = {
    css: {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: '[path]_[name]__[local]--[hash:base64:5]',
            },
            sourceMap: true,
            localsConvention: 'camelCase',
        },
    },
    postCss: {
        loader: 'postcss-loader',
        options: {
            sourceMap: true,
        }
    },
    sass: {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
        },
    },
};
module.exports = config;