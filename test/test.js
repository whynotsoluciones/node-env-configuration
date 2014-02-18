/**
 * Set required env vars for appName
 */
process.env.APP1_VAR1 = 'var 1 value';
process.env.APP1_VAR2 = '100';
process.env.APP1_OBJ1_VAR1 = 'Obj1 var 1 value';
process.env.APP1_OBJ1_VAR2 = 'Obj1 var 2 value';

/**
 * Set required env vars for appName2
 */
process.env.APP2_VAR1 = '1.3';
process.env.APP2_VAR2 = 'var 2 value for app 2';
process.env.APP2_OBJ1_VAR1 = 'Obj1 var 1 value';
process.env.APP2_OBJ1_VAR2 = 'Obj1 var 2 value';
process.env.APP2_OBJ2_OBJ21_VAR1 = 'Obj1 var 1 value';
process.env.APP2_OBJ2_OBJ22_VAR1 = 'Obj1 var 2 value';

/**
 * Set required env vars for appName3
 */
process.env.APP3_VAR1 = 'true';
process.env.APP3_VAR2 = 'var 2 value';
process.env.APP3_OBJ1_VAR1 = 'Obj1 var 1 value';
process.env.APP3_OBJ1_VAR2 = 'Obj1 var 2 value';
process.env.APP3_OBJ2_VAR2 = 'Obj 2 var 2 value';
process.env.APP3_OBJ3_VAR6 = 'Obj 3 var 6 value';
process.env.APP3_OBJ4_VAR8 = '4.1';
// process.env.APP3_OBJ4_OBJ41_VAR82 = 'Obj 4 Obj 41 var 82 value';

var DEFAULTS = {
    obj4: {
        obj41: {
            var82: 'Obj 4 Obj 41 var 82 value'
        }
    }
};

var assert = require('assert'),
    configApp1 = require('./../index')('app1'),
    configApp2 = require('./../index')('app2'),
    configApp3 = require('./../index')('app3', DEFAULTS);

describe('Read configuration from environment', function () {

    it('should retrieve configuration for app1 from environment', function () {
        assert.deepEqual(configApp1, {
            var1: process.env.APP1_VAR1,
            var2: 100,
            obj1: {
                var1: process.env.APP1_OBJ1_VAR1,
                var2: process.env.APP1_OBJ1_VAR2
            }
        });
    });

    it('should retrieve configuration for app2 from environment', function () {
        assert.deepEqual(configApp2, {
            var1: 1.3,
            var2: process.env.APP2_VAR2,
            obj1: {
                var1: process.env.APP2_OBJ1_VAR1,
                var2: process.env.APP2_OBJ1_VAR2
            },
            obj2: {
                obj21: {
                    var1: process.env.APP2_OBJ2_OBJ21_VAR1
                },
                obj22: {
                    var1: process.env.APP2_OBJ2_OBJ22_VAR1
                }
            }
        });
    });

    it('should retrieve configuration for app3 from environment', function () {
        assert.deepEqual(configApp3, {
            var1: true,
            var2: process.env.APP3_VAR2,
            obj1: {
                var1: process.env.APP3_OBJ1_VAR1,
                var2: process.env.APP3_OBJ1_VAR2
            },
            obj2: {
                var2: process.env.APP3_OBJ2_VAR2
            },
            obj3: {
                var6: process.env.APP3_OBJ3_VAR6
            },
            obj4: {
                var8: process.env.APP3_OBJ4_VAR8,
                obj41: {
                    var82: DEFAULTS.obj4.obj41.var82
                }
            }
        });
    });

});