'use strict';

angular.module('yoAngularProjectApp')
  
  .controller('MycontrollerCtrl', function ($scope,Myservice) {
    console.log("Inside controller");
   
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   
  });


 
  
 
    
   
