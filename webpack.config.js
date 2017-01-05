const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    config = {
        target: 'electron-renderer',
        cache: true,
        entry: {
            app: path.resolve('renderer/App.jsx'),
            vendors: [
                'jquery',
                './semantic/dist/semantic.css',
                './semantic/dist/semantic.js',
                'react'
            ]
        },
        output: {
            path: path.resolve('build'),
            filename: '[name].js'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendors',
                filename: 'vendors.js',
                minChunks: Infinity
            }),
            new ExtractTextPlugin({
                filename: 'app.css'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ],
        module: {
            rules: [
                /**
                 * Load jsx components with babel loader
                 */
                {
                    test: /\.jsx$/,
                    loader: 'babel-loader'
                },
                /**
                 * Extract all css to the separate file using ExtractTextPlugin
                 * Do the same for less
                 */
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader'
                    })
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader!less-loader'
                    })
                },
                /**
                 * The following are for fonts and icons
                 */
                {
                    test: /\.(woff|woff2)$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.ttf$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.eot$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.svg$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader?limit=25000'
                }
            ]
        },
        resolve: {
            alias: {
                Bower: path.resolve('bower_components')
            }
        }
    };

module.exports = config;
