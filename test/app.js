'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var fs = require('fs-extra');

describe('angular-es2015:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise();
  });
  it('creates files', function () {
    assert.file([
      'scripts/services/index.js',
      'index.html',
    ]);
  });
});

describe('angular-es2015:service', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .inTmpDir(function (dir) {
        var required = ['scripts/services/index.js'];
        required.forEach(function (file) {
          fs.copySync(path.join(__dirname, '../generators/app/templates/' + file), path.join(dir, file));
        })
      })
      .withArguments(['foo'])
      .toPromise();
  });

  it('generates a new service', function () {
    assert.file([
      'scripts/services/foo.service.js',
      'scripts/services/index.js'
    ]);
    assert.fileContent(
      path.join('scripts/services/foo.service.js'),
      'class FooService'
    );
    assert.fileContent(
      path.join('scripts/services/index.js'),
      'import FooService from "./foo.service";'
    );
    assert.fileContent(
      path.join('scripts/services/index.js'),
      ".service('FooService', FooService)"
    );
  });
})
