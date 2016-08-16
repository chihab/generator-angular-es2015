'use strict';
var Base = require('../base');
var path = require('path');

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
    this.path = 'scripts/components/';
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('sample/sample.controller.js'),
      this.folderPath(this.name + '.controller.js'),
      {
        objName: this.objName,
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('sample/sample.component.js'),
      this.folderPath(this.name + '.component.js'),
      {
        objName: this.objName,
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('sample/sample.html'),
      this.folderPath(this.name + '.html'),
      {
        objName: this.objName,
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('sample/index.js'),
      this.folderPath('index.js'),
      {
        camelName: this.camelName,
        objName: this.objName,
        name: this.name
      }
    );
    this.hookTpl(this.folderPath('index.js', true), 'Hook1', {
      objName: this.objName,
      name: this.name
    });
    this.hookTpl(this.folderPath('index.js', true), 'Hook2', {
      objName: this.objName
    });
  }
});
