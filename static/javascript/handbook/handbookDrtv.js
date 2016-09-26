angular.module('app')
  .directive('handbookDrtv', handbookDrtv);

  function handbookDrtv() {
    return{
      restrict: 'E',
      scope: {
        variable: '=?'
      }, 
      controller: 'handbookCtrl',
      templateUrl: 'javascript/handbook/handbookTmpl.html'
    };
  };