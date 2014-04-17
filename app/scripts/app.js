'use strict';

angular
  .module('yoAngularProjectApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .directive("ddDraggable", function(){
  console.log("inside drag");
    return {
        restrict: "A",
        link: function(scope, element, attributes, ctlr) {
            element.attr("draggable", true);
 
            element.bind("dragstart", function(eventObject) {
                eventObject.originalEvent.dataTransfer.setData("text", attributes.itemid);
            });
        }
    }
	
  })
    .directive("ddDropTarget", function(){
	
	console.log("inside drop");
	 return {
        restrict: "A",
        link: function (scope, element, attributes, ctlr) {
 
            element.bind("dragover", function(eventObject){
                eventObject.preventDefault();
            });
 
            element.bind("drop", function(eventObject) {
                 
                // invoke controller/scope move method
                scope.moveToBox(parseInt(eventObject.originalEvent.dataTransfer.getData("text")));
 
                // cancel actual UI element from dropping, since the angular will recreate a the UI element
                eventObject.preventDefault();
            });
        }
    };
	
	
	
	
	
	})
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MycontrollerCtrl'
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
