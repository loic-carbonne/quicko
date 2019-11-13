const merge = require('webpack-merge');

const baseConfig = require('./webpack.quicko.config');

module.exports = merge.smart(baseConfig, {
    mode: 'production'
});
