'use strict';

angular.module('yoAngularProjectApp')
  .controller('MycontrollerCtrl', function ($scope,Myservice) {
    console.log("Inside controller");
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.foo="Hello World";
   
  })

 .controller('HotelCtrl', function ($scope,Myservice) {
    console.log("Inside hotel controller");
    $scope.foo="Hello World";
    Myservice.success(function(data) { 
    console.log(JSON.stringify(data));
     	//  $scope.foo = "Hello "+data.contentItem[0].username;
      	//  console.log("foo value is:"+$scope.foo);
  	console.log("Hotels information:");
  	console.log(data.hotels[0].hotelName);
    console.log(data.hotels[1].hotelName);
    $scope.tableData=[];
    console.log("tableData declared");
	  $scope.tableData[0]=data.hotels[0];
    $scope.tableData[1]=data.hotels[1];
    $scope.tableData[2]=data.hotels[2];
    $scope.tableData[3]=data.hotels[3];
    $scope.tableData[4]=data.hotels[4];

    console.log("Table data is:");
    console.log($scope.tableData);
    console.log($scope.tableData[0]);

  });
  });
