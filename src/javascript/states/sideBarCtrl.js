(function() {
  'use strict';
    angular.module('app')
    .controller('sideBarCtrl', ['$scope', '$state', sideBarCtrl]);

    function sideBarCtrl($scope, $state) {

      $scope.startAnimating = $scope.startAnimating || function() { 
        console.error('Define startAnimating function in directive'); 
      }

      $scope.goToState = function(state){
        $state.go(state);
      }
    }
})();