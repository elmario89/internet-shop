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

    var phones = {
      success: function(response) {
        $scope.phones = response.data;
        $scope.phonesReceived = true;
      },
      error: function(response) {
        console.log(response);
      }
    };

    $scope.getPhones = function() {
      $http({
        method: 'GET',
        url: '/api/telephone'
      }).then(phones.success, phones.error);
    };


    var phone = {
       success: function(response) {
        $scope.phoneById = response.data;
        console.log($scope.phoneById)
        $scope.invalid = false;

        if (!$scope.phoneById) {
          $scope.invalid = true;
          $scope.message = "Нет пользователя с таким ID";
        }
      },
      error: function(response) {
        console.log(response);
      }
    };

    $scope.invalid = false;
    $scope.getById= function(id) {
      if (id) {
        $scope.invalid = false;

        $http({
          method: 'GET',
          url: '/api/telephone/' + (id - 1)
        }).then(phone.success, phone.error);
      }
      else {
        $scope.invalid = true;
        $scope.message = "Введите ID";
      }
    };

  }
}]);
