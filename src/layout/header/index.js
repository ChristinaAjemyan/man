import angular from 'angular';
import HeaderCtrl from './header.ctrl';
import headerTemplate from './header.html';

const module = angular.module('app.header', []);

module
  .controller('HeaderCtrl', HeaderCtrl)
  .run(function(){
  });

export default module.name;
export {headerTemplate};