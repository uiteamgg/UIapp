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
        controller: 'MycontrollerCtrl'
      })
      .when('/HotelTable', {
        templateUrl: 'views/hotelTable.html',
        controller: 'HotelCtrl'
      })
      .when('/abc',{
        templateUrl: 'views/abc.html',
        controller: 'abcCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
