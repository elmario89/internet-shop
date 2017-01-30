angular.module('app')
	.controller('main', ['$timeout', '$state', '$rootScope', main]);

function main($timeout, $state, $rootScope) {
	var vm = this;
	
	vm.isAnimating =false;
	
	vm.goToState = function(state){	
		vm.isAnimating = true;
		
		$timeout(function() {
			$state.go(state);
		}, 1100);
	};

	$rootScope.$on('$stateChangeSuccess',function(){
		vm.isAnimating = someService.doSomething();

		console.log(vm.isAnimating);
  });
}