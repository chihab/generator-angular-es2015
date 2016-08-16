import angular from 'angular';
//Hook1: import <%= objName %>Filter from "./<%= name %>.filter";

const Filters = angular.module('filters', [])
    //Hook2: .filter('<%= objName %>Service', <%= objName %>Filter)

export default Filters.name;