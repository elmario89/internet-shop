(function() {
  'use strict';
	  angular.module('app')
		.controller('main', ['$scope', main]);

		function main($scope) {
      $scope.isAnimating = false;
			$scope.animate = function() {
				$scope.isAnimating = true;
			};
		}
})();
