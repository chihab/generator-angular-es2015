'use strict';
var Base = require('../base');
var path = require('path');

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
    this.path = 'scripts/components/';
    this.componentPath = function(path, root) {
      return this.destinationPath(this.path + (root?'':this.name+ '/') + path);
    }
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('sample/sample.controller.js'),
      this.componentPath(this.name + '.controller.js'),
      {
        objName: this.objName,
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('sample/sample.component.js'),
      this.componentPath(this.name + '.component.js'),
      {
        objName: this.objName,
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('sample/sample.html'),
      this.componentPath(this.name + '.html'),
      {
        objName: this.objName,
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('sample/index.js'),
      this.componentPath('index.js'),
      {
        camelName: this.camelName,
        objName: this.objName,
        name: this.name
      }
    );
    this.hookTpl(this.componentPath('index.js', true), 'Hook1', {
      objName: this.objName,
      name: this.name
    });
    this.hookTpl(this.componentPath('index.js', true), 'Hook2', {
      objName: this.objName
    });
  }
});
