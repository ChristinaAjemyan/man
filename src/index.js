import angular from 'angular';
import router from './router';
import bootstrap from 'angular-ui-bootstrap';
import directives from './directives';
import appStates from './states/';

const app = angular.module('app', [router, bootstrap, directives, appStates])

angular.element(document).ready(function(){
  angular.bootstrap(document, ['app']);
});