angular.module('app')
  .controller('handbookCtrl', ['$scope', '$http', handbookCtrl]);

function handbookCtrl($scope, $http) {

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
};