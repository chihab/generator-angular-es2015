import angular from 'angular';
//Hook1: import <%= objName %>Directive from "./<%= name %>.directive";

const Directives = angular.module('Directives', [])
    //Hook2: .directive('<%= camelName %>', <%= objName %>Directive)

export default Directives.name;