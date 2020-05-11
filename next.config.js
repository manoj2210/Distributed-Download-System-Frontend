const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');
require('dotenv').config();
const webpack = require('webpack');

module.exports = withCSS(
  withSourceMaps({
    webpack(config, _options) {
      config.node = {
        fs: 'empty',
      };
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});
      config.plugins.push(new webpack.DefinePlugin(env));
      return config;
    },
  }),
);
