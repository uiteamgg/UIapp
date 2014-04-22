angular.module('yoAngularProjectApp')

 .controller('SprintCtrl', function ($scope,Myservice) {

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
    	var graphical_representation = function(values){
			// start function
			$('#graphical_representation').highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: 'Story Status',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%',
                colors:['rgb(0, 178, 255)', 'rgb(226, 249, 23)', 'rgb(73, 224, 21)', 'rgb(255, 200, 100)', 'rgb(66, 190, 72)', 'rgb(217, 83, 79)']
                
                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Stories',
            data: [
                ['In process',   45],
                ['Done',       40],
                ['PO Accepted/ Rejected', 17],
                ['Client Accepted/ Rejected',    19],
                ['Need Discussion',    8],
                ['Red Flag', 5]
            ]
        }]
    });

    // end function
    	};

    	var details="";
    	graphical_representation(details);

    });
  });
