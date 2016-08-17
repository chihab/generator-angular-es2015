'use strict';
var Base = require('../base');

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
    this.path = 'scripts/services/'
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('sample.service.js'),
      this.folderPath(this.name + '.service.js', true),
      {
        objName: this.objName,
        name: this.name
      }
    );
    this.hookTpl(
      this.folderPath('index.js', true),
      ['Hook1', 'Hook2'],
      {
        objName: this.objName,
        name: this.name
      }
    );
  }
});
