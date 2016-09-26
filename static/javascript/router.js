angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
    //
    // Now set up the states
    $stateProvider
      // .state('handbook', {
      //   url: '/handbook',
      //   templateUrl: "javascript/handbook/handbookTmpl.html"
      // })
      .state('main', {
        url: "/main",
        templateUrl: "javascript/main.html",
      })
  });
