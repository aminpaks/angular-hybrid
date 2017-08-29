const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled commonsChunkPlugin for you. This allows your app to
 * load faster and it splits the modules you provided as entries across
 * different bundles!
 *
 * https://webpack.js.org/plugins/commons-chunk-plugin/
 *
 */

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ChunksPlugin = require('webpack-split-chunks');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const isProd = false;

module.exports = {
    devtool: isProd ? 'hidden-source-map' : 'source-map',

    // context: path.resolve(__dirname, './src/'),
    entry: {
        main: './src/main.ts',
        vendor: ['./src/vendor.ts', './src/polyfills.ts'],
    },

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.js', '.less', '.html'],
        alias: {
            d3v3: path.resolve('node_modules', 'd3v3', 'd3.js'),
            '@angular/upgrade/static': '@angular/upgrade/bundles/upgrade-static.umd.js',
        },
        plugins: [new TsConfigPathsPlugin()],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: [
                    'awesome-typescript-loader',
                    'angular-router-loader',
                ],
            },
            {
                test: /\.html$/,
                loader: ['html-loader'],
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            }
        ]
    },

    devServer: {
        contentBase: './',
        historyApiFallback: true,
        // quiet: true,
        stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
        }),
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './src')
        ),
        // new UglifyJSPlugin(),
        new ExtractTextPlugin({ filename: 'styles.[hash].css', disable: true }),
        // new CommonsChunkPlugin({
        //     async: true,
        //     children: true,
        //     minChunks: function(module, count) {
        //         return module.resource && (/home\/module/).test(module.resource);
        //     }
        // }),
        new CommonsChunkPlugin({
        	names: 'vendor',
            // minChunks: ({ context, resource }) => {
            //     if (resource && (/^.*\.(css|less)$/).test(resource)) {
            //         return false;
            //     }
            //     return context && context.includes('node_modules');
            // },
        	filename: 'vendor.[hash].js',
            minChunks: Infinity,
        }),
    ]
};
