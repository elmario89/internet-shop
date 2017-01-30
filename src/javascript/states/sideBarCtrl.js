(function() {
  'use strict';
    angular.module('app')
    .controller('sideBarCtrl', ['$scope', '$state', sideBarCtrl]);

    function sideBarCtrl($scope, $state) {

      $scope.goToState = function(state){
        $state.go(state);
      }
    }
})();