angular.module('app')
	.controller('main', ['$scope', '$state', main]);

function main($scope, $state) {
	var vm = this;
	
	vm.goToState = function(state){
		$state.go(state);
		// console.log(state);
	};
	
}