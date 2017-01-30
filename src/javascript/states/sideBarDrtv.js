(function() {
  'use strict';
  angular
  .module('app')
  .directive('sideBar', sideBar);

  function sideBar() {
    function link(scope, element, attrs) {
      // scope.goToState = function(state){
      //   alert(state);
        
      //   $timeout(function() {
      //     $state.go(state);
      //   }, 1100);
      // };
    }

    return {
      scope: {
        startAnimating: '=?'
      },
      restrict: 'E',
      controller: 'sideBarCtrl',
      templateUrl: 'javascript/states/sideBarTmpl.html',
      link: link
    };
  }
})();