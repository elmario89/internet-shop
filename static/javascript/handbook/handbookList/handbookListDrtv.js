angular.module('app')
  .directive('handbookList', handbookList);

  function handbookList() {
    return{
      restrict: 'E',
      scope: {
          phones: '=?',
          phone: '=?',
          onGetById: '=?',
          phone: '=?',
          message: '=?',
          invalid: '=?'
      },
      controller: 'handbookListCtrl',
      templateUrl: 'javascript/handbook/handbookList/handbookListTmpl.html'
    };
  };