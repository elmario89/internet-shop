angular.module('app')
  .controller('handbookListCtrl', ['$scope', '$http', handbookListCtrl]);

  function handbookListCtrl($scope, $http) {

    function success(response) {
      $scope.phoneById = response.data;
    };

    function error(response) {
      console.log(response);
    }

    $scope.invalid = false;
    $scope.getById = function() {
      if ($scope.id) {
        $scope.invalid = false;

        $http({
          method: 'GET',
          url: '/api/telephone/' + $scope.id
        }).then(success, error);
      }
      else {
        $scope.invalid = true;
      }
    };
  };
