angular.module('app')
  .directive('handbookList', handbookList);

  function handbookList() {
    return{
      restrict: 'E',
      scope: {
          phones: '=?'
      },
      controller: 'handbookListCtrl',
      templateUrl: 'javascript/handbook/handbookList/handbookListTmpl.html'
    };
  };