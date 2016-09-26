'use strict';

angular
  .module('app')
  .config(['$stateProvider',
function($stateProvider) {

  var menuTop;
  $stateProvider
    .state('handbook', {
      url: '/handbook',
      templateUrl: 'javascript/route/handbook/handbook.html',
      controller: ['$scope', handbook]
    });

  function handbook($scope, $state, $http, $httpParamSerializer) {

    $scope.getPhones = function() {
      console.log('weve got phones');
    };

    function success(response) {
      $scope.phones = response.data;
    }

    function error(response) {
      console.log(response);
    }

    $scope.request = function() {
      $http({
        method: 'GET',
        url: '/api/telephone'
      }).then(success, error);
    };

  }

}]);
