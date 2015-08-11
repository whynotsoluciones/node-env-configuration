var changeCase = require('change-case');

/**
 * Expose `Config` constructor
 * @param {Mixed} defaultConfig Default configuration
 */
function Config(defaultConfig) {
	this.conf = defaultConfig || {};
}

/**
 * Extends a configuration object
 * @param {Array} array of hierarchical asc ordered properties
 * @param {Object} value of property
 * @return {Config} The conf object
 * @api public
 */
Config.prototype.extend = function (array, value, conf) {

	conf = conf || this.conf;
	var propName = null;

	// Last property in hierarchy
	if (array && array.length === 1) {
		conf[changeCase.camelCase(array[0])] = value;
	} else if (array && array.length > 1) {
		propName = array[0];
		propName = changeCase.camelCase(propName);
		// if object is not on conf. hierarchy
		if (array[0] && conf[propName] === undefined) {
			conf[propName] = {};
		}
		try {
			this.extend(array.slice(1), value, conf[propName]);
		} catch(error) {
			throw Error(error);
		}
	}
	return this;

};

module.exports = Config;
