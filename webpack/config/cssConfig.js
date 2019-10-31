const config = {
    css: {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
            sourceMap: true,
            localsConvention: 'camelCase',
        },
    },
    postCss: {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            sourceMap: true,
            plugins: [
                require('autoprefixer'),
            ],
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