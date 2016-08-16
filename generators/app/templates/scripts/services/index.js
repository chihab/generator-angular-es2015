import angular from 'angular';
//Hook1: import <%= objName %>Service from "./<%= name %>.service";

const Services = angular.module('services', [])
    //Hook2: .service('<%= objName %>Service', <%= objName %>Service)

export default Services.name;