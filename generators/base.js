'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('underscore.string');
var ejs = require('ejs');

module.exports = yeoman.Base.extend({
    constructor: function(){        
        yeoman.Base.apply(this, arguments);
        this.argument('name', { type: String, required: true });
        this.name = _.slugify(_.humanize(this.name));
        this.camelName = _.camelize(this.name);
        this.objName = _.classify(this.name);
        this.name = this.name.toLowerCase();        
    },
    folderPath: function(path, root) {
      return this.destinationPath(this.path + (root?'':this.name+ '/') + path);
    },
    hookTpl: function(file, hook, map) {
        try {
            var content = this.fs.read(file);
            var result = new RegExp('(.*\/\/' + hook + ': ' + '(.*))').exec(content);
            if (result.length < 3)
                throw new Exception();
            var hookExpression = result[1];
            var insert = ejs.render(result[2], map);
            this.fs.write(file, content.replace(hookExpression, insert + '\n' + hookExpression));
        } catch (e) {
            this.log.error(chalk.yellow('\nException when trying to insert hook: ' + hook + ' into file ' + file + '.\n'));
        }        
    }    
})