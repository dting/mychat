const _ = require('lodash');
const path = require('path');

const baseSettings = {
  env: process.env.NODE_ENV || 'development',
  root: path.normalize(`${__dirname}/../../..`),
  port: process.env.PORT || 9000,
  ip: process.env.IP || '0.0.0.0',
  secrets: {
    session: process.env.APP_SECRET || 'mychat-secret',
  },
};

const environmentSettings = require(`./${baseSettings.env}`);

module.exports = _.merge(baseSettings, environmentSettings || {});
