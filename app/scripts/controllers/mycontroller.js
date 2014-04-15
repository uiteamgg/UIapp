'use strict';

angular.module('yoAngularProjectApp')
  
  .controller('MycontrollerCtrl', function ($scope,Myservice) {
    console.log("Inside controller");
    var stories=[];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.foo="Hello World";
    
    $(function() {
            $( "#tabs" ).tabs();
            $(  "#sidetabs" ).tabs();
    });

    $("#add").click(function(){
        var newstory=$("#addstory").val();
        stories.push(newstory);
        
        console.log("stories--"+ stories);
        $(".readstories").append("<li><button type='button' class='storybutton'>"+newstory+"</button><span class='desc'> -> </span></li>");
         
    });
       
  })

 .controller('HotelCtrl', function ($scope,Myservice) {

    console.log("Inside hotel controller");
    
      Myservice.success(function(data) { 
        console.log(JSON.stringify(data));
         	
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
  })

.controller('ContactCtrl', function ($scope,Getdata) {
    console.log("Inside contact controller");
    
      Getdata.success(function(data) { 
        console.log(JSON.stringify(data));
          
        console.log("Contacts information:");
        console.log("personal contacts-------");
        console.log(data.contacts.personalContacts[0].contactId);
        console.log(data.contacts.personalContacts[1].contactId);
        console.log("professional contacts-------");
        console.log(data.contacts.personalContacts[0].contactId);
        console.log(data.contacts.personalContacts[1].contactId);


        $scope.personalContactData=[];
        $scope.professionalContactData=[];

        console.log("Declaring personal contacts array!!!");

        $scope.personalContactData[0]=data.contacts.personalContacts[0];
        $scope.personalContactData[1]=data.contacts.personalContacts[1];
        $scope.personalContactData[2]=data.contacts.personalContacts[2];
        $scope.personalContactData[3]=data.contacts.personalContacts[3];
        $scope.personalContactData[4]=data.contacts.personalContacts[4];

        console.log("Declaring professional contacts array!!!");

        $scope.professionalContactData[0]=data.contacts.professionalContacts[0];
        $scope.professionalContactData[1]=data.contacts.professionalContacts[1];
        $scope.professionalContactData[2]=data.contacts.professionalContacts[2];
        $scope.professionalContactData[3]=data.contacts.professionalContacts[3];
        $scope.professionalContactData[4]=data.contacts.professionalContacts[4];


      /*  console.log(data.hotels[0].hotelName);
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
        console.log($scope.tableData[0]);*/

    });
  });