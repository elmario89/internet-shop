angular.module('app')
  .directive('handbookDrtv', handbookDrtv);

  function handbookDrtv() {
    return{
      restrict: 'E',
      scope: {

      }, 
      controller: 'handbookCtrl',
      templateUrl: 'handbookTmpl.html'
    };
  };