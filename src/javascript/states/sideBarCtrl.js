(function() {
  'use strict';
    angular.module('app')
    .controller('sideBarCtrl', ['$timeout', '$state', sideBarCtrl]);

    function sideBarCtrl($timeout, $state) {

      var vm = this;

      vm.goToState = function(state){
        alert(state);
      }
    }
})();