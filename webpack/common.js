const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssConfig = require('./config/cssConfig');
const getCurrentPath = (_path = '') => path.resolve(__dirname, _path);

module.exports = {
    // context: getCurrentPath('../src'),
    entry: [
        '@babel/polyfill',
        getCurrentPath('../src/index.js'),
    ],
    output: {
        path: getCurrentPath('../build'),
        filename: '[name].bundle.[hash:8].js',
    },
    stats: {
        colors: true,
        env: true,
    },
    // https://webpack.js.org/configuration/performance/#performancemaxassetsize
    performance: {
        maxEntrypointSize: 400000, // max size 400kb
        maxAssetSize: 100000, // max size 100kb
    },
    resolve: {
        alias: {
            components: getCurrentPath('../src/components'),
            images: getCurrentPath('../src/assets/images'),
            '@': getCurrentPath('../src'),
            shared: getCurrentPath('../src/shared'),
            utils: getCurrentPath('../src/utils'),
        },
        extensions: [".js", ".json", ".jsx", ".css"],
        modules: [
            path.resolve(__dirname, '../node_modules/'),
            path.resolve(__dirname, '../src/utils'),
        ],
    },
    // Ref
    // https://pjchender.github.io/2018/05/17/webpack-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98%EF%BC%88webpack-note%EF%BC%89/#undefined
    // https://www.ucamc.com/e-learning/javascript/357-webpack%E5%A6%82%E4%BD%95code-splitting%E6%8B%86%E5%88%86%E4%BB%A3%E7%A2%BCsplitchunks
    // https://webpack.js.org/plugins/split-chunks-plugin/
    optimization: {
        runtimeChunk: "single",
         // 在這裡使用 SplitChunksPlugin
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "reactvendor",
                    chunks: 'all',
                    enforce: true,
                    reuseExistingChunk: true,
                },
                utilityVendor: {
                    test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
                    name: "utilityVendor",
                    chunks: 'all',
                    enforce: true,
                    reuseExistingChunk: true,
                },
                 // 把所有 node_modules 內的程式碼打包成一支 vendors.bundle.js
                vendor: {
                    test: /[\\/]node_modules[\\/](!react)(!react-dom)(!lodash)(!moment)(!moment-timezone)[\\/]/,
                    name: "vendor",
                    chunks: 'all',
                    enforce: true,
                    reuseExistingChunk: true,
                },
                // 將 app 出現 1 次以上的 code split 出來
                common: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2,
                },
                // styles: {
                //     test: /\.css$/,
                //     name: 'styles',
                //     // chunks: 'all',
                //     chunks: 'initial',
                //     priority: 2,
                //     minChunks: 2,
                // },
            }
        },
        // 把 webpack runtime 也打包成一支 runtime.bundle.js
        runtimeChunk: {
            name: 'runtime'
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"],

            },
            // pure css (without CSS modules)
            {
                test: /\.(css|scss)$/,
                exclude: /\.module\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            hmr: process.env.NODE_ENV === 'development',
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true,
                        },
                    },
                    ...cssConfig.no_css_module,
                ],
            },
            // css module
            {
                test: /\.module\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // only enable hot in development
                            hmr: process.env.NODE_ENV === 'development',
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true,
                        },
                    },
                    ...cssConfig.css_module,
                ],
            },
            {
                test: /\.(ogg|woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                            publicPath: './font',
                            outputPath: 'font/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                            publicPath: './images',
                            outputPath: 'images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                          // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.[hash:8].css',
            chunkFilename: '[id].bundle.[hash:8].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack_playground',
            template: getCurrentPath('../src/assets/template/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};