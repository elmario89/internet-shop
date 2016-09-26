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
    
  }

}]);
