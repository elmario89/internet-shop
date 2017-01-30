angular.module('app')
	.controller('main', ['$timeout', '$state', '$rootScope', main]);

function main($timeout, $state, $rootScope) {
	var vm = this;
	
	vm.isAnimating = false;
	
	vm.goToState = function(state){
		vm.isAnimating = true;
		
		$timeout(function() {
			$state.go(state);
			vm.isAnimating = false;
		}, 2000);
	};
}