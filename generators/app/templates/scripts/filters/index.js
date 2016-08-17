import angular from 'angular';
import UpperStrFilter from "./upper-str.filter";
//Hook1: import <%= objName %>Filter from "./<%= name %>.filter";

const Filters = angular.module('filters', [])
.filter('UpperStrService', UpperStrFilter)
    //Hook2: .filter('<%= objName %>Service', <%= objName %>Filter)

export default Filters.name;