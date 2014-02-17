var assert = require('assert'),
    config = require('./../index');

describe('Read configuration from environment', function () {

    it('should retrieve configuration from environment', function () {
        assert.deepEqual(config, {});
    });

});