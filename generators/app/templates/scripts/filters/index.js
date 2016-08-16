import angular from 'angular';
//Hook1: import <%= objName %> from './<%= name %>';

const Filters = angular.module('filters', [])
    //Hook2: .filter('sampleFilter', SampleFilter)

export default Filters.name;