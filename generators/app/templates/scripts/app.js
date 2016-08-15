import angular from 'angular';

import uiRouter from 'angular-ui-router';
import ngCookies from "angular-cookies";
import ngSanitize from "angular-sanitize";

import Directives from './directives';
import Filters from './filters';
import Services from './services';
import Components from './components';

angular.module('app', [
    uiRouter,
    ngCookies,
    ngSanitize,
    Directives,
    Filters,
    Services,
    Components    
  ]);

