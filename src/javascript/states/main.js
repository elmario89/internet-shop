(function() {
  'use strict';
	  angular.module('app')
		.controller('main', ['$scope', main]);

		function main($scope) {
      $scope.isAnimating = true;
			$scope.animate = function() {
				$scope.isAnimating = !$scope.isAnimating;
			};
		}
})();
