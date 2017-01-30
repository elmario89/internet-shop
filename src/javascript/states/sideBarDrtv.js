(function() {
  'use strict';
  angular
  .module('app')
  .directive('sideBar', sideBar);

  function sideBar() {
    function link(scope, element, attrs) {
     
    }

    return {
      scope: {
      },
      restrict: 'E',
      controller: 'main',
      templateUrl: 'sideBarTmpl.html',
      link: link
    };
  }
})();