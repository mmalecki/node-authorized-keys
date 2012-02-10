var assert = require('assert'),
    vows = require('vows'),
    AuthorizedKeys = require('../');

var testKey = { type: 'ssh-rsa', content: 'mykey', name: 'maciej' };

vows.describe('authorized-keys').addBatch({
  'When using `authorized-keys`': {
    'with a new `AuthorizedKeys` object': {
      topic: new AuthorizedKeys(),
      'there should be no keys': function (keys) {
        assert.lengthOf(keys.keys, 0);
      },
      'after adding a key to it': {
        topic: function (keys) {
          keys.add(testKey);
          return keys;
        },
        'it should be there': function (keys) {
          assert.lengthOf(keys.keys, 1);
          assert.deepEqual(keys.keys[0], new AuthorizedKeys.Key(testKey));
        }
      }
    }
  }
}).export(module);

