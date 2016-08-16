'use strict';
var Base = require('../base');

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('sample/sample.directive.js'),
      this.folderPath(this.name + '.directive.js'),
      {
        objName: this.objName,
        name: this.name
      }
    );
    this.hookTpl('index.js', 'Hook1', {
      objName: this.objName,
      name: this.name
    });
    this.hookTpl('index.js', 'Hook2', {
      objName: this.objName
    });
  }
});
