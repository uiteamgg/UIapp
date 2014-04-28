'use strict';

angular
  .module('yoAngularProjectApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Dashboard', {
        templateUrl: 'views/main.html',
        controller: 'pieChartController'
      })
      .when('/SprintDetail', {
        templateUrl: 'views/sprintDetail.html',
        controller: 'SprintCtrl'
      })
	  .when('/Overview',{
		templateUrl: 'views/Overview.html',
		controller:'OverviewController'
	 
	  
	  })
      
      .otherwise({
        redirectTo: '/Dashboard'
      });
  });
