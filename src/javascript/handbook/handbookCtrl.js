angular.module('app')
  .controller('handbookCtrl', ['$scope', handbookCtrl]);

function handbookCtrl($scope) {

  $scope.onGetPhones = $scope.onGetPhones || function() {
    console.error("Define getPhones function in handbook route");
  };
};