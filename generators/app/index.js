'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('underscore.string');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('name', { type: String, required: false });
    this.appname = this.appname || path.basename(process.cwd());
    this.appname = _.camelize(_.slugify(_.humanize(this.appname)));
  },

  prompting: function () {
    this.log(yosay(
      'Welcome to the impressive ' + chalk.red('generator-angular-es2015') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'title',
      message: 'Please provide a title to your project.'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('scripts'),
      this.destinationPath('scripts')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('.yo-rc.json'),
      this.destinationPath('.yo-rc.json')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        name: this.appname
      }
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      {
        name: this.appname,
        title: this.props.title
      }
    );
  },

  install: function () {
    // this.installDependencies();
  }
});
