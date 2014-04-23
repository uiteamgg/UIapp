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


      /*  console.log("element 0 is:");
        console.log(element.index());
        console.log(el);*/

        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {


                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);

                this.classList.add('drag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {

            	console.log("Inside DRAG- dragend----");
              console.log("Story array inside dragend is:");
              console.log(scope.stories);

               var storyid=this.id;

               console.log("Story id is:"+storyid);

                var storytext=$("#" + storyid +" a h4").text();
                console.log("Storytext is:"+storytext);

              console.log("story text is:" +storytext);


              var storytext1=storytext.trim();
              console.log("Trimmed storytext is:"+storytext1);

               for(var i=0;i<scope.stories.length;i++)
                {
                
                  var str1=(scope.stories[i]).trim();
                  console.log("str1 is:"+str1);
                  console.log(str1.localeCompare(storytext1));
                  if(str1.localeCompare(storytext1)==0)
                  {
                    
                    console.log("Inside matched story");
                    console.log(scope.stories[i]);
                     if($("#" + this.id).closest('.inProcess').length==1){
                      scope.stories1.push(str1);
                      storytext1="";
                     }
                     if($("#" + this.id).closest('.done').length==1){
                      scope.stories2.push(str1);
                       storytext1="";
                     }
                     if($("#" + this.id).closest('.poAcceptedrejected').length==1){
                      scope.stories3.push(str1);
                       storytext1="";
                     }
                     if($("#" + this.id).closest('.clientAcceptedrejected').length==1){
                      scope.stories4.push(str1);
                       storytext1="";
                     }
                     if($("#" + this.id).closest('.needDisucssion').length==1){
                      scope.stories5.push(str1);
                       storytext1="";
                     }
                     if($("#" + this.id).closest('.redflag').length==1){
                      scope.stories6.push(str1);
                       storytext1="";
                     }
                    
                    
                   scope.stories.splice(i,1);
                  }
                }

              this.classList.remove('drag');

               
              console.log("Stories array after splice is:");
              console.log(scope.stories);

              console.log("Story1 array is:");
              console.log(scope.stories1);

              console.log("Story2 array is:");
              console.log(scope.stories2);

              console.log("Story3 array is:");
              console.log(scope.stories3);

              console.log("Story4 array is:");
              console.log(scope.stories4);

              console.log("Story5 array is:");
              console.log(scope.stories5);

              console.log("Story6 array is:");
              console.log(scope.stories6);

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

			        console.log("Inside DROP-dragover----");

			        return false;
			    },
			    false
			);




			el.addEventListener(
			    'dragenter',
			    function(e) {
			        this.classList.add('over');

			        console.log("Inside DROP-dragenter----");

			        return false;
			    },
			    false
			);

			el.addEventListener(
			    'dragleave',
			    function(e) {


			    	console.log("Inside DROP-drag leave event--");

			        this.classList.remove('over');
			        return false;
			    },
			    false
			);

			el.addEventListener(
				'drop',
				function(e) {

					console.log("Inside DROP-drop event--");
					// Stops some browsers from redirecting.
					if (e.stopPropagation) e.stopPropagation();

					this.classList.remove('over');

					var item = document.getElementById(e.dataTransfer.getData('Text'));




					console.log("Item before dropping is:");
					console.log(item);
          console.log("Id of item is:");
          console.log(item.id);
          var itemid=item.id;

					console.log("After item--------");
                 
					this.appendChild(item);

                    
                    console.log("item id before checking is:")
                    console.log(item.id);
                    console.log($("#" + item.id +" a"));
                    console.log("Length is:");
                    console.log($("#" + item.id).closest('.poAcceptedrejected').length);
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


                      // alert("Choose accepted or rejected for po------");
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


 
