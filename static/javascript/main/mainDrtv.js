angular.module('app')
  .directive('mainDrtv', mainDrtv);

  function mainDrtv() {
    return{
      restrict: 'E',
      scope: {

      }, 
      controller: 'mainCtrl',
      templateUrl: 'mainTmpl.html'
    };
  };