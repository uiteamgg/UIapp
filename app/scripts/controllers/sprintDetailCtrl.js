angular.module('yoAngularProjectApp')

 .controller('SprintCtrl', function ($scope,Myservice,GetChart) {

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


    $scope.deleteNote=function(index){
        console.log("Index is:"+index);
        console.log("Inside delete note function");
        console.log($("#item"+index).remove());
    }

    $scope.addStory=function(){
        //i=i+1;

       // var random=Math.round(Math.random()*100)+1;
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
       $scope.$apply;
    }

    $scope.handleDrop = function() {
        console.log('Item has been dropped');
    }
    

    
  });
