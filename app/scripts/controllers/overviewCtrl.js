angular.module('yoAngularProjectApp')

 .controller('OverviewController', function ($scope) {
    console.log("Inside overview controller");
    $('.nav').find('li').removeClass("active");
    $('#overview').closest('li').addClass("active");
    $scope.dropped = [];
 
    // array of items for dragging
    $scope.items = [
        {id: 1, name: "Story1"}, 
        {id: 2, name: "Story2" },
        {id: 3, name: "Story3" },
        {id: 4, name: "Story4" }
    ];
 
    $scope.moveToBox = function(id) {
 
        for (var index = 0; index < $scope.items.length; index++) {
 
            var item = $scope.items[index];
                 
            if (item.id == id) {
                // add to dropped array
                $scope.dropped.push(item);
				
                // remove from items array
                $scope.items.splice(index, 1);
				
            }
        }
 
        $scope.$apply();
    };
 
   

     
      
  });
  
