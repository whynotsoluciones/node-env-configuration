/*jslint node: true */
/*global process */
/*jshint -W030 */
"use strict";

var Config = require('./lib/config'),
  changeCase = require('change-case');

var defaults = {
  prefix: '',
  arraySeparator: null,
  defaults: {}
};

module.exports = function (config) {

  var i, prefixCC, env, value, configuration, hierarchy = [];

  var conf = {};

  // Extend defaults with user configuration
  conf.prefix = (config && config.prefix) ? config.prefix : defaults.prefix;
  conf.arraySeparator = (config && config.arraySeparator) ? config.arraySeparator : defaults.arraySeparator;
  conf.defaults = (config && config.defaults) ? config.defaults : defaults.defaults;

  // Namespace (prefix) for config env variables
  prefixCC = changeCase.constantCase(conf.prefix);
  // Create config object
  configuration = new Config(conf.defaults);
  // Iterate over env vars
  for (env in process.env) {
    // if env is in app namespace
    if (env.indexOf(prefixCC) === 0) {
      // split each var using separator
      hierarchy = env.replace(prefixCC !== '' ? prefixCC + '_' : prefixCC, '').split('_');

      // Array property ?
      if (conf.arraySeparator && process.env[env].indexOf(conf.arraySeparator) !== -1) {
        value = process.env[env].split(conf.arraySeparator);
        // Try to parse each element in array
        for (i = 0; i < value.length; i = i + 1) {
          try {
            value[i] = JSON.parse(value[i]);
          } catch (error) {
            // Do not parse string values
            // Remove leading and traling spaces
            if (typeof value[i] === 'string') {
              value[i] = value[i].trim();
            }
          }
        }
      } else {
        try {
          value = JSON.parse(process.env[env]);
        } catch (error) {
          /* Do not parse value */
          value = process.env[env];
        }
      }
      configuration.extend(hierarchy, value);
    }
  }

  return configuration.conf;

};
