angular.module('yoAngularProjectApp')

 .controller('SprintCtrl', function ($scope,Myservice) {

 	$('.nav').find('li').removeClass("active");
 	$('#sprint').closest('li').addClass("active");

    console.log("Inside sprint detail controller");

    $scope.stories=["story1","story2","story3","story4","story5","story6","story7","story8","story9","story10"];

    $scope.confirmAcceptance=function(){
    	console.log("Inside confirm function");
    }

    $scope.handleDrop = function() {
        console.log('Item has been dropped');
    }
    
  });
