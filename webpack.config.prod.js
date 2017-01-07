const defaultConfig = require('./webpack.config.js'),
    webpack = require('webpack'),
    config = defaultConfig;

config.plugins = config.plugins.concat(
    new webpack.LoaderOptionsPlugin({
        debug: false,
        minimize: true
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    })
);

module.exports = config;
