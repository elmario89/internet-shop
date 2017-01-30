(function(){    
  angular.module('app')
     .directive('sidebarElem', function($timeout) {
      return {
        restrict: 'AE',
        link: function(scope, elem, attrs) {
          elem.on('click', function() {
            scope.clickedElement = elem;
          });
        }
      };
  });
})();