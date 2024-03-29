var fs = require('fs'),
    Key = require('./authorized-keys/key').Key;

var AuthorizedKeys = module.exports = function (path) {
  this.keys = [];
};

AuthorizedKeys.prototype.add = function (type, content, name) {
  if (type instanceof Key) {
    return this.keys.push(type);
  }

  return this.keys.push(new Key(type, content, name));
};

AuthorizedKeys.prototype.getByName = function (name) {
  return this.keys.filter(function (key) {
    return key.name === name;
  });
};

AuthorizedKeys.Key = Key;

