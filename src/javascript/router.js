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
        controller: "main"
      })
      .state('green', {
          url: '/green',
          templateUrl: "javascript/states/green.html",
          controller: "main",
      })
      .state('teal', {
          url: '/teal',
          templateUrl: "javascript/states/teal.html",
          controller: "main",
      })
      .state('red', {
          url: '/red',
          templateUrl: "javascript/states/red.html",
          controller: "main",
      })
  });
