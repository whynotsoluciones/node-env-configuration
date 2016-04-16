/*jslint node: true */
"use strict";

exports.fixture1 = {
  APP1_VAR1: 'var 1 value',
  APP1_VAR2: '100',
  APP1_OBJ1_VAR1: 'Obj1 var 1 value',
  APP1_OBJ1_VAR2: 'Obj1 var 2 value',
  APP1_OBJ1_OBJ3_OBJ31_VAR311: 'Deep property'
};

exports.config1 = {
  var1: exports.fixture1.APP1_VAR1,
  var2: 100,
  obj1: {
    var1: exports.fixture1.APP1_OBJ1_VAR1,
    var2: exports.fixture1.APP1_OBJ1_VAR2,
    obj3: {
      obj31: {
        var311: 'Deep property'
      }
    }
  }
};

exports.fixture2 = {
  APP2_VAR1: '1.3',
  APP2_VAR2: 'var 2 value for app 2',
  APP2_OBJ1_VAR1: 'Obj1 var 1 value',
  APP2_OBJ1_VAR2: 'Obj1 var 2 value',
  APP2_OBJ2_OBJ21_VAR1: 'Obj1 var 1 value',
  APP2_OBJ2_OBJ22_VAR1: 'Obj1 var 2 value'
};

exports.config2 = {
  var1: 1.3,
  var2: exports.fixture2.APP2_VAR2,
  obj1: {
    var1: exports.fixture2.APP2_OBJ1_VAR1,
    var2: exports.fixture2.APP2_OBJ1_VAR2
  },
  obj2: {
    obj21: {
      var1: exports.fixture2.APP2_OBJ2_OBJ21_VAR1
    },
    obj22: {
      var1: exports.fixture2.APP2_OBJ2_OBJ22_VAR1
    }
  }
};

exports.fixture3 = {
  APP3_VAR1: 'true',
  APP3_VAR2: 'var 2 value',
  APP3_OBJ1_VAR1: 'Obj1 var 1 value',
  APP3_OBJ1_VAR2: 'Obj1 var 2 value',
  APP3_OBJ2_VAR2: 'Obj 2 var 2 value',
  APP3_OBJ3_VAR6: 'Obj 3 var 6 value',
  APP3_OBJ4_VAR8: '4.1'
};

exports.config3 = {
  var1: true,
  var2: exports.fixture3.APP3_VAR2,
  obj1: {
    var1: exports.fixture3.APP3_OBJ1_VAR1,
    var2: exports.fixture3.APP3_OBJ1_VAR2
  },
  obj2: {
    var2: exports.fixture3.APP3_OBJ2_VAR2
  },
  obj3: {
    var6: exports.fixture3.APP3_OBJ3_VAR6
  },
  obj4: {
    var8: 4.1
  }
};

exports.all = {
  app1: exports.config1,
  app2: exports.config2,
  app3: exports.config3
};

exports.arrayFixture = {
  APPARR_ARR1: 'true, false, true',
  APPARR_VAR2: 'var 2 value',
  APPARR_OBJ1_VAR1: 'Obj1 var 1 value',
  APPARR_OBJ1_VAR2: 'Obj1 var 2 value',
  APPARR_OBJ2_VAR2: 'Obj 2 var 2 value',
  APPARR_OBJ3_VAR6: 'Obj 3 var 6 value',
  APPARR_OBJ3_VAR7_ARR2: 'Var 1, Var 2',
  APPARR_OBJ4_VAR8: '4.1',
  APPARR_OBJ4_ARR3: '12.0, 10, 11.2'
};

exports.arrayConfig = {
  arr1: [true, false, true],
  var2: exports.arrayFixture.APPARR_VAR2,
  obj1: {
    var1: exports.arrayFixture.APPARR_OBJ1_VAR1,
    var2: exports.arrayFixture.APPARR_OBJ1_VAR2
  },
  obj2: {
    var2: exports.arrayFixture.APPARR_OBJ2_VAR2
  },
  obj3: {
    var6: exports.arrayFixture.APPARR_OBJ3_VAR6,
    var7: {
      arr2: ['Var 1', 'Var 2']
    }
  },
  obj4: {
    var8: 4.1,
    arr3: [12.0, 10, 11.2]
  }
};
