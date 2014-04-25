angular.module('yoAngularProjectApp')

 .controller('OverviewController', function ($scope) {
    console.log("Inside overview controller");

    $('.nav').find('li').removeClass("active");
    $('#overview').closest('li').addClass("active");
   
    

 
    // array of items for dragging
    $scope.items = ["story1","story2","story3","story4","story5","story6","story7","story8","story9","story10"];
    
 
    $scope.handleDrop = function() {
        console.log('Item has been dropped');
    }

    /*$("#showLeft").click(function () {
	 	console.log("running script");
	    // Set the effect type
	    var effect = 'slide';
	    // Set the options for the effect type chosen
	    var options = { direction: 'left' };
	    // Set the duration (default: 400 milliseconds)
	    var duration = 700;
	    $('.backlogbottom').toggler(effect, options, duration);
});*/
 
    $scope.addSprint=function(){
       console.log("inside add sprint");
        var existingCol=parseInt($("#main").find('thead th').length) + 1;
      
       var elementHead="<th> Sprint"+existingCol+"</th>";
       var elementtd="<td   class='inProcess' droppable drop='handleDrop()' data-column="+existingCol+"></td>";
       $("#main").find('thead tr:first-child').append(elementHead);
       $("#main").find('tbody tr:first-child').append(elementtd);
    }

     
      
  });
  
