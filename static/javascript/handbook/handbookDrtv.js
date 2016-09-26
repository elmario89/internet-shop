angular.module('app')
  .directive('handbookDrtv', handbookDrtv);

  function handbookDrtv() {
    return{
      restrict: 'E',
      scope: {
        phones: '=?',
        btnState: '=?',
        onGetPhones: '=?'
      }, 
      controller: 'handbookCtrl',
      templateUrl: 'javascript/handbook/handbookTmpl.html'
    };
  };