angular.module('app')
  .directive('handbookDrtv', handbookDrtv);

  function handbookDrtv() {
    return{
      restrict: 'E',
      scope: {
        phones: '=?',
        btnState: '=?',
        onGetPhones: '=?',
        onGetById: '=?',
        phone: '=?',
        message: '=?',
        invalid: '=?'
      }, 
      controller: 'handbookCtrl',
      templateUrl: 'javascript/handbook/handbookTmpl.html'
    };
  };