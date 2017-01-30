(function() {
  'use strict';
    angular.module('app')
    .controller('sideBarCtrl', [sideBarCtrl]);

    function sideBarCtrl() {
      var vm = this;

      vm.goToState = function(state){
        alert(state);
      }
    }
})();