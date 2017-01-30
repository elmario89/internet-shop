angular.module('app')
	.controller('main', ['$timeout', '$state', '$rootScope', main]);

function main($timeout, $state, $rootScope) {
	var vm = this;
	
	vm.isAnimating =false;
	
}