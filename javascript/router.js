angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: "javascript/login/loginTmpl.html"
      })
      .state('main', {
        url: "/main",
        templateUrl: "javascript/main/mainTmpl.html",
      })
  });
