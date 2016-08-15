'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: true });
    this.appname = _.camelCase(this.appname);
  },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the impressive ' + chalk.red('generator-angular-es2015') + ' generator!'
    ));

    // var prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // return this.prompt(prompts).then(function (props) {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // }.bind(this));
  },

  writing: function () {
    console.log('Application name ' + this.appname);
    this.fs.copyTpl(
      this.templatePath('scripts/components/sample/sample.controller.js'),
      this.destinationPath('scripts/components/'+this.appname+'/'+this.appname+'.controller.js'),
      {
        name:this.appname
      }
    );
  },

  install: function () {
    this.installDependencies();
  }
});
