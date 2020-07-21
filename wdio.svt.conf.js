const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.baseUrl = 'https://www-svt.nbnco.net.au';

wdioConfig.config.specs = [
    './src/features/wooliex/test_online_shopping.feature'
];

exports.config = wdioConfig.config;