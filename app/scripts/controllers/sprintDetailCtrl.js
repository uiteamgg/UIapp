angular.module('yoAngularProjectApp')

 .controller('SprintCtrl', ['$modal', '$scope','$rootScope', function ($modal,$scope,$rootScope,Myservice,GetChart) {

 	$('.nav').find('li').removeClass("active");
 	$('#sprint').closest('li').addClass("active");

 console.log("Inside sprint detail controller");

    var len;
    var i=0;
    
    var repeat=0;
    var min=3;
    var max=100;


    $scope.stories=[ {id:"item1",name:"story1"},{id:"item2",name:"story2"}];
    $scope.stories1=[];
    $scope.stories2=[];
    $scope.stories3=[];
    $scope.stories4=[];
    $scope.stories5=[];
    $scope.stories6=[];
    
    i=$scope.stories.length;
    var arrDel=[];

    $scope.deleteNote=function(parent,index){
        console.log("Inside delete");
        console.log("Parent class is:"+parent);
        console.log("Index is:"+index);

        if(parent=="sprintlist")
        {
             $scope.stories.splice(index,1);

        }
        else if(parent=="inProcess")
        {
             $scope.stories1.splice(index,1);
        }
        else if(parent=="done")
        {
             $scope.stories2.splice(index,1);
        }
        else if(parent=="poAcceptedrejected")
        {
             $scope.stories3.splice(index,1);
        }
        else if(parent=="clientAcceptedrejected")
        {
             $scope.stories4.splice(index,1);
        }
        else if(parent=="needDisucssion")
        {
             $scope.stories5.splice(index,1);
        }
        else if(parent=="redflag")
        {
             $scope.stories6.splice(index,1);
        }
       // console.log($("#"+index).remove());
       
//       $scope.$apply();

    }

    


    $scope.addStory=function(){
      
        random = Math.round(min + Math.random() * (max - min));

        console.log("Random num generated is:"+random);

        for (var j=0;j<$scope.stories.length;j++)
        {
            if($scope.stories[j]==random)
            {
                repeat=1;
                break;
            }
        }

        if((random!=0)&&(random!=1)&&(random!=2)&&(repeat!=1))
        {
            var newobj={id:"item"+random,name:"story"+random};
            $scope.stories.push(newobj);
        }
         console.log("Stories array after push is:");
       console.log($scope.stories);
       repeat=0;
      // $scope.$apply();
    }

    $scope.handleDrop = function() {
        console.log('Item has been dropped');
    }
    

    $scope.open = function (){

            console.log("Inside alert");
           $rootScope.modalInstance=$modal.open({templateUrl:'views/sprintModal.html',
                    backdrop: 'static', keyboard: true,controller:'ModalCtrl'});
           
       }

    $scope.acceptClick=function(itemid){
        console.log("Inside accept click");
        $("#" + itemid +" a").css('background','rgb(73, 224, 21)');
    }

    $scope.rejectClick=function(){
        console.log("Inside reject click");
        $("#" + item.id +" a").css('background','rgb(217, 35, 35)');
    }

  }])

.controller('sprintModalCtrl', ['$modal', '$scope','$rootScope',function($modal, $scope, $rootScope) {   
        console.log("Sprint Modal window");
       
       
     
  }])

.controller('ModalCtrl', ['$modal', '$scope','$rootScope',function($modal, $scope, $rootScope) {   
        console.log("Modal window");
       
        $scope.ok = function (){
            $modal.close();
        }
        $scope.close = function () {
          $rootScope.modalInstance.close();
        };
       $scope.showTab = function(val){
          console.log("hi")
          $rootScope.tab  = val;
        }
     
  }]);


