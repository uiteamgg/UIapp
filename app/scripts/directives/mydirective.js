'use strict';

angular.module('yoAngularProjectApp')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  })

  .directive('draggable', function() {
    return function(scope, element) {
        // this gives us the native JS object
        var el = element[0];

        var itemParent;
        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {

                console.log(el);

                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);

            

                     if($("#" + this.id).closest('.inProcess').length==1){
                      itemParent="inProcess";
                     }
                     else if($("#" + this.id).closest('.done').length==1){
                      itemParent="done";
                     }
                     else if($("#" + this.id).closest('.poAcceptedrejected').length==1){
                      itemParent="poAcceptedrejected";
                     }
                     else if($("#" + this.id).closest('.clientAcceptedrejected').length==1){
                      itemParent="clientAcceptedrejected";
                     }
                     else if($("#" + this.id).closest('.needDisucssion').length==1){
                      itemParent="needDisucssion";
                     }
                     else if($("#" + this.id).closest('.redflag').length==1){
                      itemParent="redflag";
                     }
                     else{
                      itemParent="sprint";
                     }

                     console.log("Itemparent is (dragstart):"+itemParent);

                this.classList.add('drag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {

               var storyid=this.id;
               var str1;

          
               var storytext=$("#" + storyid +" a h4").text();
               var storytext1=storytext.trim();
               var arr;
               console.log("Itemparent is (dragend):"+itemParent);


                    if(itemParent.localeCompare("inProcess")==0){
                   
                      arr=scope.stories1;
                      
                     }
                     else if(itemParent.localeCompare("done")==0){
                     
                      arr=scope.stories2;
                     }
                     else if(itemParent.localeCompare("poAcceptedrejected")==0){
                     
                      arr=scope.stories3;
                     }
                     else if(itemParent.localeCompare("clientAcceptedrejected")==0){
                     
                      arr=scope.stories4;
                     }  
                     else if(itemParent.localeCompare("needDisucssion")==0){
                     
                      arr=scope.stories5;
                     }
                     else if(itemParent.localeCompare("redflag")==0){
                    
                      arr=scope.stories6;
                     }
                     else if(itemParent.localeCompare("sprint")==0){
                     
                      arr=scope.stories;
                   }

            console.log("Array length is:"+arr.length);
               console.log("Story text is:"+storytext1);
               for(var i=0;i<arr.length;i++)
                {

                  str1=(arr[i].name).trim();
         
                  if(str1.localeCompare(storytext1)==0)
                  {
                      console.log("b4 push");
                     if($("#" + this.id).closest('.inProcess').length==1){
                    
                      scope.stories1.push(arr[i]);
                      storytext1="";
                     }
                     else if($("#" + this.id).closest('.done').length==1){
                      scope.stories2.push(arr[i]);
                       storytext1="";
                     }
                     else if($("#" + this.id).closest('.poAcceptedrejected').length==1){
                      scope.stories3.push(arr[i]);
                       storytext1="";
                     }
                     else if($("#" + this.id).closest('.clientAcceptedrejected').length==1){
                      scope.stories4.push(arr[i]);
                       storytext1="";
                     }
                     else if($("#" + this.id).closest('.needDisucssion').length==1){
                      scope.stories5.push(arr[i]);
                       storytext1="";
                     }
                     else if($("#" + this.id).closest('.redflag').length==1){
                      scope.stories6.push(arr[i]);
                       storytext1="";
                     }

                     if(itemParent.localeCompare("inProcess")==0){
                      
                      scope.stories1.splice(i,1);
                      itemParent="";
                     }
                     else if(itemParent.localeCompare("done")==0){
                     
                      scope.stories2.splice(i,1);
                      itemParent="";
                     }
                     else if(itemParent.localeCompare("poAcceptedrejected")==0){
                     
                      scope.stories3.splice(i,1);
                      itemParent="";
                     }
                     else if(itemParent.localeCompare("clientAcceptedrejected")==0){
                    
                      scope.stories4.splice(i,1);
                      itemParent="";
                     }
                     else if(itemParent.localeCompare("needDisucssion")==0){
                     
                      scope.stories5.splice(i,1);
                      itemParent="";
                     }
                     else if(itemParent.localeCompare("redflag")==0){
                    
                      scope.stories6.splice(i,1);
                      itemParent="";
                     }
                     else if(itemParent.localeCompare("sprint")==0){
                    
                     scope.stories.splice(i,1);
                     itemParent="";
                   }
                  
                  }
                }





                console.log("After splicing--");

                console.log("Story array is:");
                console.log(scope.stories);

                console.log("stories1 array is:");
                console.log(scope.stories1);

                console.log("stories2 array is:");
                console.log(scope.stories2);

              console.log("stories3 array is:");
                console.log(scope.stories3);

                console.log("stories4 array is:");
                console.log(scope.stories4);

                console.log("stories5 array is:");
                console.log(scope.stories5);

                console.log("stories6 array is:");
                console.log(scope.stories6);

              this.classList.remove('drag');
                return false;
            },
            false
        );
    }
})

  .directive('droppable', function() {
    return {
        scope: {
            drop: '&' // parent
        },
        link: function(scope, element) {
            // again we need the native object
            var el = element[0];

            el.addEventListener(
			    'dragover',
			    function(e) {
			        e.dataTransfer.dropEffect = 'move';
			        // allows us to drop


			        if (e.preventDefault) e.preventDefault();
			        this.classList.add('over');

			//        console.log("Inside DROP-dragover----");

			        return false;
			    },
			    false
			);




			el.addEventListener(
			    'dragenter',
			    function(e) {
			        this.classList.add('over');

		//	        console.log("Inside DROP-dragenter----");

			        return false;
			    },
			    false
			);

			el.addEventListener(
			    'dragleave',
			    function(e) {


	//		    	console.log("Inside DROP-drag leave event--");

			        this.classList.remove('over');
			        return false;
			    },
			    false
			);

			el.addEventListener(
				'drop',
				function(e) {

					if (e.stopPropagation) e.stopPropagation();

					this.classList.remove('over');

					var item = document.getElementById(e.dataTransfer.getData('Text'));

          console.log("Item is:")
          console.log(item);
          var itemid=item.id;
                 
					this.appendChild(item);

                    if($("#" + item.id).closest('.poAcceptedrejected').length==1)
                    {
                         $( "#dialog-confirm" ).dialog({
                              resizable: false,
                              height:140,
                              modal: true,
                              buttons: {
                                Accept: function() {
                                  $( this ).dialog( "close" );
                                  $("#" + item.id +" a").css('background','rgb(73, 224, 21)');
                                },
                                Reject: function() {
                                  $( this ).dialog( "close" );
                                  $("#" + item.id +" a").css('background','rgb(217, 35, 35)');
                                }
                              }
                            });
                    }
                    if($("#" + item.id).closest('.clientAcceptedrejected').length==1)
                    {

                         $( "#dialog-confirm" ).dialog({
                              resizable: false,
                              height:140,
                              modal: true,
                              buttons: {
                                Accept: function() {
                                  $( this ).dialog( "close" );
                                  $("#" + item.id +" a").css('background','rgb(255, 200, 100)');
                                },
                                Reject: function() {
                                  $( this ).dialog( "close" );
                                  $("#" + item.id +" a").css('background','rgb(217, 35, 35)');
                                }
                              }
                            });


                       // alert("Choose accepted or rejected for client------");
                    }
                    if($("#" + item.id).closest('.inProcess').length==1)
                    {
                        $("#" + item.id +" a").css('background','rgb(0, 178, 255)');   
                    }
                    if($("#" + item.id).closest('.done').length==1)
                    {
                        $("#" + item.id +" a").css('background','rgb(226, 249, 23)');
                    }
                    if($("#" + item.id).closest('.needDisucssion').length==1)
                    {
                        $("#" + item.id +" a").css('background','rgb(66, 190, 72)');
                    }
                    if($("#" + item.id).closest('.redflag').length==1)
                    {
                        $("#" + item.id +" a").css('background','#d9534f');
                    }

					// call the drop passed drop function
					scope.$apply('drop()');

					return false;
					},

		false
	);





        }
    }
})


 
