var Config = require('./lib/config'),
    changeCase = require('change-case');

var SEPARATOR = '_';

module.exports = function (appName) {

    // Get env vars prefix based on app name
    appName = appName || '';
    var config = new Config();
    var prefix = changeCase.constantCase(appName);

    // Iterate over env vars
    var hierarchy = [];
    var env;
    for (env in process.env) {
        // if env is in app namespace
        if (env.indexOf(prefix) === 0) {
            // split each var using underscore as separator
            hierarchy = env.replace(prefix + '_', '').split(SEPARATOR);
            config.extend(hierarchy, process.env[env]);
        }
    }

    return config.conf;

};