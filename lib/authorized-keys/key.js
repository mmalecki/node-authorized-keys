var Key = exports.Key = function (type, content, name) {
  if (typeof type === 'object') {
    this.type = type.type;
    this.content = type.content;
    this.name = type.name;
    return;
  }

  this.type = type;
  this.content = content;
  this.name = name;
};

Key.prototype.toString = function () {
  return this.type + ' ' + this.content + ' ' + this.name;
};

