angular.module('yoAngularProjectApp')

 .controller('SprintCtrl', function ($scope,Myservice,GetChart) {

 	$('.nav').find('li').removeClass("active");
 	$('#sprint').closest('li').addClass("active");

    console.log("Inside sprint detail controller");

    var len;
    var i=0;

    $scope.stories=["story1","story2","story3","story4","story5","story6"];/*,"story6","story7","story8","story9","story10"];*/
    
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
    	/*if(i>=5)
    	{
    		i=0;
    	}8/
    	/*for(var j=1;j<len;j++)
    	{
    		//console.log("Hi");
    		console.log($("#item"+j));
    		$("#item"+j).css('display','none');
    	}*/
    	

    }

    $scope.handleDrop = function() {
        console.log('Item has been dropped');
    }
    


    $("#graphics").click (function(){
    	console.log("click");
    	$(this ).show();
    	$( this ).slideDown( "slow", function() {
    		// Animation complete.
  		});
  		var chartholder = $ ("#graphical_representation");
    	var graphical_representation = GetChart.funnelChart();

    	var details="";
    	graphical_representation(chartholder,details);

    });
  });
