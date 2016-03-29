/*jslint node: true */
"use strict";

var fixtures = require('./index.fixtures'),
  rewire = require("rewire"),
  _ = require('lodash'),
  nodeenvconfiguration = rewire('./../../index');

describe('Read configuration from environment', function () {

  describe('Application 1', function () {

    before(function (done) {
      nodeenvconfiguration.__set__({
        process: {
          env: fixtures.fixture1
        }
      });
      done();
    });

    it('should retrieve configuration for app1 from environment', function (done) {
      var configApp1 = nodeenvconfiguration('app1');
      // type checking
      expect(configApp1).to.have.property('var2', 100);
      expect(configApp1).to.deep.equal(fixtures.config1);
      done();
    });

  });

  describe('Application 2', function () {

    before(function (done) {
      nodeenvconfiguration.__set__({
        process: {
          env: fixtures.fixture2
        }
      });
      done();
    });

    it('should retrieve configuration for app2 from environment', function (done) {
      var configApp2 = nodeenvconfiguration('app2');
      // type checking
      expect(configApp2).to.have.property('var1', 1.3);
      expect(configApp2).to.deep.equal(fixtures.config2);
      done();
    });

  });

  describe('Application 3', function () {

    before(function (done) {
      nodeenvconfiguration.__set__({
        process: {
          env: fixtures.fixture3
        }
      });
      done();
    });

    it('should retrieve configuration for app3 from environment', function (done) {
      var configApp3 = nodeenvconfiguration('app3');
      // type checking
      expect(configApp3).to.have.property('var1', true);
      expect(configApp3).to.deep.equal(fixtures.config3);
      done();
    });

  });

  describe('Mixed environment (all aplication configs)', function () {
    var allEnv = _.cloneDeep(fixtures.fixture1);
    allEnv = _.merge(allEnv, fixtures.fixture2, fixtures.fixture3);
    var allConf = _.cloneDeep(fixtures.config1);
    allConf = _.merge(allConf, fixtures.config2, fixtures.config3);

    before(function (done) {
      nodeenvconfiguration.__set__({
        process: {
          env: allEnv
        }
      });
      done();
    });

    it('should retrieve configuration for app1 from environment', function (done) {
      var configApp1 = nodeenvconfiguration('app1');
      // type checking
      expect(configApp1).to.have.property('var2', 100);
      expect(configApp1).to.not.deep.equal(allConf);
      expect(configApp1).to.deep.equal(fixtures.config1);
      done();
    });

    it('should retrieve configuration for app2 from environment', function (done) {
      var configApp2 = nodeenvconfiguration('app2');
      // type checking
      expect(configApp2).to.have.property('var1', 1.3);
      expect(configApp2).to.not.deep.equal(allConf);
      expect(configApp2).to.deep.equal(fixtures.config2);
      done();
    });

    it('should retrieve configuration for app3 from environment', function (done) {
      var configApp3 = nodeenvconfiguration('app3');
      // type checking
      expect(configApp3).to.have.property('var1', true);
      expect(configApp3).to.not.deep.equal(allConf);
      expect(configApp3).to.deep.equal(fixtures.config3);
      done();
    });

  });

  describe('Extend existing configurations', function () {

    before(function (done) {
      nodeenvconfiguration.__set__({
        process: {
          env: fixtures.fixture3
        }
      });
      done();
    });

    it('should retrieve configuration for app3 from environment', function (done) {
      var existing = {
        var1: false,
        var2: 'Other value',
        obj5: {
          var51: false
        }
      };
      var configApp3 = nodeenvconfiguration('app3', existing);
      expect(configApp3).to.have.property('var1', true);
      expect(configApp3).to.have.property('var2', fixtures.fixture3.APP3_VAR2);
      expect(configApp3).to.have.deep.property('obj5.var51', false);
      expect(configApp3).to.deep.equal(_.merge(existing, fixtures.config3));
      done();
    });

  });

  describe('Get all environment variables', function () {

    var allEnv = _.cloneDeep(fixtures.fixture1);
    allEnv = _.merge(allEnv, fixtures.fixture2, fixtures.fixture3);

    before(function (done) {
      nodeenvconfiguration.__set__({
        process: {
          env: allEnv
        }
      });
      done();
    });

    it('should retrieve all apps configuration', function (done) {
      var config = nodeenvconfiguration();
      expect(config).to.deep.equal(fixtures.all);
      done();
    });

  });

});
