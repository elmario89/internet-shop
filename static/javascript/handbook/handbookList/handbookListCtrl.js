angular.module('app')
  .controller('handbookListCtrl', ['$scope', '$http', handbookListCtrl]);

  function handbookListCtrl($scope, $http) {

    function success(response) {
      $scope.phoneById = response.data;
      $scope.invalid = false;

      if (!$scope.phoneById) {
        $scope.invalid = true;
        $scope.message = "Нет такого ID";
      }
    };

    function error(response) {
      console.log(response);
    }

    $scope.invalid = false;
    $scope.getById= function() {
      if ($scope.id) {
        $scope.invalid = false;

        $http({
          method: 'GET',
          url: '/api/telephone/' + ($scope.id - 1)
        }).then(success, error);
      }
      else {
        $scope.invalid = true;
        $scope.message = "Введите ID";
      }
    };
  };
