angular.module('yoAngularProjectApp')

 .controller('SprintCtrl', function ($scope,Myservice,GetChart) {

 	$('.nav').find('li').removeClass("active");
 	$('#sprint').closest('li').addClass("active");

 /*   console.log("Inside sprint detail controller");

    var len;
    var i=0;

    $scope.stories=["story1","story2","story3","story4","story5","story6"];
    
    len=$scope.stories.length;

    for(var j=1;j<len;j++)
    {
    	//console.log("Hi");
    	console.log($("#item"+j));
    	$("#item"+j).css('display','none');
    }

    $scope.addStory=function(){
    	i=i+1;
    	console.log("Incremented value of i is:" +i);
    	console.log("Inside add story function");
    	
    	console.log($scope.stories.length);
    	
    	console.log($('#item0'));
    	if(i<6)
    	$("#item"+i).css('display','block');
    	
    	

    }

    $scope.handleDrop = function() {
        console.log('Item has been dropped');
    }
    
*/
 console.log("Inside sprint detail controller");

    var len;
    var i=0;

    $scope.stories=["story1","story2"];
    
    i=$scope.stories.length;


    $scope.deleteNote=function(index){
        console.log("Index is:"+index);
        console.log("Inside delete note function");
        console.log($("#item"+index).remove());
    }

    $scope.addStory=function(){
        i=i+1;
        $scope.stories.push("story"+i);
         console.log("Stories array after push is:");
       console.log($scope.stories);

    }

    $scope.handleDrop = function() {
        console.log('Item has been dropped');
    }
    

    
  });
