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
      controller: ['$scope', '$http', handbook]
    });

  function handbook($scope, $http) {

    function success(response) {
      $scope.phones = response.data;
      $scope.phonesReceived = true;
    }

    function error(response) {
      console.log(response);
    }

    $scope.getPhones = function() {
      $http({
        method: 'GET',
        url: '/api/telephone'
      }).then(success, error);
    };

    $scope.getById = function() {
      console.log('defined');
    };

  }
}]);
