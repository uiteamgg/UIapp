'use strict';

angular
  .module('yoAngularProjectApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'pieChartController'
      })
      .when('/SprintDetail', {
        templateUrl: 'views/sprintDetail.html',
        controller: 'SprintCtrl'
      })
      .when('/HotelTable', {
        templateUrl: 'views/hotelTable.html',
        controller: 'HotelCtrl'
      })
      .when('/ContactTable', {
        templateUrl: 'views/ContactTable.html',
        controller: 'ContactCtrl'
      })
	  .when('/Overview',{
		templateUrl: 'views/Overview.html',
		controller:'OverviewController'
	  
	  
	  })
      
      .otherwise({
        redirectTo: '/'
      });
  });
