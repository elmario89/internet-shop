(function(){    
    angular.module('app')
       .factory('someService',function(){
            return {
               doSomething: function(){
                  return true;
               }
           };
       });
})();