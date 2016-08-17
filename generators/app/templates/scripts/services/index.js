import angular from 'angular';
import TranslateService from "./translate.service";
//Hook1: import <%= objName %>Service from "./<%= name %>.service";

const Services = angular.module('services', [])
.service('TranslateService', TranslateService)
    //Hook2: .service('<%= objName %>Service', <%= objName %>Service)

export default Services.name;