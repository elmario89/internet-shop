angular.module('app')
  .controller('mainCtrl', ['$scope', mainCtrl]);

function mainCtrl($scope) {
  $scope.test = 'test';
};