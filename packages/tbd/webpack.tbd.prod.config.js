const merge = require('webpack-merge');

const baseConfig = require('./webpack.tbd.config');

module.exports = merge.smart(baseConfig, {
    mode: 'production'
});
