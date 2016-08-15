import angular from 'angular';

import SampleFilter from "./sample.filter";

const Filters = angular.module('common.filters', [])
    .filter('sampleFilter', SampleFilter)

export default Filters.name;