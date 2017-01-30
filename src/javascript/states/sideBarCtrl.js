(function() {
  'use strict';
    angular.module('app')
    .controller('sideBarCtrl', ['$scope', '$state', '$timeout', sideBarCtrl]);

    function sideBarCtrl($scope, $state, $timeout) {

      $scope.startAnimating = $scope.startAnimating || function() {
        console.error('Define startAnimating function in directive');
      }

      $timeout(function() {
        $scope.startAnimating();
      }, 0);

      $scope.goToState = function(state){
        $scope.startAnimating();
        $timeout(function(){
          $state.go(state);
        }, 1100)
      }
    }
})();
