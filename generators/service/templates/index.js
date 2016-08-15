import angular from 'angular';

import SampleService from "./sample.service";

const Services = angular.module('common.services', [])
    .service('sampleService', SampleService)

export default Services.name;