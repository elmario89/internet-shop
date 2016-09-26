angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
    //
    // Now set up the states
    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: "javascript/main.html",
      })
      .state('handbook', {
        url: '/handbook',
        templateUrl: "javascript/route/handbook/handbook.html"
      })
  });
