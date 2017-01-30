(function() {
  'use strict';
  angular
  .module('app')
  .directive('sideBar', sideBar);

  function sideBar() {
    function link(scope, element, attrs) {
      var vm = scope;

      vm.goToState = function(state){
        alert('bam')
        vm.isAnimating = true;
        
        $timeout(function() {
          $state.go(state);
        }, 1100);
      };
    }

    return {
      scope: {
      },
      restrict: 'E',
      controller: 'main',
      templateUrl: 'javascript/states/sideBarTmpl.html',
      link: link
    };
  }
})();