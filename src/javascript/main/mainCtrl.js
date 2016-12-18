angular.module('app')
  .controller('mainCtrl', ['$scope', '$state', mainCtrl]);

function mainCtrl($scope, $state) {

  $scope.test = ['first', 'second', 'third'];

  $scope.first = function() {
    alert('this stupid ctrl works 1')
  }

  $scope.second = function() {
    alert('this stupid ctrl works 2')
  }

  $scope.goEdit = function() {
    $state.go('main.edit');
  }
};