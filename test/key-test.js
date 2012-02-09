var assert = require('assert'),
    vows = require('vows'),
    macros = require('./helpers/macros'),
    Key = require('../').Key;

var key = { type: 'ssh-rsa', content: 'mykey', name: 'maciej' };

vows.describe('authorized-keys/key').addBatch({
  'When using `Key` class': {
    'A `Key` object populated with an object': macros.getBatchForKey([key], key),
    'A `Key` object populated with arguments': macros.getBatchForKey(
      [key.type, key.content, key.name],
      key
    )
  }
}).export(module);
