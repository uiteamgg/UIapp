angular.module('yoAngularProjectApp')

 .controller('pieChartController',['$modal', '$scope','$rootScope', function ($modal,$scope,$rootScope,Myservice,GetChart) {

    console.log("Inside piechart controller");

        $('.nav').find('li').removeClass("active");
        $('#dashboard').closest('li').addClass("active");
        
        $scope.$root.generateModal = function (){
            console.log("Inside alert");
	        $scope.$root.modalInstance=$modal.open({
	       		templateUrl:'views/modalForChart.html',
	            backdrop: 'static', 
	            keyboard: true,
	            controller:'chartController'
	        });
		}

    
}])


   
/* $scope.generateModal = function (){
            console.log("Inside alert");
              /* $rootScope.modalInstance=$modal.open({templateUrl:'views/sprintModal.html',
                        backdrop: 'static', keyboard: true,controller:'ModalCtrl'});*/   
  /*     } */
.controller('chartBody', ['$modal', '$scope','$rootScope',function($modal, $scope, $rootScope) {   
        console.log("Chart Modal window");      
     
  }])

.controller('chartController', ['$modal', '$scope','$rootScope',function($modal, $scope, $rootScope) {   
        console.log("Modal window");
       
        $scope.ok = function (){
            $modal.close();
        }
        $scope.close = function () {
          $rootScope.modalInstance.close();
        };
      /* $scope.showTab = function(val){
          $rootScope.tab  = val;
        }*/
}]);