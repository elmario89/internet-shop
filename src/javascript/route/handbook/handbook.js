'use strict';

angular
  .module('app')
  .config(['$stateProvider',
function($stateProvider) {

  var menuTop;
  // $stateProvider
  //   .state('handbook', {
  //     url: '/handbook',
  //     templateUrl: 'javascript/route/handbook/handbook.html',
  //     controller: ['$scope', '$http', handbook]
  //   });

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

    $scope.phoneById = {};
    var phone = {
       success: function(response) {
        $scope.phoneById.data = response.data;
        $scope.phoneById.invalid = false;
        delete $scope.phoneById.message;

        if (!$scope.phoneById.data) {
          $scope.phoneById.invalid = true;
          $scope.phoneById.message = "Нет пользователя с таким ID";
          console.log($scope.phoneById.message);
        }
      },
      error: function(response) {
        console.log(response);
      }
    };

    $scope.invalid = false;
    delete $scope.phoneById.message;
    $scope.getById= function(id) {
      if (id) {
        $scope.phoneById.invalid = false;
        delete $scope.phoneById.message;

        $http({
          method: 'GET',
          url: '/api/telephone/' + (id)
        }).then(phone.success, phone.error);
      }
      else {
        $scope.phoneById.invalid = true;
        $scope.phoneById.message = "Введите ID";
      }
    };

  }
}]);
