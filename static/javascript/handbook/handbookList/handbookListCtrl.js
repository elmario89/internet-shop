angular.module('app')
  .controller('handbookListCtrl', ['$scope', handbookListCtrl]);

  function handbookListCtrl($scope) {
    console.log($scope.phones)
  };
