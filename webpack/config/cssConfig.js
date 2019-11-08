const common = [
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: true,
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
        },
    },
];

const css_module = [
    {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: '[path]_[name]__[local]--[hash:base64:5]',
            },
            sourceMap: true,
            localsConvention: 'camelCase',
        },
    },
    ...common,
]

const no_css_module = [
    {
        loader: 'css-loader',
        options: {
            sourceMap: true,
        },
    },
    ...common,
]

const config = {
    css_module,
    no_css_module,
};
module.exports = config;