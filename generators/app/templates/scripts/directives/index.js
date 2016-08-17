import angular from 'angular';
import HighlightDirective from "./highlight.directive";
//Hook1: import <%= objName %>Directive from "./<%= name %>.directive";

const Directives = angular.module('Directives', [])
    .directive('highlight', HighlightDirective)
    //Hook2: .directive('<%= camelName %>', <%= objName %>Directive)

export default Directives.name;