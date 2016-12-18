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
        controller: "mainCtrl"
      })
      .state('main.edit', {
        url: "/edit",
        templateUrl: "javascript/main/main-edit.html",
        controller: "mainCtrl"
      })
      .state('handbook', {
        url: '/handbook',
        // templateUrl: "javascript/route/handbook/handbook.html"
        templateUrl: "javascript/handbook/handbookTmpl.html",
        controller: "mainCtrl"
      })
  });
