const merge = require('webpack-merge');

const baseConfig = require('./webpack.executor.config');

module.exports = merge.smart(baseConfig, {
    mode: 'production'
});
