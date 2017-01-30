(function() {
  'use strict';
    angular.module('app')
    .controller('sideBarCtrl', ['$scope', sideBarCtrl]);

    function sideBarCtrl($scope) {

      $scope.goToState = function(state){
        alert(state);
      }
    }
})();