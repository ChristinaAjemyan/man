import angular from 'angular';
import HomeState from './home'


const module = angular.module('app.states', [
  HomeState
]);


export default module.name;
