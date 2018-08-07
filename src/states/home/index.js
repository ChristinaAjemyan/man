import angular from 'angular';
import uiRouter from 'angular-ui-router';
import header, {headerTemplate} from '../../layout/header/';
import headerMobile, {headerTemplateMobile} from '../../layout/header/';
import footerTemplate from '../../layout/footer.html';
import homeTemplate from './home.html';
import homeMobileTemplate from './games_mobile.html';
import HomeCtrl from './home.ctrl';


const module = angular.module('app.states.games', [uiRouter, header, GamesService]);
module.controller('HomeCtrl', HomeCtrl);

module.config(['$stateProvider','isMobileProvider',function($stateProvider){

    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'header': {
                    controller: "HeaderCtrl",
                    controllerAs:'vm',
                    template: headerTemplate
                },
                'footer': {
                    template: footerTemplate
                },
                'content': {
                    controller: 'HomeCtrl',
                    controllerAs: 'vm',
                    template:homeTemplate
                }
            }
        });

}]);

export default module.name;