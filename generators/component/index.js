'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore.string')

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });    
    this.objName = _.classify(_.slugify(_.humanize(this.name)));
    this.name = this.name.toLowerCase();
    this.componentPath = function (path) {
      return './' + this.name + '/' + path;
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
        objName: this.objName,
        name: this.name
      }
    );
  }
});
