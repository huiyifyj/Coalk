/**
 * Webpack Production Environment Configuration.
 */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'production',

    devtool: 'source-map',

    entry: {
        fyj: './index.js'
    },

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].min.js',
        library: 'FYJ',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.scss']
    },

    plugins: [
        new webpack.DefinePlugin({
            APP_VERSION: `'${require('../package.json').version}'`,
            APP_NAME: `'${require('../package.json').name}'`
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // new webpack.config.optimization.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         // 内嵌定义了但是只用到一次的变量
        //         collapse_vars: true,
        //         // 提取出出现多次但是没有定义成变量去引用的静态值
        //         reduce_vars: true,
        //         drop_console: true
        //     },
        //     sourceMap:false,
        //     uglifyOptions:{
        //         output:{
        //             // 删除所有的注释
        //             comments: false,
        //             beautify:false
        //         },
        //         safari10:true
        //     }
        // })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, 'postcss.config.js')
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            interpolate: true
                        }
                    }
                ]
            }
        ]
    },

}