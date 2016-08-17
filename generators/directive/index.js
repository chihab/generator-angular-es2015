'use strict';
var Base = require('../base');

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
    this.path = 'scripts/directives/'
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('sample.directive.js'),
      this.folderPath(this.name + '.directive.js', true),
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
