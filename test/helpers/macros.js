var assert = require('assert'),
    Key = require('../../').Key;

var macros = exports;

macros.assertCorrectKey = function (actual, expected) {
  assert.equal(expected.type, actual.type);
  assert.equal(expected.name, actual.name);
  assert.equal(expected.content, actual.content);
};

macros.assertCorrectString = function (actual, expected) {
  assert.equal(
    actual.toString(),
    expected.type + ' ' + expected.content + ' ' + expected.name
  );
};

macros.getBatchForKey = function (args, testKey) {
  var key = new Key();
  Key.apply(key, args);

  return {
    topic: key,
    'should contain correct properties': function (k) {
      macros.assertCorrectKey(k, testKey);
    },
    'should stringify properly': function (k) {
      macros.assertCorrectString(k, testKey);
    }
  };
};
