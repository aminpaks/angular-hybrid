const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

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
const { CommonsChunkPlugin,  } = webpack.optimize;
const { NamedModulesPlugin } = webpack;
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);

const isProd = false;

function sortEntries() {
    const entryPoints = ['inline', 'styles', 'vendor', 'main'];
    return (left, right) => {
        let leftIndex = entryPoints.indexOf(left.names[0]);
        let rightindex = entryPoints.indexOf(right.names[0]);
        if (leftIndex > rightindex) {
            return 1;
        }
        else if (leftIndex < rightindex) {
            return -1;
        }
        else {
            return 0;
        }
    };
}

module.exports = {
    devtool: isProd ? 'hidden-source-map' : 'source-map',

    entry: {
        main: './src/main.ts',
        vendor: ['./src/vendor.ts', './src/polyfills.ts'],
        styles: './src/styles.less',
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.js'],
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
                use: [
                    {
                        loader: 'style-loader',
                    },
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
            },
        ],
    },

    devServer: {
        contentBase: './',
        historyApiFallback: true,
        // quiet: true,
        stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    },

    plugins: [
        new NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            chunksSortMode: sortEntries(),
        }),
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './src')
        ),
        new CommonsChunkPlugin({
            minChunks: 2,
            async: 'common',
        }),
        new CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: (module) => {
                return module.resource
                    && (module.resource.startsWith(nodeModules)
                        || module.resource.startsWith(realNodeModules));
            },
            chunks: ['main']
        }),
    ]
};
