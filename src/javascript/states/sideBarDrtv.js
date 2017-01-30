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
        startAnimating: '=?'
      },
      restrict: 'E',
      controller: 'sideBarCtrl',
      templateUrl: 'javascript/states/sideBarTmpl.html',
      link: link
    };
  }
})();