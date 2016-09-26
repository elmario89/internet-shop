'use strict';

angular
  .module('app')
  .config(['$stateProvider',
function($stateProvider) {

  var menuTop;
  $stateProvider
    .state('main.handbook', {
      url: '/handbook',
      templateUrl: 'route/handbook/handbook.html',
      controller: ['$scope', handbook]
    });

  function handbook($scope, $state, $http, $httpParamSerializer) {
    
  }

}]);
