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
        controller: "main",
        controllerAs: 'vm'
      })
      .state('green', {
          url: '/green',
          templateUrl: "javascript/states/green.html",
          controller: "main",
          controllerAs: 'vm'
      })
      .state('teal', {
          url: '/teal',
          templateUrl: "javascript/states/teal.html",
          controller: "main",
          controllerAs: 'vm'
      })
      .state('red', {
          url: '/red',
          templateUrl: "javascript/states/red.html",
          controller: "main",
          controllerAs: 'vm'
      })
  });
